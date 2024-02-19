import { useRef, useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
export default function SupportTable({ MessagesList }) {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);

  function toggleAll() {
    setSelectedMessages(checked || indeterminate ? [] : MessagesList);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div
      className="mt-8 flex flex-col"
      style={{ boxShadow: "0px 10px 60px #DCDCDC8C" }}
    >
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg  px-10 py-4 bg-white">
            <table className="min-w-full divide-y-[2px]">
              <thead>
                <tr className="px-5">
                  <th scope="col" className="relative  pr-6 sm:w-16 sm:pr-8">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#3d897a] focus:ring-[#3d897a] sm:left-6"
                      ref={checkbox}
                      checked={checked}
                      onChange={toggleAll}
                    />
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500 sm:pl-6"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Subject
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Date / Time
                  </th>

                  <th scope="col" className=" text-right mx-auto px-auto ">
                    {/* start dropdown */}

                    <Menu
                      as="div"
                      className="relative inline-block text-right ml-auto bg-white mr-5"
                    >
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full ml-auto  z-0">
                          <MoreVertIcon
                            className="-mr-1 ml-auto h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
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
                        <Menu.Items className="origin-top-right  absolute right-0 mt-2 w-56 rounded-md shadow-lg z-30 bg-white border-none">
                          <div className="py-1 z-30 bg-white relative">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  View details
                                </a>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Delete
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    {/* end dropdown */}
                  </th>
                </tr>
              </thead>
              <tbody className="di.ide-y di.ide-gray-200 ">
                {MessagesList.map((Message) => (
                  <tr
                    key={Message.id}
                    className={
                      selectedMessages.includes(Message)
                        ? "bg-gray-50"
                        : undefined
                    }
                  >
                    <td className="relative w-12 pr-6 sm:w-16 sm:pr-8">
                      {selectedMessages.includes(Message) && (
                        <div className="absolute inset-y-0 left-0 w-0.5 bg-[#3d897a]" />
                      )}
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#3d897a] focus:ring-[#3d897a] sm:left-6"
                        value={Message.id}
                        checked={selectedMessages.includes(Message)}
                        onChange={(e) =>
                          setSelectedMessages(
                            e.target.checked
                              ? [...selectedMessages, Message]
                              : selectedMessages.filter((p) => p !== Message)
                          )
                        }
                      />
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center">
                        <div className="font-medium text-gray-900">
                          <Link href={`/Support/${Message.id}`}>
                            #{Message.id}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {Message.Subject}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span
                        className={`${Message.Status === "Solved"
                            ? "text-[#3D897A]  bg-[#3D897A] bg-opacity-25"
                            : "text-[#F88700] bg-[#EE6363] bg-opacity-25"
                          } inline-flex rounded-full px-2 text-xs font-semibold leading-5 `}
                      >
                        {String(Message.Status)}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {Message.date}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      {/* start dropdown */}

                      <Menu
                        as="div"
                        className="relative inline-block text-right ml-auto bg-white"
                      >
                        <div>
                          <Menu.Button className="inline-flex justify-center w-full ml-auto z-10 ">
                            <MoreVertIcon
                              className="-mr-1 ml-auto h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
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
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-30 bg-white border-none focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    View details
                                  </a>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Delete
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
