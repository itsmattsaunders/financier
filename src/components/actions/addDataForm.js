import React, { Fragment, useState, useContext } from 'react';
import { FinancialContext } from '../../financialContext.js'; 
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import AddAssetData from './addAssetData.js';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AddDataForm({ isOpen: { isOpen }, setIsOpen }) {
  const selections = [{ id: 1, type: 'assets', name: 'Add Asset' }, { id: 2, type: 'expense', name: 'Add Expense' }, { id: 3, type: 'income', name: 'Add Income' }];
  const [selected, setSelected] = useState(selections[0]);
  const { updateFinancialData } = useContext(FinancialContext);

  // Form States
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [rate, setRate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [type, setType] = useState('savings');
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const newAsset = {
      ID: randomId,
      ...formProps,
      timeStamp: new Date().toISOString()
    };

    const type = selected.type;

    updateFinancialData(newAsset, type);
    setName('');
    setValue('');
    setRate('');
    setStartDate('');
    setEndDate('');
    setType('savings');
    setIncome('');
    setExpense('');
    setSelected(selections[0]);
  };

  const handleSelectionChange = (selectedOption) => {
    const selection = selections.filter(selection => selectedOption === selection.type);
    setSelected(selection[0]);
  };
  
  return (
    <form onSubmit={handleFormSubmit}>
    {/* TODO: Don't love this but maybe I can change it later?? */}
    <Listbox value={selected} onChange={handleSelectionChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Add Financial Data</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {selections.map((selection) => (
                  <Listbox.Option
                    key={selection.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={selection.type}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {selection.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>

    {selected.type === 'assets' ? 
      <AddAssetData   
        name={name}
        setName={setName}
        value={value}
        setValue={setValue}
        rate={rate}
        setRate={setRate}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        type={type}
        setType={setType}/> : null }
      
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {selected.name}
        </button>
      </div>
    </form>
  )
}