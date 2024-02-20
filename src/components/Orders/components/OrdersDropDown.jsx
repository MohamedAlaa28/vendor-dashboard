import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const filters = [
  {
    id: "Filter",
    name: "Filter",
    checkBox: [
      { value: "Confirmed", label: "Confirmed" },
      { value: "Pending", label: "Pending" },
      { value: "On delivery", label: "On delivery" },
      { value: "Delivered", label: "Delivered" },
    ],
    radio: [
      { value: "Confirmed", label: "Confirmed" },
      { value: "Pending", label: "Pending" },
    ],
  },
];

export default function OrdersDropDown() {

  return (
    <div
      className="border border-[#D4D4D4] rounded-[10px] bg-white"
      style={{ "box-shadow": "0px 10px 60px #DCDCDC8C" }}
    >
      <div className="max-w-3xl mx-auto px-2 text-center sm:px-6 lg:max-w-7xl lg:px-4">
        <section aria-labelledby="filter-heading" className="py-1">
          <div className="flex items-center justify-between">
            <Popover.Group className="sm:flex sm:items-baseline sm:space-x-8">
              {filters.map((section) => (
                <Popover
                  as="div"
                  key={section.name}
                  id="desktop-menu"
                  className="relative z-10 inline-block text-left"
                >
                  <div>
                    <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-[#686868] hover:text-[#686868] focus:outline-none	gap-2 pt-1">
                      <div className="rotate-90 mt-1 p-[-10px]">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <span>{section.name}</span>
                      <ExpandMoreOutlinedIcon
                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-[#686868] group-hover:text-[#686868]"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Popover.Panel
                      className="origin-top-right absolute left-[-15px] top-[43px] bg-white rounded-md pl-4 pr-[85px] py-4  ring-1 ring-black ring-opacity-5 focus:outline-none"
                      style={{ "box-shadow": "0px 10px 60px #DCDCDC8C" }}
                    >
                      <form className="space-y-4">
                        <p className=" pr-6 text-sm font-medium text-[#686868] whitespace-nowrap">
                          Delivered
                        </p>
                        {section.checkBox.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded accent-[#3D897A]"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 pr-6 text-sm font-medium text-[#686868] whitespace-nowrap accent-[#3D897A]"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}

                        <p className=" pr-6 text-sm font-medium text-[#686868] whitespace-nowrap">
                          Payment
                        </p>
                        {section.radio.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="radio"
                              className="h-4 w-4 border-gray-300 rounded-[50%] accent-[#3D897A]"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 pr-6 text-sm font-medium text-[#686868] whitespace-nowrap"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </form>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ))}
            </Popover.Group>
          </div>
        </section>
      </div>
    </div>
  );
}
