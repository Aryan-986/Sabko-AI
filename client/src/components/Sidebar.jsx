import React from 'react';
import { Protect, useClerk, useUser } from '@clerk/clerk-react';
import {
  Hash,
  House,
  SquarePen,
  Image,
  ScissorsIcon,
  Eraser,
  FileText,
  Users,
  LogOut,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: ScissorsIcon },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col justify-between max-sm:absolute top-14 bottom-0 z-50
      ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-transform duration-300 ease-in-out`}
    >
      {/* Top Section */}
      <div className="py-6 px-4 overflow-y-auto h-full">
        <div className="flex flex-col items-center gap-2 mb-6">
          <img
            src={user.imageUrl}
            alt="User avatar"
            className="w-20 h-20 object-cover rounded-md mx-auto shadow-sm"
          />
          <h2 className="text-lg font-semibold text-gray-700 text-center">
            {user.fullName}
          </h2>
        </div>

        <nav className="space-y-2">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/ai'}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 truncate ${
                  isActive
                    ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="truncate">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom User Info */}
      <div className="w-full border-t border-gray-100 px-4 py-4 flex items-center justify-between">
        <div
          onClick={openUserProfile}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition"
        >
          <img
            src={user.imageUrl}
            alt="User"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user.fullName}</span>
            <span className="text-xs text-gray-500 leading-none">
              <Protect plan="premium" fallback="Free">Premium</Protect> Plan
            </span>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-5 h-5 text-gray-400 hover:text-red-500 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
