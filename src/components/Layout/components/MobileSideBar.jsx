import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { classNames, navigation } from "../Layout";

// eslint-disable-next-line react/prop-types
const MobileSideBar = ({ sidebarMobileOpen, setSidebarMobileOpen }) => {
    return (
        <Transition.Root show={sidebarMobileOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarMobileOpen}>
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative max-w-xs w-full bg-[#3D897A] pt-5 pb-4 flex-1 flex flex-col">
                        <div className="absolute top-0 right-0 mr-4 mt-4">
                            <button
                                type="button"
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setSidebarMobileOpen(false)}
                            >
                                <CloseOutlinedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="flex-shrink-0 px-4 flex items-center">
                            <img
                                height={50}
                                width={100}
                                className="h-8 w-auto"
                                src="./images/logoLight.svg"
                                alt="mytreety"
                            />
                        </div>
                        <div className="mt-5 flex-1 h-0 overflow-y-auto">
                            <nav className="px-2 space-y-1">
                                {navigation.map((item) => !item.children ? (
                                    <Link
                                        key={item.id}
                                        to={item.to}
                                        className={classNames(
                                            "text-white hover:bg-[#d3eded54]",
                                            "group rounded-md py-2 px-2 flex items-center text-base font-medium"
                                        )}
                                    >
                                        <item.icon className="mr-4 h-6 w-6 text-white" aria-hidden="true" />
                                        {item.name}
                                    </Link>
                                ) : (
                                    <Disclosure as="div" key={item.id} className="space-y-1">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="group w-full flex justify-between px-2 py-2 rounded-md text-left text-sm font-medium text-white hover:bg-[#d3eded54]">
                                                    <div className="">
                                                        <item.icon className="mr-4 h-5 w-5 text-white" aria-hidden="true" />
                                                        <span>{item.name}</span>
                                                    </div>
                                                    <svg className={classNames(open ? "text-white rotate-90" : "text-gray-100", "flex-shrink-0 h-5 w-5 transform group-hover:text-gray-100 transition-colors ease-in-out duration-150")} viewBox="0 0 20 20" aria-hidden="true">
                                                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                                    </svg>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 py-2 text-sm text-gray-500">
                                                    {item.children.map((subItem) => (
                                                        <Link key={subItem.id} to={subItem.to} className="w-full rounded-md block py-1 pl-4 ml-4 text-xm text-white hover:bg-[#d3eded54]">
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </nav>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default MobileSideBar;
