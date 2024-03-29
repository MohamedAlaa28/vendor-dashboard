/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { classNames } from "../../Layout/Layout";

const product = [
  { id: 1, name: "Date Sent" },
  { id: 2, name: "Invoice ID" },
];
export default function InvoiceSelect() {
  const [selected, setSelected] = useState(product[0]);
  console.log(selected);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="text-[#686868]" style={{font:'normal normal medium 14px/17px Urbanist'}}>
            Sort by
          </Listbox.Label>
          <div className="mt-1 relative" style={{'box-shadow':'0px 10px 60px #DCDCDC8C'}}>
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-[#CCE7E6] focus:border-[#CCE7E6] sm:text-sm">
              <span className="block truncate w-[140px] text-[#686868]">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                {/* <SelectorIcon
                  className="h-5 w-5 text-[#686868]"
                  aria-hidden="true"
                /> */}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-48  bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {product.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-[#232323] bg-[#CCE7E6]" : "text-[#686868]",
                        "cursor-default select-none w-48 relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block w-40"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-[#CCE7E6]",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
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
  );
}
