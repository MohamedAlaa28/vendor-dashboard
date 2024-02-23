import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { classNames, userNavigation } from "../Layout";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ isMobile, setSidebarMobileOpen }) => {
    return (
        <div className="flex-1 flex justify-between px-4 md:px-0 bg-[#F2F4F7] border-b border-gray-200">
            {isMobile &&
                <button
                    type="button"
                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3d897a] md:hidden"
                    onClick={() => setSidebarMobileOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <MenuOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            }

            <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                            <SearchOutlinedIcon className="h-5 w-8" aria-hidden="true" />
                        </div>
                        <input
                            id="search-field"
                            className="block bg-[#F2F4F7] h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                            placeholder="Search"
                            type="search"
                            name="search"
                        />
                    </div>
                </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6 gap-3">
                <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3d897a]"
                >
                    <span className="sr-only">View notifications</span>
                    <NotificationsNoneOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="mt-2 z-10">
                    <div>
                        <Menu.Button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3d897a]">
                            <span className="sr-only">Open user menu</span>
                            <img
                                height={40}
                                width={40}
                                className="rounded-full"
                                src="./images/profile-pic.png"
                                alt="profile"
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
                        <Menu.Items className="origin-top-right absolute right-2 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                            {userNavigation.map((item) => (
                                <Menu.Item key={item.id}>
                                    {({ active }) => (
                                        <Link
                                            to={item.to}
                                            className={classNames(
                                                active ? "bg-gray-100" : "",
                                                "block py-2 px-4 text-sm text-gray-700"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </Menu.Item>
                            ))}
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default Header