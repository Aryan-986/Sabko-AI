import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {
  const navigate = useNavigate()
  const { user } = useUser()

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="inline-block text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 rounded-full mb-4">
          🚀 AI Features
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Supercharge Your Creativity ✨
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Unlock powerful tools to <span className="font-medium text-gray-800">write ✍️</span>, <span className="font-medium text-gray-800">design 🎨</span>, and
          enhance content — all in one smart space.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer w-full max-w-xs text-center"
          >
            <div
              className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl shadow-sm mb-4"
              style={{ background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` }}
            >
              <tool.Icon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {tool.title} 🚀
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AiTools
