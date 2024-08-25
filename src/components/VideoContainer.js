import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY, { YOUTUBE_VIDEO_API } from '../constant/youtube';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeVideo } from '../utils/appSlice';
import { ShimmerThumbnail } from 'react-shimmer-effects'; // Import ShimmerThumbnail

const VideoContainer = () => {
    const { video, category } = useSelector((store) => store.app);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const fetchingYoutubeVideo = async () => {
        try {
            const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
            dispatch(setHomeVideo(res?.data?.items));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Set loading to false after data is fetched
        }
    };

    const fetchVideoByCategory = async (category) => {
        try {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
            dispatch(setHomeVideo(res?.data?.items));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Set loading to false after data is fetched
        }
    };

    useEffect(() => {
        setLoading(true); // Set loading to true before starting the fetch
        if (category === 'All') {
            fetchingYoutubeVideo();
        } else {
            fetchVideoByCategory(category);
        }
    }, [category]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 '>
      {loading ? (
        Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className='w-full h-64'>
            <ShimmerThumbnail width={300} height={180} className='rounded-lg mt-4' />
          </div>
        ))
      ) : (
        video.map((item) => (
          <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id}>
            <VideoCart item={item} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;