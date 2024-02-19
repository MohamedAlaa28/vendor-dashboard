// lib/react-chartjs-2
"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import Link from 'next/link'
import { useRouter } from "next/navigation";
import Image from "next/image";

const navigation = [
  { id: 1, name: "Dashboard", href: "/", icon: DashboardOutlinedIcon, current: true },
  {
    id: 2,
    name: "Products",
    icon: Inventory2OutlinedIcon,
    current: false,
    children: [
      { id: 1, name: "Products", href: "/Products" },
      { id: 2, name: "Product Bulk Upload", href: "/ProductBulkUpload" },
      { id: 3, name: "Table", href: "/Table" },
    ],
  },
  { id: 3, name: "Orders", href: "/Orders", icon: ChecklistOutlinedIcon, current: false },
  {
    id: 4,
    name: "Product Reviews",
    href: "/ProductReviews",
    icon: StarBorderIcon,
    current: false,
  },
  {
    id: 5,
    name: "Commission History",
    href: "/CommissionHistory",
    icon: RestoreOutlinedIcon,
    current: false,
  },
  {
    id: 6,
    name: "Support",
    href: "/Support",
    icon: SupportAgentIcon,
    current: false,
  },
  { id: 7, name: "Help", href: "/Help", icon: ContactSupportOutlinedIcon, current: false },
];

