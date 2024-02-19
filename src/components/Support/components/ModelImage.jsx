import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function MyDialog({ isOpen, setIsOpen, image }) {
  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)}>
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30  h-full w-full z-30  flex justify-center content-center  ">
            <div className="bg-white drop-shadow-lg w-[90%] h-auto m-auto">
              <img src={image} className="w-full " />
            </div>
          </div>
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel>
            <Dialog.Title>Deactivate account</Dialog.Title>

            {/* ... */}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
