import React from 'react';

const avatarUrls = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=10",
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=13",
  "https://i.pravatar.cc/150?img=14",
  "https://i.pravatar.cc/150?img=15",
  "https://i.pravatar.cc/150?img=16",
  "https://i.pravatar.cc/150?img=17",
  "https://i.pravatar.cc/150?img=18",
  "https://i.pravatar.cc/150?img=19",
  "https://i.pravatar.cc/150?img=20",
];

const ChatMessage = ({ item }) => {
  const avatarUrl = item.avatar || avatarUrls[Math.floor(Math.random() * avatarUrls.length)];

  return (
    <div className='flex items-start py-2 w-full max-w-md'>
      <img src={avatarUrl} alt={item.name} className="w-8 h-8 rounded-full" />
      <div className='ml-2 flex flex-col'>
        <h1 className='font-bold text-sm'>{item.name}</h1>
        <p className='text-sm'>{item.message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;