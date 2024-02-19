"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import OrdersDropDown from "./components/OrdersDropDown";
import OrdersPopUp from "./components/OrdersPopUp";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import { products } from "../../../public/Data/productsDataOrders1";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Orders() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  function toggleAll() {
    setSelectedProduct(checked || indeterminate ? [] : product);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  function isEmpty(object) {
    for (const property in object) {
      return false;
    }
    return true;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Orders <span className="text-[#686868]">(2)</span>
          </h1>
        </div>
      </div>
      <div className="mt-4 sm:mt-8  flex justify-between">
        <div className="flex gap-2 items-center">
          <OrdersDropDown />
        </div>
      </div>
      <div
        className="mt-8 flex flex-col"
        style={{ "boxShadow": "0px 10px 60px #DCDCDC8C" }}
      >
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg px-10 py-4	bg-white">
              {!isEmpty(products) ? (
                <table
                  className="min-w-full table-fixed divide-y-[2px]"
                  style={{ font: "normal normal medium 14px/17px Urbanist" }}
                >
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="relative w-12 px-6 sm:w-16 sm:px-8"
                      >
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-[#3D897A] text-[#3D897A] focus:ring-[#3D897A] sm:left-6"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope="col"
                        className="pl-3 pr-12 py-3.5 text-left text-sm text-[#686868]"
                      >
                        Order Code
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm text-[#686868] w-28"
                      >
                        NO. of products
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm text-[#686868]"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm text-[#686868]"
                      >
                        Tracking Info
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm text-[#686868]"
                      ></th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className={
                          selectedProduct.includes(product)
                            ? "bg-gray-50"
                            : undefined
                        }
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {selectedProduct.includes(product) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-[#3D897A]" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#3D897A] focus:ring-[#3D897A] sm:left-6"
                            value={product.email}
                            checked={selectedProduct.includes(product)}
                            onChange={(e) =>
                              setSelectedProduct(
                                e.target.checked
                                  ? [...selectedProduct, product]
                                  : selectedProduct.filter((p) => p !== product)
                              )
                            }
                          />
                        </td>
                        <td className="whitespace-nowrap pl-3 pr-12 py-4 text-sm text-[#707082]">
                          <Link href={`/Orders/${product.id}`}>
                            {product.code}
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-sm text-[#707082]">
                          {product.no}
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-sm text-[#707082]">
                          {product.amount}
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-sm text-[#707082]">
                          <OrdersPopUp />
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-sm text-[#707082]">
                          <button className="border border-5 px-2 py-1 rounded-[8px]">
                            <SimCardDownloadOutlinedIcon className="w-5" />
                            Download Invoice
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="lg:block relative flex-1 w-full h-full bg-white px-[375px] py-24">
                  <img className="object-cover" src="/Orders.svg" alt="order" />
                  <p className="ml-24 mt-5 text-[18px]">No orders yet!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
