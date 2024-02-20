import { useRef, Fragment, useState } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";
import close from "../../../../public/icons/close.svg";
import ImageUploader from "./ImageUploader.jsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Editor from "./Editor.jsx";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
export default function ModelCreateMessage({ isOpen, setIsOpen }) {
  const cancelButtonRef = useRef(null);
  const { imageUrl, setImageUrl } = useState({});
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Choose Subject");

  const handleSubjectSelect = (e) => {
    e.preventDefault();
    setSelectedSubject(e.target.value);
    setOpenMenu(false);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-2 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative flex flex-col  h-auto bg-white rounded-lg drop-shadow-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-6 sm:max-w-lg sm:w-full px-5">
                <div className="flex flex-row justify-between border-b py-3 w-full content-center">
                  <div className="text-[24px] font-bold">Add New Message</div>
                  <div>
                    <button onClick={() => setIsOpen(false)}>
                      <img src={close} className="mt-5" alt="close" />
                    </button>
                  </div>
                </div>

                <form>
                  <div className="body-form">
                    <div className="Subject-Select flex flex-col w-full text-left py-3">
                      <span className="block text-[14px] font-medium text-[#707082] pb-3">
                        Subject
                      </span>

                      {/* start dropdown */}
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button
                            className="inline-flex justify-between w-full rounded-[10px] border border-[#CDCFDC] shadow-sm px-4 py-2 bg-[#F9F9F9] text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#3d897a]"
                            onClick={() => setOpenMenu(true)}
                          >
                            {selectedSubject}
                            <ExpandMoreIcon
                              className="-mr-1 ml-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>
                        {
                          openMenu && (<Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black z-30 ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      value="Complaint"
                                      onClick={(e) => handleSubjectSelect(e)}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm w-full text-left"
                                      )}
                                    >
                                      Complaint
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      value="Feedback"
                                      onClick={(e) => handleSubjectSelect(e)}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm w-full text-left"
                                      )}
                                    >
                                      Feedback
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      value="Payment"
                                      onClick={(e) => handleSubjectSelect(e)}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm w-full text-left"
                                      )}
                                    >
                                      Payment
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      value="Other"
                                      onClick={(e) => handleSubjectSelect(e)}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm w-full text-left"
                                      )}
                                    >
                                      Other
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>)
                        }

                      </Menu>
                      {/* the end of dropdown */}
                    </div>

                    {/* <div className="Message-body flex flex-col w-full text-left py-3">
                      <span className="block text-[14px] font-medium text-[#707082] pb-3">
                        Message
                      </span>
                      <Editor placeholder={"Write something..."} />
                    </div> */}

                    <div className="Message-body flex flex-col w-full text-left py-3 ">
                      <span className="block text-[14px] font-medium text-[#707082] pb-3">
                        Media (optional)
                      </span>

                      <div className=" flex-grow scrollbar-hide w-full max-h-full">
                        <div className="grid gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-3">
                          <div className="w-full">
                            <ImageUploader
                              imageUrl={imageUrl}
                              onChange={setImageUrl}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="sm:flex sm:flex-row-reverse items-center p-4 pb-0">
                  <button
                    type="button"
                    className=" focus:outline-none text-white bg-[#3D897A] hover:opacity-[90%] font-medium rounded-[10px] text-sm px-8 py-3 mr-2 mb-2 dark:bg-[#3D897A] dark:hover:bg-[#3D897A] dark:focus:ring-[#3D897A]">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="border border-[#3D897A] focus:outline-none text-[#232323] bg-white hover:opacity-[90%] font-medium rounded-[10px] text-sm px-8 py-3 mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white">
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
