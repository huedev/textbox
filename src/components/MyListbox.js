import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const MyListbox = (props) => {
  const [selected, setSelected] = useState(props.data[0]);
  const onChange = props.onChange;

  useEffect(() => {
    onChange(selected)
  }, [onChange, selected])

  return (
    <div className="w-72">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Label className="inline-block text-slate-600 dark:text-slate-400 text-sm">
          {props.label}
        </Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default border border-slate-300 dark:border-none rounded-lg bg-white dark:bg-slate-800 py-2 pl-3 pr-10 text-left shadow dark:highlight-white/5 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-sm">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-slate-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-80 w-full overflow-auto rounded-md bg-white dark:bg-slate-800 py-1 shadow-lg ring-1 ring-black dark:ring-slate-700 ring-opacity-5 focus:outline-none text-sm">
              {props.data.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-300' : 'text-slate-900 dark:text-slate-300'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-semibold' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-500">
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
      </Listbox>
    </div>
  )
}

export default MyListbox
