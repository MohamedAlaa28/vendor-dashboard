import { useRef, useState } from "react";

const product = [
  {
    code: "#123234ggd",
    no: "1",
    amount: "$ 30",
    ShippingAddress: "Röpkestraße 35,Düsseldorf,40235,Germany",
    orderDate: "23/5/2022-11:18 PM",
    orderStatus: "pending",
    paymentMethod: "Paypal",
    variation: "XL.Blue",
    SKU: "XLpoloshirt001",
    quantity: "1",
    status: "pending",
  },
  // More product...
];

export default function OrderDetailsTable({}) {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);

  function toggleAll() {
    setSelectedMessages(checked || indeterminate ? [] : MessagesList);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div
      className="rounded-[14px] mt-7 min-w-full divide-y divide-gray-300"
      style={{ "box-shadow": "2px 2px 20px #8A97A940" }}
    >
      <div className="p-7">
        <h1 className="text-[20px]">Order Details</h1>
        <hr className="my-3 border border-[#CDCFDC]"></hr>
        <table
          className="min-w-full divide-y divide-gray-300"
          style={{ border: "none" }}
        >
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#686868] sm:pl-6  "
              >
                NO.
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
              >
                Product Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
              >
                Variation
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
              >
                SKU
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
              >
                Price
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {product.map((product) => (
              <tr key={product.code}>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <div className="ml-4 text-gray-500">{product.no}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                  <div>{product.code}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                  <div>{product.variation}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                  {product.SKU}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                  {product.quantity}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                  {product.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
