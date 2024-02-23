import { useEffect, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { UploadIcon} from '@heroicons/react/outline';

// eslint-disable-next-line react/prop-types
export default function InvoiceUploader ({ setImageUrl, imageUrl }) {
  const [files, setFiles] = useState([]);
 

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          className="inline-flex border-2 border-gray-100 w-24 max-h-24"
          src={file.preview}
          alt={file.name}
        />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className="w-full text-center">
      <div
        className="px-6 pt-5 pb-6 border-2 border-[#CDCFDC] bg-[#F9F9F9] dark:border-[#CDCFDC] border-dashed rounded-md cursor-pointer"
        // {...getRootProps()}
      >
        {/* <input {...getInputProps()} /> */}
        <span className="mx-auto flex justify-center">
          {/* <UploadIcon className="text-md text-[#707082] w-[20px]" /> */}
        </span>
        <p className="text-sm text-[#707082] mt-2 border py-2 w-[98px] mx-auto rounded-[8px]"> Upload files </p>
        <p className="text-xs text-[#707082] mt-2"> or drag your files here </p>
      </div>
      <aside className="flex flex-row flex-wrap mt-4">
        {imageUrl ? (
          <img
            className="inline-flex border rounded-md border-gray-100 dark:border-[#CDCFDC] w-24 max-h-24 p-2"
            src={imageUrl}
            alt="product"
          />
        ) : (
          thumbs
        )}
      </aside>
    </div>
  );
}
