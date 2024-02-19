
export default function TotalCard() {
  const Empty = false;
  return (
    <div className="flex flex-wrap md:justify-between justify-center">
      <div className="sm:w-[50%] lg:w-[25%] w-full h-[112px] px-3 py-3">
        <div className="relative flex flex-wrap justify-between rounded-[14px] bg-[#577B7A] shadow-md flex-row h-full w-full">
          <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {Empty ? 0 : "120 $"}
            </h5>
            <p className="mb-3 font-normal text-white dark:text-white">
              Products
            </p>
          </div>
          <div className="flex flex-col justify-between top-3 right-0 h-auto absolute">
            <img
              className=" "
              src={"/images/bg-TotalCardImg.svg"}
              width={84}
              height={35}
              alt="empty product"
            />
          </div>
        </div>
      </div>
      <div className="sm:w-[50%] lg:w-[25%] w-full h-[112px] px-3 py-3">
        <div className="relative flex flex-wrap justify-between  rounded-[14px] bg-[#EE6363] shadow-md  flex-row h-full w-full">
          <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {Empty ? 0 : "120 $"}
            </h5>
            <p className="mb-3 font-normal text-white dark:text-white">
              Total Sold
            </p>
          </div>
          <div className="flex flex-col justify-between top-3 right-0 h-auto absolute">
            <img
              className=" "
              src={"/images/bg-TotalCardImg.svg"}
              width={84}
              height={35}
              alt="empty product"
            />
          </div>
        </div>
      </div>
      <div className="sm:w-[50%] lg:w-[25%] w-full h-[112px] px-3 py-3">
        <div className="relative flex flex-wrap justify-between rounded-[14px] bg-[#F3D030] shadow-md flex-row h-full w-full">
          <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {Empty ? 0 : "€ 2.3 K"}
            </h5>
            <p className="mb-3 font-normal text-white dark:text-white">
              Total Earnings
            </p>
          </div>
          <div className="flex flex-col justify-between top-3 right-0 h-auto absolute">
            <img
              className=" "
              src={"/images/bg-TotalCardImg.svg"}
              width={84}
              height={35}
              alt="empty product"
            />
          </div>
        </div>
      </div>
      <div className="sm:w-[50%] lg:w-[25%] w-full h-[112px] px-3 py-3">
        <div className="relative flex flex-wrap justify-between rounded-[14px] bg-[#3D897A] shadow-md flex-row h-full w-full">
          <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {Empty ? 0 : "120 $"}
            </h5>
            <p className="mb-3 font-normal text-white dark:text-white">
              Successful Orders
            </p>
          </div>
          <div className="flex flex-col justify-between top-3 right-0 h-auto absolute">
            <img
              className=" "
              src={"/images/bg-TotalCardImg.svg"}
              width={84}
              height={35}
              alt="empty product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
