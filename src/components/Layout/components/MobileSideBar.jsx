import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { classNames, navigation } from "../Layout";

// eslint-disable-next-line react/prop-types
const MobileSideBar = ({ sidebarMobileOpen, setSidebarMobileOpen }) => {

    return (
        <div>
            {/* menu for mobile */}
            <Transition.Root show={sidebarMobileOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 md:hidden"
                    onClose={setSidebarMobileOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative max-w-xs w-full bg-[#3D897A] pt-5 pb-4 flex-1 flex flex-col">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 mr-4 mt-4 hover:fill-red-500">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarMobileOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <CloseOutlinedIcon className="h-6 w-6 text-white hover:fill-red-500 fill-current" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
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
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.id}
                                                to={item.to}
                                                className={classNames(
                                                    item.to === location.pathname
                                                        ? "bg-[#CCE7E6]/30 text-white"
                                                        : "text-white hover:bg-[CCE7E6] hover:text-white",
                                                    "group rounded-md py-2 px-2 flex items-center text-base font-medium"
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.to === location.pathname
                                                            ? "text-white"
                                                            : "text-white group-hover:text-white",
                                                        "mr-4 flex-shrink-0 h-6 w-6"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default MobileSideBar