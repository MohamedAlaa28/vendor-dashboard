import { useState } from "react";
import ProductsEmpty from "./components/ProductsEmpty";
import ProductsTable from "./components/ProductsTable";
import Select from "../../../public/components/Select";
import { ProductsData } from "../../../public/Data/ProductData";

const productOptions = [
  { id: 1, name: "Alphabetical" },
  { id: 2, name: "Category" },
  { id: 3, name: "Date" },
  { id: 4, name: "Unit Price" },
];

export default function Products() {
  const [selected, setSelected] = useState(productOptions[0]);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Products <span className="text-[#686868]"> (120)</span>
          </h1>
        </div>
      </div>
      <div className="mt-4 sm:mt-8 flex justify-between">
        <div className="flex gap-1 items-center">
          <Select
            items={productOptions}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-1 h-10 mt-1 bg-gray-50 py-0 md:px-6 lg:px-8 px-2 text-sm font-medium text-gray-900 shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3d897a]"
          >
            Bulk Edit
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent h-10 mt-1 bg-[#3d897a] py-0 md:px-6 lg:px-8 px-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
          >
            + Add
          </button>
        </div>
      </div>
      {ProductsData.length == 0 ? (
        <ProductsEmpty />
      ) : (
        <ProductsTable ProductsData={ProductsData} />
      )}
    </div>
  );
}
