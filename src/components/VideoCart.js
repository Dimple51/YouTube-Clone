import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Avatar from "react-avatar";
import API_KEY from '../constant/youtube';

const VideoCart = ({ item }) => {
    const [ytIcon, setYtIcon] = useState("");

    const getYoutubeChannelName = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`);
            setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getYoutubeChannelName();
    }, []);

    return (
        <div className='w-full max-w-sm cursor-pointer my-4  '>
            <img className='rounded-xl w-full' src={item.snippet.thumbnails.medium.url} alt="ytvideo" />
            <div className='flex mt-3'>
                <Avatar 
                    src={ytIcon} 
                    size={40} 
                    round={true} 
                    className="object-cover flex-shrink-0"
                />
                <div className='ml-3 flex-1'>
                    <h1 className='font-bold text-sm line-clamp-2 text-gray-900'>{item.snippet.title}</h1>
                    <p className='text-sm text-gray-500 mt-1'>{item.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCart;