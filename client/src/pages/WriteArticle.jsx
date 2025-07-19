import { Edit, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: 'Short (800 words)' },
    { length: 1200, text: 'Medium (800–1200 words)' },
    { length: 1600, text: 'Long (1200+ words)' },
  ]

  const [selectedLength, setSelectedLength] = useState(articleLength[0])
  const [input, setInput] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='h-full overflow-y-auto p-6 flex flex-col lg:flex-row gap-6 text-slate-700 bg-[#F9FAFB]'>
      {/* Left Column */}
      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-lg p-6 bg-white rounded-2xl border border-gray-200 shadow-sm'
      >
        <div className='flex items-center gap-3 mb-4'>
          <Sparkles className='w-6 h-6 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold text-gray-800'>Article Configuration</h1>
        </div>

        <label className='block mt-4 mb-1 text-sm font-medium text-gray-600'>Article Topic</label>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='w-full p-2.5 text-sm rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='The future of Artificial Intelligence is...'
          required
        />

        <label className='block mt-6 mb-2 text-sm font-medium text-gray-600'>Article Length</label>
        <div className='flex flex-wrap gap-2'>
          {articleLength.map((item, index) => (
            <span
              key={index}
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition-all duration-200 ${
                selectedLength.text === item.text
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-600 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {item.text}
            </span>
          ))}
        </div>

        <button
          type='submit'
          className='mt-6 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition-all duration-200'
        >
          <Edit className='w-4 h-4' />
          Generate Article
        </button>
      </form>

      {/* Right Column */}
      <div className='w-full max-w-xl p-6 bg-white rounded-2xl border border-gray-200 shadow-sm min-h-96'>
        <div className='flex items-center gap-3 mb-4'>
          <Edit className='w-5 h-5 text-black' />
          <h1 className='text-xl font-semibold text-gray-800'>Generated Article</h1>
        </div>

        <div className='h-full flex justify-center items-center text-center'>
          <div className='text-sm flex flex-col items-center gap-4 text-gray-400 max-w-sm'>
            <Edit className='w-8 h-8 text-gray-400' />
            <p>
              Enter a topic and click <strong className='text-blue-600'>"Generate Article"</strong> to see the magic of AI unfold.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriteArticle
