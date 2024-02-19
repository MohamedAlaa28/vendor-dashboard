import React from "react";

const ProductsEmpty = () => {
  return (
    <div className="mt-6 w-full bg-white rounded-lg shadow-lg flex flex-col justify-center text-center py-20">
      <img
        src={"/Products.svg"}
        width={200}
        height={150}
        alt="empty product"
      />
      <h3 className="font-semibold text-lg mt-4">
        You haven&apos;t uploaded any products yet!
      </h3>
      <p className="my-2 text-[#707082]">Start adding your products now!</p>
      <div className="mt-4">
      <button
            type="button"
            className="inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
          >
            + Add
          </button>
      </div>
    </div>
  );
};

export default ProductsEmpty;
