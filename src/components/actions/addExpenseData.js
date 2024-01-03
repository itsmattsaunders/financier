import React from 'react';

export default function AddExpenseData({
    name,
    setName,
    value,
    setValue,
    rate,
    setRate,
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

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    
    return (
        <div className="space-y-12 pt-6">
            <div className="border-b border-gray-900/10 pb-12">
                <h6 className="text-base font-semibold leading-7 text-gray-900">Add Expense</h6>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Enter the details of the expense you're incurring.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="expenseName" className="block text-sm font-medium leading-6 text-gray-900">
                            Expense Name
                        </label>
                        <input
                            onChange={handleNameChange}
                            value={name}
                            type="text"
                            name="expenseName"
                            id="expenseName"
                            required
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Expense name"
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="expenseAmount" className="block text-sm font-medium leading-6 text-gray-900">
                            Amount ($)
                        </label>
                        <input
                            onChange={handleValueChange}
                            value={value}
                            type="text"
                            inputMode="decimal"
                            name="expenseAmount"
                            id="expenseAmount"
                            pattern="^-?[0-9]\d*(\.\d+)?$"
                            required
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="1234.56"
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="interestRate" className="block text-sm font-medium leading-6 text-gray-900">
                            Interest Rate (%)
                        </label>
                        <input
                            onChange={handleRateChange}
                            value={rate}
                            type="text"
                            inputMode="decimal"
                            name="interestRate"
                            id="interestRate"
                            pattern="^-?[0-9]\d*(\.\d+)?$"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="5.5"
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="dueDate" className="block text-sm font-medium leading-6 text-gray-900">
                            Due Date (optional)
                        </label>
                        <input
                            onChange={handleEndDateChange}
                            value={endDate}
                            type="date"
                            name="dueDate"
                            id="dueDate"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="expenseType" className="block text-sm font-medium leading-6 text-gray-900 mb-3">Expense Type</label>
                        <div className="flex flex-wrap">
                            <div className="flex items-center space-x-2 mb-3 w-6/12">
                                <input checked={type === "mortgage"} onChange={handleTypeChange} type="radio" id="mortgage" name="expenseType" value="mortgage" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                <label htmlFor="mortgage" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Mortgage</label>
                            </div>
                            <div className="flex items-center space-x-2 mb-3 w-6/12">
                                <input checked={type === "creditCard"} onChange={handleTypeChange} type="radio" id="creditCard" name="expenseType" value="creditCard" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                <label htmlFor="Credit Card" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Credit Card</label>
                            </div>
                            <div className="flex items-center space-x-2 mb-3 w-6/12">
                                <input checked={type === "studentLoan"} onChange={handleTypeChange} type="radio" id="studentLoan" name="expenseType" value="studentLoan" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                <label htmlFor="studentLoan" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Student Loan</label>
                            </div>
                            <div className="flex items-center space-x-2 mb-3 w-6/12">
                                <input checked={type === "loan"} onChange={handleTypeChange} type="radio" id="loan" name="expenseType" value="loan" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                <label htmlFor="loan" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Loans (other)</label>
                            </div>
                            <div className="flex items-center space-x-2 mb-3 w-6/12">
                                <input checked={type === "misc"} onChange={handleTypeChange} type="radio" id="misc" name="expenseType" value="misc" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                <label htmlFor="misc" className="min-w-0 flex-1 text-sm font-medium text-gray-700">Misc. (other)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}