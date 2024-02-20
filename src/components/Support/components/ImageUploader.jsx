import { useRef, useState, useEffect } from 'react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

// eslint-disable-next-line react/prop-types
export default function ImageUploader({ imageUrl,
  // setImageUrl
 }) {
  const [previewUrls, setPreviewUrls] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!imageUrl) return;
    setPreviewUrls(imageUrl);
  }, [imageUrl]);

  const handleFilesChange = (event) => {
    const files = event.target.files;
    if (files.length) {
      const newPreviewUrls = [...previewUrls];
      const newFiles = [];

      for (let i = 0; i < files.length; i++) {
        newFiles.push(files[i]);
        newPreviewUrls.push(URL.createObjectURL(files[i]));
      }

      setPreviewUrls(newPreviewUrls);
      // Implement your upload logic here
      // For example, using FormData to upload files to a server
      // setImageUrl(newPreviewUrls); // Update the imageUrl state in parent component if needed

      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full text-center">
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFilesChange}
        className="hidden"
      />
      <div
        className="px-6 pt-5 pb-6 border-2 border-[#CDCFDC] bg-[#F9F9F9] dark:border-gray-600 border-dashed rounded-md cursor-pointer"
        onClick={handleClick}
      >
        <span className="mx-auto flex justify-center">
          <FileUploadOutlinedIcon className="text-md text-gray-300 w-[20px]" />
        </span>
        <p className="text-sm mt-2 border py-2 w-[98px] mx-auto rounded-[8px]">Add files</p>
        <em className="text-xs text-gray-400">or drag your files here</em>
      </div>
      <aside className="flex flex-row flex-wrap mt-4">
        {previewUrls.map((url, index) => (
          <img
            key={index}
            width={100} // Adjust image size as needed
            height={100} // Adjust image size as needed
            className="m-2 border rounded-md border-gray-100 dark:border-gray-600"
            src={url}
            alt={`preview-${index}`}
          />
        ))}
      </aside>
    </div>
  );
}
