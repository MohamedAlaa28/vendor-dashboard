import { Link, NavLink } from "react-router-dom";
import { classNames, navigation } from "../Layout";
import { Disclosure } from "@headlessui/react";

// eslint-disable-next-line react/prop-types
const DesktopSideBar = ({ sidebarDesktopOpen, setSidebarDesktopOpen }) => {
    return (
        <div className="border-r border-gray-200 md:flex md:flex-col md:inset-y- pr-2 flex flex-col flex-grow bg-[#3D897A] overflow-hidden">
            <div className="pt-5 flex flex-col flex-grow bg-[#3D897A] overflow-y-auto">
                <div className="flex justify-between">
                    <Link to="/" className="flex-shrink-0 pl-4 flex gap-2 items-center cursor-pointe">
                        <img height={26} width={26} src={"./images/logoLight.png"} alt="mytreety" />
                        <p className="mt-2 text-white text-lg">Vendo</p>
                    </Link>
                    <button
                        className="flex-shrink-0 mt-2 p-1 flex items-center cursor-pointer hover:bg-[#d3eded54] rounded-md"
                    //onClick={() => setSidebarDesktopOpen(!sidebarDesktopOpen)} // Toggle sidebar state
                    >
                        <img className="w-5" src="./images/Path 15540.svg" alt="close" />
                    </button>
                </div>
                <div className="flex-grow mt-6">
                    <nav className="flex-1 mt-8 px-2 space-y-1" aria-label="Sidebar">
                        {navigation.map((item) =>
                            !item.children ? (
                                <div key={item.id}>
                                    <NavLink
                                        to={item.to}
                                        className={classNames(
                                            item.current ? "text-white hover:bg-[#d3eded54]" : "text-white hover:bg-[#d3eded54]",
                                            "group w-full flex px-1 py-1 mx-1 my-1 gap-2  items-center font-medium rounded-md"
                                        )}
                                    >
                                        <item.icon className={classNames(item.current ? "text-white" : "text-white", "text-lg flex-shrink-0 ")} aria-hidden="true" />
                                        {sidebarDesktopOpen && <p className="text-sm">{item.name}</p>}
                                    </NavLink>
                                </div>
                            ) : (
                                <Disclosure as="div" key={item.id} className="space-y-1">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={classNames(
                                                    item.current ? "bg-transparent text-white" : "bg-transparent text-white hover:bg-[#d3eded54] bg-opacity-10 hover:text-white",
                                                    "group w-full flex justify-between items-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d897a]"
                                                )}
                                            >
                                                <div className="flex mx-2 my-2 gap-2 items-center">
                                                    <item.icon className={classNames(item.current ? "text-white" : "text-white", "text-lg flex-shrink-0")} aria-hidden="true" />
                                                    {sidebarDesktopOpen && <p className="text-sm">{item.name}</p>}
                                                </div>
                                                <svg className={classNames(open ? "text-white rotate-90" : "text-gray-100", "flex-shrink-0 h-5 w-5 transform group-hover:text-gray-100 transition-colors ease-in-out duration-150")} viewBox="0 0 20 20" aria-hidden="true">
                                                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                                </svg>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="space-y-1">
                                                {item.children.map((subItem) => (
                                                    <NavLink key={subItem.id} to={subItem.to}
                                                        className="cursor-pointer group w-full flex items-center rounded-md py-1 pl-10 text-sm font-medium text-white hover:text-gray-100 hover:bg-[#d3eded54]"
                                                    >
                                                        <Disclosure.Button key={subItem.id} as="span">
                                                            {subItem.name}
                                                        </Disclosure.Button>
                                                    </NavLink>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            )
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default DesktopSideBar;
