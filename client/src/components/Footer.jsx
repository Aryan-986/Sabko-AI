import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-white px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-gray-600">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-gray-200 pb-10">
        {/* Brand & Description */}
        <div className="md:max-w-lg">
          <img
            className="h-12 w-auto mb-6"
            src={assets.logo}
            alt="logo"
          />
          <p className="text-sm leading-relaxed">
            Transform the way you create with the power of AI. Whether you're writing, designing, or generating ideas,
            our platform provides the tools you need to go from concept to completion—faster and smarter.
          </p>
        </div>

        {/* Navigation & Newsletter */}
        <div className="flex-1 flex flex-col sm:flex-row gap-12 md:justify-end">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold text-gray-800 text-base mb-4">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold text-gray-800 text-base mb-4">Stay Updated</h2>
            <p className="text-sm mb-4 max-w-xs">
              Get the latest AI tools, tutorials, and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                className="border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-64 h-10 rounded-md px-3 text-sm"
                type="email"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 text-sm rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <p className="pt-6 text-center text-xs text-gray-500 pb-8">
        © 2024 <a href="https://prebuiltui.com" className="hover:underline text-blue-600">Sablai AI</a>. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
