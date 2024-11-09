"use client";

import React from 'react';
import { MessageSquare, User, Clock, ChartSplineIcon } from 'lucide-react';

interface content {
  id: number;
  developer: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  status: 'online' | 'offline' | 'away';
  integration: string;
}

interface DeveloperChat {
  readonly id: number;
  readonly developer: string;
  readonly avatar: string;
  readonly lastMessage: string;
  readonly timestamp: string;
  readonly unread: number;
  readonly status: 'online' | 'offline' | 'away';
  readonly integration: string;
}

interface DeveloperChatProps {
  chats: readonly DeveloperChat[];
}


export default function DeveloperChatComponent({ chats }: DeveloperChatProps) {
  return (
    <div className='bg-gray-950 rounded-lg border border-gray-800'>
      <div className='p-4 border-b border-gray-800'>
        <h2 className='text-lg font-semibold text-gray-100 flex items-center'>
          <MessageSquare className='mr-2 h-5 w-5' />
          Developer Chats
        </h2>
      </div>
      <div className='p-2'>
        { chats.map ((chat) => (
          <div 
            key={chat.id}
            className='flex items-center p-3 hover:bg-gray-900 rounded-lg cursor-pointer transition-colors'
          >
            <div className='relative'>
              <div className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400'>
                <User className='h-6 w-6' />
              </div>
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-950
                ${chat.status === 'online' ? 'bg-green-500' : 
                  chat.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'}`}
              />
            </div>
            <div className='ml-3 flex-1 min-w-0'>
              <div className='flex justify-between items-start'>
                <span className='text-sm font-medium text-gray-200'>{chat.developer}</span>
                <div className='flex items-center'>
                  <Clock className='h-3 w-3 text-gray-500 mr-1' />
                  <span className='text-xs text-gray-500'>{chat.timestamp}</span>
                </div>
              </div>
              <p className='text-sm text-gray-400 truncate'>{chat.lastMessage}</p>
              <span className='text-xs text-gray-500'>{chat.integration}</span>
            </div>
            {chat.unread > 0 && (
              <div className='ml-3 bg-green-600 text-white text-xs rounded-full px-2 py-1'>
                {chat.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}