import { useRef, useState, useEffect } from "react";
import productImage from "../../../../public/images/Img - product 1@2x.png";
// eslint-disable-next-line react/prop-types
const ProductsTable = ({ ProductsData }) => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    const isIndeterminate =
      selectedProduct.length > 0 && selectedProduct.length < ProductsData.length;
    setChecked(selectedProduct.length === ProductsData.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedProduct]);

  function toggleAll() {
    setSelectedProduct(checked || indeterminate ? [] : ProductsData);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div
      className="mt-8 flex flex-col"
      style={{ boxShadow: "0px 10px 60px #DCDCDC8C" }}
    >
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg  px-10 py-4 bg-white">
            <table className="min-w-full divide-y-[2px]">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="relative w-12 px-6 sm:w-16 sm:px-8"
                  >
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 accent-[#3D897A] sm:left-6"
                      ref={checkbox}
                      checked={checked}
                      onChange={toggleAll}
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-500 sm:pl-6"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-500"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-500"
                  >
                    Sub-Category
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-500"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-500"
                  >
                    Unit Price
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-500"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-500"
                  >
                    Date
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white">
                {ProductsData.map((product) => (
                  <tr
                    key={product.id}
                    className={
                      selectedProduct.includes(product) ? "bg-gray-50" : undefined
                    }
                  >
                    <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                      {selectedProduct.includes(product) && (
                        <div className="absolute inset-y-0 left-0 w-0.5 bg-[#3d897a]" />
                      )}
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 accent-[#3D897A] sm:left-6"
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
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 ">
                          <img
                            width={25}
                            height={25}
                            className="h-10 w-10 rounded-full object-cover "
                            src={productImage}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {product.Product}
                          </div>
                          <div className="text-gray-500">{product.Product}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {product.Category}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {product.SubCategory}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {product.Quantity}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {product.UnitPrice}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span
                        className={`${product.Status === "Active"
                          ? "text-[#3D897A]  bg-[#3D897A] bg-opacity-25"
                          : "text-[#EE6363] bg-[#EE6363] bg-opacity-25"
                          } inline-flex rounded-full px-2 text-xs font-semibold leading-5 `}
                      >
                        {String(product.Status)}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {product.date}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a
                        href="#"
                        className="text-[#3d897a] hover:text-[#3d897a]"
                      >
                        Edit<span className="sr-only">, {product.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
