import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import API_KEY from '../constant/youtube';
import axios from "axios";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from './LiveChat';
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";

const Watch = () => {
  const [input, setInput] = useState("");
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const dispatch = useDispatch();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
      setSingleVideo(res.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const sendMessage = () => {
    if (input.trim()) {
      const userAvatar = "https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg";
      dispatch(setMessage({ name: "Dimple", message: input, avatar: userAvatar }));
      setInput(""); // Clear input after sending the message
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, [videoId]);

  return (
    <div className='flex flex-col md:flex-row ml-4 w-full mt-2'>
      <div className='flex flex-col w-full md:w-3/4'>
        <iframe
          className='w-full h-64 md:h-96'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title}</h1>
        <div className='flex items-center justify-between mt-2'>
          <div className='flex items-center'>
          <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
            <h1 className='font-bold ml-2'>{singleVideo?.snippet?.channelTitle}</h1>
            <button className='px-4 py-1 font-medium bg-black text-white rounded-full ml-4'>Subscribe</button>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
              <AiOutlineLike size="20px" className='mr-2' />
              <span>Like</span>
            </div>
            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
              <PiShareFatLight size="20px" className='mr-2' />
              <span>Share</span>
            </div>
            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
              <GoDownload size="20px" className='mr-2' />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/4 border border-gray-300 rounded-lg h-fit p-4 mt-4 md:mt-0'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-semibold'>Top Chat</h1>
          <BsThreeDotsVertical />
        </div>
        <div className='overflow-y-auto h-96 flex flex-col-reverse'>
          <LiveChat />
        </div>
        {/* <div className='flex items-center border-t pt-2'>
          <Avatar src="https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg" size={35} round={true} className="flex-shrink-0"  />
          <input value={input} onChange={(e) => setInput(e.target.value)} className='border-b border-gray-300 outline-none ml-2 flex-1' type="text" placeholder='Send message...' />
          <div className='bg-gray-200 cursor-pointer p-2 rounded-full ml-2  ' onClick={sendMessage}>
            <LuSendHorizonal size="20px"  />
          </div>
        </div> */}
        <div className='flex items-center border-t pt-2 w-full'>
  <Avatar src="https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg" size={25} round={true} />
  <input value={input} onChange={(e) => setInput(e.target.value)} className='border-b border-gray-300 outline-none ml-2 flex-1 w-0' type="text" placeholder='Send message...' />
  <div className='bg-gray-200 cursor-pointer p-2 rounded-full ml-2 flex-shrink-0' onClick={sendMessage}>
    <LuSendHorizonal size="20px" />
  </div>
</div>

      </div>
    </div>
  );
}

export default Watch;