const userNavigation = [
  { id: 1, name: "Your Profile", href: "/" },
  { id: 2, name: "Settings", href: "/" },
  { id: 3, name: "Sign out", href: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const [sidebarDesktopOpen, setSidebarDesktopOpen] = useState(true);
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div>
        {/* Static sidebar for desktop */}

        {/* Sidebar component, swap this element   with another sidebar if you like */}
        {sidebarDesktopOpen ? (
          <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-[#3D897A] overflow-y-auto">
              <div className="flex row justify-between">

                <Link href="/" className="flex-shrink-0 px-4 flex items-center cursor-pointer">
                  <Image
                    height={30}
                    width={120}
                    src="/images/logoLight.svg"
                    alt="mytreety"
                  />
                </Link>

                <button
                  className="flex-shrink-0 mx-6 mt-2 px-1 py-1 flex items-center cursor-pointer hover:bg-[#d3eded54] rounded-md"
                  onClick={() => setSidebarDesktopOpen(false)}
                >
                  <Image
                    height={15}
                    width={30}
                    className="h-3 w-auto"
                    src="/images/Path 15540.svg"
                    alt="close"
                  />
                </button>
              </div>
              <div className="flex-grow mt-6 flex flex-col">
                <nav
                  className="flex-1 mt-8 px-2 space-y-1"
                  aria-label="Sidebar"
                >
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.id}>
                        <Link href={item.href}
                          className={classNames(
                            item.current
                              ? " text-white hover:bg-[#d3eded54]"
                              : " text-white hover:bg-[#d3eded54] ",
                            "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                          )}>
                          <item.icon
                            className={classNames(
                              item.current ? "text-white" : "text-white ",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </div>
                    ) : (
                      <Disclosure as="div" key={item.id} className="space-y-1">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-transparent text-white"
                                  : "bg-transparent text-white hover:bg-[#d3eded54] bg-opacity-10 hover:text-white",
                                "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d897a]"
                              )}
                            >
                              <item.icon
                                className="mr-3 flex-shrink-0 h-6 w-6 text-white "
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <svg
                                className={classNames(
                                  open
                                    ? "text-white rotate-90"
                                    : "text-gray-100",
                                  "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-100 transition-colors ease-in-out duration-150"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <Link key={subItem.id} href={subItem.href}>
                                  <Disclosure.Button
                                    key={subItem.id}
                                    as="span"
                                    className="cursor-pointer group w-[full] rounded-md flex items-center pl-11 pr-2 py-2 text-sm font-medium text-white  hover:text-gray-100 hover:bg-[#d3eded54]"
                                  >
                                    {subItem.name}
                                  </Disclosure.Button>
                                </Link>
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
        ) : (
          <div className="hidden md:flex md:w-16 md:flex-col md:fixed md:inset-y-0">
            <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-[#3D897A] overflow-y-auto">
              <div className="flex items-center justify-evenly">

                <Link href="/" passHref className="flex-shrink-0  flex items-center cursor-pointer">
                  <Image
                    height={30}
                    width={25}
                    src="/images/logoLight.png"
                    alt="mytreety"
                  />
                </Link>

                <button
                  className="flex-shrink-0 mt-1 flex items-center cursor-pointer text-white hover:bg-[#d3eded54] rounded-md"
                  onClick={() => setSidebarDesktopOpen(true)}
                >
                  <Image
                    height={20}
                    width={20}
                    className="rotate-180"
                    src="/images/Path 15540.svg"
                    alt="open"
                  />
                </button>

              </div>
              <div className="flex-grow mt-6 flex flex-col">
                <nav
                  className="flex-1 mt-8 px-2 space-y-1"
                  aria-label="Sidebar"
                >
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.id}>
                        <Link href={item.href} className={classNames(
                          item.current
                            ? " text-white hover:bg-[#d3eded54]"
                            : " text-white hover:bg-[#d3eded54] ",
                          "group w-full flex items-center pl-1 py-2 text-sm font-medium rounded-md"
                        )}>

                          <item.icon
                            className={classNames(
                              item.current ? "text-white" : "text-white ",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    ) : (
                      <Disclosure as="div" key={item.id} className="space-y-1">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-transparent text-white"
                                  : "bg-transparent text-white hover:bg-[#d3eded54] bg-opacity-10 hover:text-white",
                                "grid grid-cols-2	gap-3 group w-full items-center px-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d897a]"
                              )}
                            >
                              <item.icon aria-hidden="true" />
                              <svg
                                className={classNames(
                                  open
                                    ? "text-white rotate-90"
                                    : "text-gray-100",
                                  "flex-shrink-0 h-5 w-5 transform group-hover:text-gray-100 transition-colors ease-in-out duration-150"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <Link key={subItem.id} href={subItem.href}>
                                  <Disclosure.Button
                                    key={subItem.id}
                                    as="span"
                                    className="cursor-pointer group w-[full] rounded-md flex items-center px-1 py-2 text-xs font-medium text-white hover:text-gray-100 hover:bg-[#d3eded54]"
                                  >
                                    {subItem.name}
                                  </Disclosure.Button>
                                </Link>
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
        )}

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
                    <Image
                      height={50}
                      width={100}
                      className="h-8 w-auto"
                      src="/images/logoLight.svg"
                      alt="mytreety"
                    />
                  </div>
                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-[#CCE7E6]/30 text-white"
                              : "text-white hover:bg-[CCE7E6] hover:text-white",
                            "group rounded-md py-2 px-2 flex items-center text-base font-medium"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.href === router.pathname
                                ? "text-white"
                                : "text-white group-hover:text-white",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* button for mobile */}
        <div
          className={`${sidebarDesktopOpen ? "md:pl-64" : "md:pl-16"
            } bg-[#F2F4F7] h-full pb-8`}
        >
          <div className="mx-auto flex flex-col md:px-8 xl:px-0 w-[95%]">
            <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-[#F2F4F7] border-b border-gray-200 flex mb-8">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3d897a] md:hidden"
                onClick={() => setSidebarMobileOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuOutlinedIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-between px-4 md:px-0">
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
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3d897a]"
                  >
                    <span className="sr-only">View notifications</span>
                    <NotificationsNoneOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3d897a]">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          height={40}
                          width={40}
                          className="h-8 w-8 rounded-full"
                          src="/images/profile-pic.png"
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.id}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block py-2 px-4 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <main className="flex-1 h-full">
              {/* <div className=""> */}
              <div className="px-4 min-h-screen sm:px-6 md:px-0 bg-[#F2F4F7] pb-6 h-full">
                {children}
              </div>
              {/* </div> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
