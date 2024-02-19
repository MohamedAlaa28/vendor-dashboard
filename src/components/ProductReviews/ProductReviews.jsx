"use client";
import { useRef, useState } from "react";
import PopUp from "./components/ProductReviewsFilter";
import Select from "../components/Select";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";
import Image from "next/image";

const productOptions = [
  { id: 1, name: "Alphabetical" },
  { id: 2, name: "Rate" },
  { id: 3, name: "Date" },
];
export const products = [
  {
    id: "1",
    product: "Polo Shirt",
    rate: "5",
    date: "23/5/2022-11:18 PM",
    review:
      "Great shirt! The size is perfect , The color is better than Great shirt! The size is perfect , The color is better than",
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus aliquam elitaelementum commodo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Praesent eujusto quis mi dapibus fermentum.In posuere sollicitudin imperdiet.",
  },
  {
    id: "2",
    product: "Polo Shirt",
    rate: "3",
    date: "25/5/2022-11:18 PM",
    review:
      "Great shirt! The size is perfect , The color is better than Great shirt! The size is perfect , The color is better than",
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus aliquam elitaelementum commodo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Praesent eujusto quis mi dapibus fermentum.In posuere sollicitudin imperdiet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductReviews() {
  const [selected, setSelected] = useState(productOptions[0]);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const arrow = useRef();
  const onArrowClickDown = () => {
    if (
      arrow.current.classList.value ==
      "flex gap-2 items-center text-[#686868] cursor-pointer transition-[all-0.3s-0.1s-ease-in-out]"
    ) {
      arrow.current.classList.add("rotate-180");
    } else {
      arrow.current.classList.value ==
        "flex gap-2 items-center text-[#686868] cursor-pointer rotate-180 transition-[all-0.3s-0.1s-ease-in-out]";
      arrow.current.classList.remove("rotate-180");
    }
    // product = product.slice(0).reverse();
    // console.log(product);
  };

  const isEmpty = (object) => {
    for (const property in object) {
      return false;
    }
    return true;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Product Reviews <span className="text-[#686868]">(42)</span>
          </h1>
        </div>
      </div>
      <div className="flex row gap-x-5">
        <div className="mt-4 sm:mt-8  flex justify-between">
          <div className="flex gap-2 items-center">
            <Select
              items={productOptions}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-9  flex justify-between w-[20px]">
          <div
            className="flex gap-2 items-center text-[#686868] cursor-pointer transition-[all-0.3s-0.1s-ease-in-out]"
            ref={arrow}
            onClick={() => onArrowClickDown()}
          >
            <ArrowUpwardIcon />
          </div>
        </div>

        <div className="mt-4 sm:mt-8 flex justify-between">
          <div className="flex gap-2 items-center">
            <PopUp />
          </div>
        </div>
      </div>
      <div
        className="mt-8 flex flex-col"
        style={{ "boxShadow": "0px 10px 60px #DCDCDC8C" }}
      >
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg px-10 py-4 bg-white">
              {!isEmpty(products) ? (
                <table className="min-w-full table-fixed divide-y-[2px]">
                  <thead className="mx-2">
                    <tr>
                      <th
                        scope="col"
                        className=" px-6 sm:w-16 sm:px-8 min-w-[12rem] py-3.5 pr-3 text-left text-sm text-[#686868]"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-10 py-3.5 text-left text-sm text-[#686868]"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="px-10 py-3.5 text-left text-sm text-[#686868]"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-10 py-3.5 text-left text-sm text-[#686868]"
                      >
                        Review
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" bg-white">
                    {products.map((product) => (
                      <tr
                        key={product.id}
                      // className="hover:bg-[#F2F4F7] duration-700"
                      >
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 pr-3 px-6 sm:w-16 sm:px-8 text-[#707082]",
                            selectedProduct.includes(product)
                          )}
                        >
                          <div className="flex flex-row space-x-1">
                            <div
                              className="bg-white"
                              style={{
                                boxShadow: "0px 2px 6px #54566533",
                                borderRadius: "6px",
                              }}
                            >
                              <Image
                                src="/images/Img - product 1@2x.png"
                                width={42.5}
                                height={42.5}
                                alt="product"
                                className="px-1"
                              />
                            </div>
                            <p className="mt-3 pl-2">{product.product}</p>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-10 py-4 text-sm text-[#707082]">
                          <div className="flex flex-row space-x-1">
                            <p>{product.rate}</p>
                            <Image width={20} height={20} src="/images/golden star.svg" alt="golden star" />
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-10 py-4 text-sm text-[#707082]">
                          {product.date}
                        </td>
                        <td className="whitespace-nowrap px-10 py-4 text-sm text-[#707082]">
                          <p className="truncate w-[400px]">{product.review}</p>
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link href={`/ProductReviews/${product.id}`} className="text-[#3D897A] hover:text-[#3D897A] hover:underline">
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="lg:block relative flex-1 w-full bg-white px-[425px] py-24">
                  <Image width={200} height={200} className="object-cover" src="/images/Reviews.svg" alt="" />
                  <p className="ml-9 mt-5 text-[18px] w-full">
                    No reviews yet!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex row gap-5">
        <button>empty</button>
        <button>fill</button>
      </div> */}
    </div>
  );
}
