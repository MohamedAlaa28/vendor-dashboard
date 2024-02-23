import { Fragment, useState } from 'react'
import { Menu, Dialog, Transition } from "@headlessui/react";
// import { XIcon } from '@heroicons/react/outline'
import InvoiceUploader from './InvoiceUploader';
import { classNames } from '../../Layout/Layout';
import Editor from '../../Support/components/Editor';

export default function InvoiceUploadInvoice() {

  const { imageUrl, setImageUrl } = useState({});
  // const [value, setValue] = useState('');

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  // const closeIcon = (
  //   <svg class="h-6 w-6 text-[#707082]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  //     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  //   </svg>
  // );

  return (
    <div style={{ 'borderRadius': '10px' }} className='popup'>
      <button onClick={onOpenModal} className="focus:outline-none text-white bg-[#3D897A] hover:opacity-[90%] font-medium rounded-[10px] text-sm px-6 py-3 mr-2 mb-2 dark:bg-[#3D897A] dark:hover:bg-[#3D897A] dark:focus:ring-[#3D897A]">
        + Upload Invoice
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:p-6">
                  <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left py-2">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 border-b-[2px]">
                        <h1 className='mb-5 text-[#232323]' style={{ font: 'normal normal 600 24px/29px Urbanist' }}>Add New Invoice</h1>
                      </Dialog.Title>

                      <div className='w-[750px] content-center'>
                        <form>
                          <div className="body-form">
                            <div className="Subject-Select flex flex-col w-full text-left py-3   ">

                              {/* start dropdown */}

                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full   rounded-md shadow-lg bg-white ring-1 ring-black z-30 ring-opacity-5 focus:outline-none">
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
                                            Complaint
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
                                            Feedback
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
                                            Payment
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
                                            Other
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>

                              {/* the end of dropdown */}
                            </div>

                            <div className="Message-body flex flex-col w-full text-left">

                              <span className="block text-[14px] text-[#707082] pb-3" style={{ font: "normal normal medium 14px/17px Urbanist" }}>
                                Description
                              </span>

                              {/* <ReactQuill theme="snow" value={value} onChange={setValue}   /> */}
                              <Editor />
                              {/* the end of Message body */}
                            </div>

                            <div className="Message-body flex flex-col w-full text-left py-3">

                              <span className="block text-[14px] text-[#707082] pb-3" style={{ font: "normal normal medium 14px/17px Urbanist" }}>
                                File
                              </span>

                              <div className=" flex-grow scrollbar-hide w-full max-h-full">
                                <div className="grid  gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-3">

                                  <div className="w-full">
                                    <InvoiceUploader imageUrl={imageUrl} onChange={setImageUrl} />
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-1/5 focus:outline-none text-white bg-[#3D897A] hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-[#3D897A] dark:hover:bg-[#3D897A] dark:focus:ring-[#3D897A]"
                      onClick={() => setOpen(false)}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="w-1/5 focus:outline-none text-[#232323] bg-white hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}