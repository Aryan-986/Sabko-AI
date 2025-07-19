import React, { useState } from 'react'
import { Sparkles, Edit } from 'lucide-react'

const BlogTitles = () => {
  const categories = [
    'General',
    'Technology',
    'Health',
    'Lifestyle',
    'Business',
    'Education',
    'Travel',
    'Food',
    'Movies'
  ]

  const [selectedCategory, setSelectedCategory] = useState('General')
  const [topic, setTopic] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // Your logic for handling the form submission
    console.log({ topic, selectedCategory })
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 flex items-center justify-center">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-xl bg-white p-8 rounded-2xl border border-gray-200 shadow-md"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-semibold text-gray-800">AI Blog Title Generator</h1>
        </div>

        {/* Topic Input */}
        <label className="block text-sm font-medium text-gray-600 mb-1">Keyword</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="E.g., AI in Education, Sustainable Travel..."
          className="w-full p-3 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none mb-5"
          required
        />

        {/* Category Selector */}
        <div className="mb-2 text-sm font-medium text-gray-600">Category</div>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 text-sm rounded-full border transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-all duration-200"
        >
          <Edit className="w-4 h-4" />
          Generate Titles
        </button>
      </form>
    </div>
  )
}

export default BlogTitles
