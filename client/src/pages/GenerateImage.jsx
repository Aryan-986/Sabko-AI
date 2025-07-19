import React, { useState } from 'react'
import { Sparkles, Image as ImageIcon } from 'lucide-react'

const GenerateImage = () => {
  const styles = [
    'Realistic',
    'Ghibli style',
    'Anime style',
    'Cartoon style',
    'Fantasy style',
    'Realistic style',
    '3D style',
    'Portrait style'
  ]

  const [input, setInput] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('Realistic')
  const [publish, setPublish] = useState(false)
  const [imageGenerated, setImageGenerated] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // Trigger mock image generation
    setImageGenerated(true)
  }

  return (
    <div className="h-full p-6 bg-[#F9FAFB] overflow-y-auto">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left: Form */}
        <form
          onSubmit={onSubmitHandler}
          className="w-full lg:w-1/2 p-6 bg-white rounded-2xl border shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            Generate an AI Image
          </h2>

          {/* Prompt Input */}
          <div className="mb-4">
            <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-1">
              What do you want to see?
            </label>
            <textarea
              id="input"
              rows={4}
              placeholder="E.g. A futuristic city in the clouds"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
          </div>

          {/* Style Dropdown */}
          <div className="mb-4">
            <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-1">
              Choose a style
            </label>
            <select
              id="style"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
            >
              {styles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          {/* Publish Toggle */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="publish"
              className="mr-2 w-4 h-4 text-purple-600 border-gray-300 rounded"
              checked={publish}
              onChange={(e) => setPublish(e.target.checked)}
            />
            <label htmlFor="publish" className="text-sm text-gray-700">
              Make this image public
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Generate Image
          </button>
        </form>

        {/* Right: Preview / Icon Placeholder */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white border rounded-2xl p-6 shadow-sm min-h-[300px]">
          {imageGenerated ? (
            <div className="text-center">
              <ImageIcon className="w-20 h-20 mx-auto text-purple-500 mb-4" />
              <p className="text-lg font-medium text-gray-700">
                Your AI image has been generated!
              </p>
              <p className="text-sm text-gray-500 mt-1">(*This is a placeholder preview icon.)</p>
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <ImageIcon className="w-20 h-20 mx-auto mb-4" />
              <p className="text-sm">No image generated yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GenerateImage
