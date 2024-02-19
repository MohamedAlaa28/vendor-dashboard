import { useState } from "react";
import { Tab } from "@headlessui/react";
import FAQ from "./FAQ";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HelpTabs() {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#3D897A] p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#3D897A]",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-[#3D897A] focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-white hover:bg-[white]/[0.12] hover:text-[white]"
              )
            }
          >
            Guide
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#3D897A]",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-[#3D897A] focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-white hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            FAQ
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-[#3D897A] focus:outline-none focus:ring-2"
            )}
          ></Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-[#3D897A] focus:outline-none focus:ring-2"
            )}
          >
            <FAQ />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
