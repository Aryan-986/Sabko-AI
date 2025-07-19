import React from 'react'
import { Edit } from 'lucide-react'

const CreationItem = ({ item }) => {
  return (
    <div className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg shadow-sm transition hover:shadow-md cursor-pointer">
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className="text-base font-medium text-gray-800">{item.prompt}</h2>
          <p className="text-gray-500 text-xs mt-1">
            {item.type} • {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Tag-style button */}
          <span className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full text-xs font-medium">
            {item.type}
          </span>

          {/* Generate Article button */}
          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs transition-all duration-200"
          >
            <Edit className="w-4 h-4" />
            Generate Article
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreationItem
