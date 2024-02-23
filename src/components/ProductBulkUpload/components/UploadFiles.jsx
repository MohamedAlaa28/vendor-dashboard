const UploadFiles = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 mt-3">
        <div className="bg-white shadow-md p-8 rounded-2xl max-w-sm">
          <div className="border-b pb-4 border-gray-300 flex justify-between">
            <h3 className="text-lg font-medium">Upload CSV Files</h3>

            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#3D897A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <button className="font-medium text-[#3D897A]">
                Download CSV
              </button>
            </div>
          </div>
          <div className="group hover:cursor-pointer max-w-max bg-gray-100 border-dashed border-2 border-[#D4D4D4] p-10 rounded-md text-center flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <p className="text-sm mt-2">
              Drag your files or <br />
              <span className="text-[#3D897A]">Browse</span> here.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md p-8 rounded-2xl max-w-sm">
          <div className="border-b outline-offset-4 pb-4 border-gray-300">
            <h3 className="text-lg font-medium">Instructions</h3>
          </div>
          <ul>
            <li>1. 1. Download the skeleton file and fill it with data</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mt-3">
        <div className="bg-white shadow-md p-8 rounded-2xl max-w-sm">
          <div className="border-b pb-4 border-gray-300 flex justify-between">
            <h3 className="text-lg font-medium">Upload XML Files</h3>

            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#3D897A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <button className="font-medium text-[#3D897A]">
                Download XML
              </button>
            </div>
          </div>
          <div className="group hover:cursor-pointer max-w-max bg-gray-100 border-dashed border-2 border-[#D4D4D4] p-10 rounded-md text-center flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <p className="text-sm mt-2">
              Drag your files or <br />
              <span className="text-[#3D897A]">Browse</span> here.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md p-8 rounded-2xl max-w-sm">
          <div className="border-b outline-offset-4 pb-4 border-gray-300">
            <h3 className="text-lg font-medium">Instructions</h3>
          </div>
          <ul>
            <li>1. 1. Download the skeleton file and fill it with data</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UploadFiles;
