import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useDropzone } from 'react-dropzone';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Image from 'next/image';

export default function ImageUploader({ setImageUrl, imageUrl }) {
  const [files, setFiles] = useState([]);


//   const { getRootProps, getInputProps } = useDropzone({
//     // accept: 'image/*',
//     multiple: true,
//     maxSize: 500000,
//     onDrop: (acceptedFiles) => {
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           })
//         )
//       );
//     },
//   });

  useEffect(() => {
    const uploadURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL; // Use NEXT_PUBLIC_ prefix for Next.js environment variables
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    if (files.length > 0) {
      // Check if there are files to upload
      Promise.all(
        files.map((file) => {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', uploadPreset);
          return axios.post(uploadURL, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        })
      )
        .then((responses) => {
          const secureUrls = responses.map((res) => res.data.secure_url);
          setImageUrl(secureUrls);
        })
        .catch((err) => {
          console.error('Error uploading files:', err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <Image
          width={24}
          height={24}
          className="inline-flex border-2 border-gray-100"
          src={file.preview}
          alt={file.name}
        />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data URIs to avoid memory leaks
      thumbs.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [thumbs]
  );

  return (
    <div className="w-full text-center">
      <div
        className="px-6 pt-5 pb-6 border-2 border-[#CDCFDC] bg-[#F9F9F9] dark:border-gray-600 border-dashed rounded-md cursor-pointer"
        // {...getRootProps()}
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex justify-center">
          <FileUploadOutlinedIcon className="text-md text-gray-300 w-[20px]" />
        </span>
        <p className="text-sm mt-2 border py-2 w-[98px] mx-auto rounded-[8px]">Add files</p>
        <em className="text-xs text-gray-400">or drag your files here</em>
      </div>
      <aside className="flex flex-row flex-wrap mt-4">
        {imageUrl ? (
          imageUrl.map((url, index) => (
            <Image
              key={index}
              width={24}
              height={24}
              className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 p-2"
              src={url}
              alt={`product-${index}`}
            />
          ))
        ) : (
          thumbs
        )}
      </aside>
    </div>
  );
}
