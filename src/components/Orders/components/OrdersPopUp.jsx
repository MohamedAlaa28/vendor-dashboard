import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function OrdersPopUp() {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);

  return (
    <div style={{ 'borderRadius': '10px' }} className='popup'>
      <button onClick={onOpenModal} className="border border-5 px-2 py-1 rounded-[8px]">Open modal</button>
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
                      <CloseOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 border-b-[2px]">
                        <p className='text-[24px] mb-5'>Tracking Info</p>
                      </Dialog.Title>

                      <div className='py-3 content-center'>
                        <div className='flex flex-col sm:flex-row'>
                          <div className="pr-5 mb-6 md:mb-0 my-5">
                            <label className="block tracking-wide text-[#232323] text-[16px] mb-2" htmlFor="tracking-id">
                              Tracking ID
                            </label>
                            <input className="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" id="tracking-id" type="text" placeholder="Enter Tracking ID" />
                          </div>
                          <div className="mb-6 md:mb-0 my-5">
                            <label className="block tracking-wide text-[#232323] text-[16px] mb-2" htmlFor="tracking-carrier">
                              Tracking Carrier
                            </label>
                            <input className="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" id="tracking-carrier" type="text" placeholder="DHL.UPS.DPD. _" />
                          </div>
                        </div>
                        <div>
                          <h3 className='my-5 text-[16px]'>Order Status</h3>
                          <div className="flex row">
                            <div className="form-check pr-10">
                              <input className="form-check-input text-[#3D897A] appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white ring-white ring-inset ring-4 checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label className="form-check-label inline-block text-[#232323] text-[16px]" htmlFor="flexRadioDefault1">
                                Paid
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input text-[#3D897A] appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white ring-white ring-4 ring-inset checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                              <label className="form-check-label inline-block text-[#232323] text-[16px]" htmlFor="flexRadioDefault2">
                                Refunded
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
                      className="focus:outline-none text-white bg-[#3D897A] hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-[#3D897A] dark:hover:bg-[#3D897A] dark:focus:ring-[#3D897A]"
                      onClick={() => setOpen(false)}
                    >
                      Apply
                    </button>
                    <button
                      type="button"
                      className="focus:outline-none border border-[#3D897A] text-[#232323] bg-lightgray hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white"
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