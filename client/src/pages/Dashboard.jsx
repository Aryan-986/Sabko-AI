import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Sparkles, Gem } from 'lucide-react'
import { Protect } from '@clerk/clerk-react'
import CreationItem from '../components/CreationItem'

const Dashboard = () => {
  const [creations, setCreations] = useState([])

  const getDashboardData = async () => {
    setCreations(dummyCreationData)
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-50">
      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-6">
        {/* Total Creations Card */}
        <div className="flex justify-between items-center w-full sm:w-72 p-5 bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="text-slate-700">
            <p className="text-sm font-medium">Total Creations</p>
            <h2 className="text-2xl font-bold">{creations.length}</h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Active Plan Card */}
        <div className="flex justify-between items-center w-full sm:w-72 p-5 bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="text-slate-700">
            <p className="text-sm font-medium">Active Plan</p>
            <h2 className="text-2xl font-bold">
              <Protect plan="premium" fallback="Free">Premium</Protect>
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center">
            <Gem className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div className="space-y-4">
        <p className="text-lg font-semibold text-gray-700">Recent Creations</p>
        {creations.map((item) => (
          <CreationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
