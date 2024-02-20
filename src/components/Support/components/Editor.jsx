import { useState } from 'react';

const Editor = () => {
  const [isEditable, setEditable] = useState(true);

  const execCommand = (cmd, arg = null) => {
    document.execCommand(cmd, false, arg);
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-2">
        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => execCommand('bold')}>Bold</button>
        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => execCommand('italic')}>Italic</button>
        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => execCommand('underline')}>Underline</button>
        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => execCommand('insertOrderedList')}>Ordered List</button>
        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => execCommand('insertUnorderedList')}>Unordered List</button>
        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => execCommand('createLink', prompt('Enter the URL'))}>Insert Link</button>
        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => execCommand('insertImage', prompt('Enter the image URL'))}>Insert Image</button>
        <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none" onClick={() => setEditable(!isEditable)}>{isEditable ? 'Lock' : 'Unlock'}</button>
      </div>
      <div
        contentEditable={isEditable}
        className="border border-gray-300 min-h-[200px] p-4 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      >
        Start editing...
      </div>
    </div>
  );
};

export default Editor;
