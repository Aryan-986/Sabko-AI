import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-10 my-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Start for free and scale up as you grow. Find the perfect plan for your
          content creation needs.
        </p>
      </div>

      {/* Placeholder for Plan Cards */}
      <div className="text-center text-gray-500 italic">
        <PricingTable/>
      </div>
    </div>
  )
}

export default Plan
