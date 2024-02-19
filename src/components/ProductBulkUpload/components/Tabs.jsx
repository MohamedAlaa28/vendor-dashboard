import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import UploadFiles from "./UploadFiles";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  return (
    <div className="w-full  px-2 pt-4 sm:px-0 ">
      <Tab.Group>
        <Tab.List>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-[#3D897A] text-white px-4 py-2 rounded-t-lg"
                    : " text-gray-800 px-4 py-2"
                }
              >
                Upload Files
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-[#3D897A] text-white px-4 py-2 rounded-t-md"
                    : " text-gray-800 px-4 py-2"
                }
              >
                Auto two-way sync
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-[#3D897A] text-white px-4 py-2 rounded-t-md"
                    : " text-gray-800 px-4 py-2"
                }
              >
                Auto one-way sync
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-8">
          <Tab.Panel>
            <UploadFiles />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
