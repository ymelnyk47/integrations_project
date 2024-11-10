"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  User, 
  Settings, 
  Moon, 
  Sun, 
  Monitor, 
  LogOut, 
  ChevronDown,
  KeyRound,
  Bell,
  HelpCircle,
  Command
} from 'lucide-react';
import { useTheme } from 'next-themes';

interface UserMenuProps {
  user: {
    name: string;
    email: string;
    avatarUrl?: string;
    role: string;
  };
}

export default function UserMenu({ user }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const commandKey = navigator.platform.toLowerCase().includes('mac') ? '⌘' : 'Ctrl';

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-800 
                 transition-colors duration-150 text-gray-300 hover:text-white"
      >
        {user.avatarUrl ? (
          <img 
            src={user.avatarUrl} 
            alt={user.name}
            className="w-6 h-6 rounded-full"
          />
        ) : (
          <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
            <span className="text-sm font-medium text-white">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
          isOpen ? 'transform rotate-180' : ''
        }`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-gray-900 border border-gray-800 
                      rounded-lg shadow-lg py-1 z-50">
          {/* User Info */}
          <div className="px-4 py-2 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              {user.avatarUrl ? (
                <img 
                  src={user.avatarUrl} 
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-lg font-medium text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user.name}</p>
                <p className="text-xs text-gray-400 truncate">{user.email}</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-400">
              <span className="px-2 py-1 rounded-full bg-gray-800">
                {user.role}
              </span>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="px-2 py-1.5 border-b border-gray-800">
            <p className="px-2 text-xs text-gray-500 mb-1">APPEARANCE</p>
            {[
              { value: 'light', label: 'Light', icon: Sun },
              { value: 'dark', label: 'Dark', icon: Moon },
              { value: 'system', label: 'System', icon: Monitor }
            ].map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setTheme(value)}
                className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded-md
                  ${theme === value ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800/50'}`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{label}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="px-2 py-1.5 space-y-0.5">
            {[
              { label: 'Profile & Account', icon: User, shortcut: `${commandKey}+P` },
              { label: 'Settings', icon: Settings, shortcut: `${commandKey}+,` },
              { label: 'Security', icon: KeyRound, shortcut: null },
              { label: 'Notifications', icon: Bell, shortcut: `${commandKey}+N` },
              { label: 'Keyboard Shortcuts', icon: Command, shortcut: `${commandKey}+K` },
              { label: 'Help & Support', icon: HelpCircle, shortcut: null },
            ].map(({ label, icon: Icon, shortcut }) => (
              <button
                key={label}
                className="w-full flex items-center justify-between px-2 py-1.5 rounded-md
                         text-gray-300 hover:bg-gray-800/50 hover:text-white group"
              >
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{label}</span>
                </div>
                {shortcut && (
                  <span className="text-xs text-gray-500 group-hover:text-gray-400">
                    {shortcut}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Logout */}
          <div className="border-t border-gray-800 px-2 py-1.5">
            <button
              onClick={() => console.log('Logout clicked')}
              className="w-full flex items-center space-x-2 px-2 py-1.5 rounded-md
                       text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}