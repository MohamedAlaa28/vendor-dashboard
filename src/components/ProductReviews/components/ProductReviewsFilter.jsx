import { Fragment, useRef, useState } from "react";
// import "react-responsive-modal/styles.css";
import { Dialog, Transition } from "@headlessui/react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CalendarInput from "../../components/CalendarInput";
import Image from "next/image";


export default function ProductReviewsFilter() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const cancelButtonRef = useRef(null);

  return (
    <div style={{ borderRadius: "10px" }} className="popup">
      <button
        onClick={onOpenModal}
        className="text-[#707082] text-[14px] px-2 py-1 flex row gap-2 mt-2"
      >
        <div className="rotate-90 h-5 w-5">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className=""
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        Filter
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
                <Dialog.Panel className="relative bg-white rounded-lg px-1 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:p-6">
                  <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <CloseOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left min-h-[375px] h-auto">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900 border-b-[2px]"
                      >
                        <h1 className="text-[24px] mb-5">Filter</h1>
                      </Dialog.Title>

                      <div className="py-3 w-[750px] content-center">
                        <h1 className="text-[16px] mt-3 ">Date Range</h1>
                        <div className="flex row">
                          <div className="w-full pr-5 mb-6 md:mb-0 my-5 flex row relative">
                            <label
                              className="block tracking-wide text-[#707082] text-[16px] mr-2 mt-3 "
                              htmlFor="tracking-id"
                            >
                              from
                            </label>
                            <CalendarInput />
                          </div>
                          <div className="w-full mb-6 md:mb-0 my-5 ml-10 flex row relative">
                            <label
                              className="block tracking-wide text-[#707082] text-[16px] mr-2 mt-3"
                              htmlFor="tracking-carrier"
                            >
                              to
                            </label>
                            <CalendarInput />
                          </div>
                        </div>
                        <div>
                          <h1 className="my-5 text-[16px]">Rate</h1>
                          <div className="flex row gap-10">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox"
                                id="inlineCheckbox1"
                                value="option1"
                              />
                              <label
                                className="form-check-label inline-block text-gray-800"
                                htmlFor="inlineCheckbox1"
                              >
                                <div className="flex row gap-2">
                                  5
                                  <Image
                                    width={20}
                                    height={20}
                                    src="/images/golden star.svg"
                                    alt="golden star"
                                  />
                                </div>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox"
                                id="inlineCheckbox2"
                                value="option2"
                              />
                              <label
                                className="form-check-label inline-block text-gray-800"
                                htmlFor="inlineCheckbox2"
                              >
                                <div className="flex row gap-2">
                                  4
                                  <Image
                                    width={20}
                                    height={20}
                                    src="/images/golden star.svg"
                                    alt="golden star"
                                  />
                                </div>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox"
                                id="inlineCheckbox2"
                                value="option2"
                              />
                              <label
                                className="form-check-label inline-block text-gray-800"
                                htmlFor="inlineCheckbox2"
                              >
                                <div className="flex row gap-2">
                                  3
                                  <Image
                                    width={20}
                                    height={20}
                                    src="/images/golden star.svg"
                                    alt="golden star"
                                  />
                                </div>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox"
                                id="inlineCheckbox2"
                                value="option2"
                              />
                              <label
                                className="form-check-label inline-block text-gray-800"
                                htmlFor="inlineCheckbox2"
                              >
                                <div className="flex row gap-2">
                                  2
                                  <Image
                                    width={20}
                                    height={20}
                                    src="/images/golden star.svg"
                                    alt="golden star"
                                  />
                                </div>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox"
                                id="inlineCheckbox2"
                                value="option2"
                              />
                              <label
                                className="form-check-label inline-block text-gray-800"
                                htmlFor="inlineCheckbox2"
                              >
                                <div className="flex row gap-2">
                                  1
                                  <Image
                                    width={20}
                                    height={20}
                                    src="/images/golden star.svg"
                                    alt="golden star"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-1/4 focus:outline-none text-white bg-[#3D897A] hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-[#3D897A] dark:hover:bg-[#3D897A] dark:focus:ring-[#3D897A]"
                      onClick={() => setOpen(false)}
                    >
                      Apply
                    </button>
                    <button
                      type="button"
                      className="w-1/4 focus:outline-none text-[#232323] bg-white hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      Reset
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
