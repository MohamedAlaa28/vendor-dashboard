"use client";
import { useState } from "react";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import Select from "../components/Select";
import Image from "next/image";
import CommissionHistoryFilter from "./components/commissionHistoryFilter";


const productOptions = [
  { id: 1, name: "Recent" },
  { id: 2, name: "Paid" },
  { id: 3, name: "Pending" },
  { id: 4, name: "Old" },
];

const product = [
  {
    code: "#545015df",
    mytreetyCommission: "$ 30",
    paymentDate: "23/5/2022-11:18 PM",
    PaymentState: "paid",
  },
  {
    code: "#015545df",
    mytreetyCommission: "$ 30",
    paymentDate: "23/5/2022-11:18 PM",
    PaymentState: "pending",
  },
];

function isEmpty(object) {
  for (const property in object) {
    return false;
  }
  return true;
}
export default function CommissionHistory() {
  const [selected, setSelected] = useState(productOptions[0]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Commission History <span className="text-[#686868]"> (2)</span>
          </h1>
        </div>
      </div>

      <div className="flex row gap-x-5">
        <div className="mt-4 sm:mt-8 flex justify-between">
          <div className="flex gap-2 items-center">
            <Select
              items={productOptions}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-8 flex justify-between">
          <div className="flex gap-2 items-center">
            <CommissionHistoryFilter />
          </div>
        </div>
      </div>

      <div
        className="mt-8 flex flex-col"
        style={{ "boxShadow": "0px 10px 60px #DCDCDC8C" }}
      >
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg  px-10 py-4 bg-white">
              {!isEmpty(product) ? (
                <table className="min-w-full divide-y-[2px]">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500 sm:pl-6"
                      >
                        Order Code
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                      >
                        Mytreety Commission
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                      >
                        Payment Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                      >
                        Payment Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                      >
                        Invoice
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {product.map((product) => (
                      <tr key={product.code} className="hover:bg-gray">
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <div className="ml-4 text-gray-500">
                            {product.code}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-500">
                            {product.mytreetyCommission}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-500">
                            {product.paymentDate}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span
                            className={
                              product.PaymentState == "paid"
                                ? "inline-flex rounded-full bg-[#3D897A] bg-opacity-25 px-2 text-xs font-semibold leading-5 text-[#3D897A]"
                                : "inline-flex rounded-full bg-[#F88700] bg-opacity-25 px-2 text-xs font-semibold leading-5 text-[#F88700]"
                            }
                          >
                            {product.PaymentState}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <button>
                            <SimCardDownloadOutlinedIcon className="w-5" />{" "}
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="lg:block relative flex-1 w-full bg-white px-[435px] py-24">
                  <Image
                    className="object-cover"
                    src="/Commission history.svg"
                    alt=""
                  />
                  <p className="ml-9 mt-5 text-[18px] w-full">
                    No commission yet!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
