import React from 'react';

export default function AddAssetData({
    name,
    setName,
    value,
    setValue,
    rate,
    setRate,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    type,
    setType
}) {

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleRateChange = (e) => {
        setRate(e.target.value);
    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    return (
    <div className="space-y-12 pt-6">
        <div className="border-b border-gray-900/10 pb-12">
            <h6 className="text-base font-semibold leading-7 text-gray-900">Add Asset</h6>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter the details of the asset you're adding.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label htmlFor="asset-name" className="block text-sm font-medium leading-6 text-gray-900">
                Asset Name
                </label>
                <input
                onChange={handleNameChange}
                value={name}
                type="text"
                name="asset-name"
                id="asset-name"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Asset name"
                />
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="asset-value" className="block text-sm font-medium leading-6 text-gray-900">
                Value ($)
                </label>
                <input
                onChange={handleValueChange}
                value={value}
                type="text"
                inputMode="decimal"
                name="asset-value"
                id="asset-value"
                pattern="^-?[0-9]\d*(\.\d+)?$"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="1234.56"
                />
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="interest-rate" className="block text-sm font-medium leading-6 text-gray-900">
                Interest/Return Rate (%)
                </label>
                <input
                onChange={handleRateChange}
                value={rate}
                type="text"
                inputMode="decimal"
                name="interest-rate"
                id="interest-rate"
                pattern="^-?[1-9]\d*(\.\d+)?$"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="5.5"
                />
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="start-date" className="block text-sm font-medium leading-6 text-gray-900">
                Start Date (optional)
                </label>
                <input
                onChange={handleStartDateChange}
                value={startDate}
                type="date"
                name="start-date"
                id="start-date"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="end-date" className="block text-sm font-medium leading-6 text-gray-900">
                End Date (optional)
                </label>
                <input
                onChange={handleEndDateChange}
                type="date"
                value={endDate}
                name="end-date"
                id="end-date"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div className="sm:col-span-3"></div>
                <div className="col-span-full">
                    <label htmlFor="asset-type" className="block text-sm font-medium leading-6 text-gray-900 mb-3">Asset Type</label>
                    <div className="flex flex-wrap">
                        <div className="flex items-center space-x-2 mb-3 w-6/12">
                            <input value={type} onChange={handleTypeChange} required type="radio" id="savings" name="asset-type" value="savings" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                            <label htmlFor="savings" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Savings</label>
                        </div>
                        <div className="flex items-center space-x-2 mb-3 w-6/12">
                            <input value={type} onChange={handleTypeChange} required type="radio" id="stocks" name="asset-type" value="stocks" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                            <label htmlFor="stocks" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Stocks (including ETFs)</label>
                        </div>
                        <div className="flex items-center space-x-2 mb-3 w-6/12">
                            <input value={type} onChange={handleTypeChange} required type="radio" id="termDeposits" name="asset-type" value="termDeposits" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                            <label htmlFor="termDeposits" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Term Deposits</label>
                        </div>
                        <div className="flex items-center space-x-2 mb-3 w-6/12">
                            <input value={type} onChange={handleTypeChange} required type="radio" id="crypto" name="asset-type" value="crypto" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                            <label htmlFor="crypto" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Crypto</label>
                        </div>
                        <div className="flex items-center space-x-2 mb-3 w-6/12">
                            <input value={type} onChange={handleTypeChange} required type="radio" id="other" name="asset-type" value="other" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                            <label htmlFor="other" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Other (property, etc)</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}