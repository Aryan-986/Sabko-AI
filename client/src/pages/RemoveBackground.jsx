import React, { useState } from 'react';
import { Eraser, Sparkles, Upload } from 'lucide-react';

const RemoveBackground = () => {
  const [inputFile, setInputFile] = useState(null);
  const [removedBgImage, setRemovedBgImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!inputFile) return;
    setLoading(true);

    // Dummy timeout to simulate background removal
    setTimeout(() => {
      // For now, just show the uploaded image as "output"
      const imageUrl = URL.createObjectURL(inputFile);
      setRemovedBgImage(imageUrl);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='min-h-screen p-6 bg-[#F9FAFB] text-slate-700'>
      <div className='flex flex-col lg:flex-row gap-6'>

        {/* Upload Section */}
        <form
          onSubmit={onSubmitHandler}
          className='w-full max-w-lg p-6 bg-white rounded-2xl border border-gray-200 shadow-sm'
        >
          <div className='flex items-center gap-3 mb-4'>
            <Sparkles className='w-6 h-6 text-[#FF4938]' />
            <h1 className='text-xl font-semibold text-gray-800'>Remove Image Background</h1>
          </div>

          {/* File Input */}
          <label className='block mt-4 mb-1 text-sm font-medium text-gray-600'>
            Upload Image
          </label>
          <input
            type='file'
            accept='image/*'
            onChange={(e) => setInputFile(e.target.files[0])}
            className='w-full p-2.5 text-sm rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
          <p className='text-gray-500 font-light text-xs mt-1'>
            Supports JPG, PNG, and more.
          </p>

          {/* Submit */}
          <button
            type='submit'
            className='mt-6 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition-all duration-200'
          >
            <Upload className='w-4 h-4' />
            Remove Background
          </button>
        </form>

        {/* Output Section */}
        <div className='w-full max-w-xl p-6 bg-white rounded-2xl border border-gray-200 shadow-sm min-h-96 flex flex-col justify-center items-center'>
          <div className='flex items-center gap-3 mb-4'>
       
          </div>

          {loading ? (
            <p className='text-gray-500 animate-pulse'>Processing image...</p>
          ) : removedBgImage ? (
            <img
              src={removedBgImage}
              alt='Processed Output'
              className='max-w-full max-h-[400px] object-contain rounded-md border'
            />
          ) : (
            <div className='text-sm text-gray-400 flex flex-col items-center gap-2 text-center'>
              <Eraser className='w-8 h-8 text-gray-400' />
              <p>Upload an image and click <span className='text-blue-600 font-medium'>“Remove Background”</span> to begin.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
