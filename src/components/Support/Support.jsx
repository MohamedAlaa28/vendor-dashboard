"use client";
import { useState } from "react";
import Select from "../components/Select";
import SupportTable from "./components/SupportTable";
import ModelCreateMessage from "./components/ModelCreateMessage";
import { MessagesList } from "/public/Data/MessagesListData";


const people = [
  { id: 1, name: "Recent" },
  { id: 2, name: "Solved" },
  { id: 3, name: "Pending" },
  { id: 4, name: "Old" },
];

export default function Support() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Messages
            <span className="text-[#686868]"> ({MessagesList?.length}) </span>
          </h1>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-between">
        <div className="mt-4 sm:mt-8  flex justify-between">
          <div className="flex gap-2 items-center">
            <Select
              items={people}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>

        <div className="flex m-auto sm:m-0 mt-3 ">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="mt-4 sm:mt-8 inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
          >
            + Add
          </button>
        </div>
      </div>

      <div className="table-auto mt-8">
        <SupportTable MessagesList={MessagesList} />
      </div>

      <ModelCreateMessage isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
