import React from 'react'
import { Link } from "react-router-dom"; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useLocation } from 'react-router-dom';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const { pathname } = useLocation();


    return  (

    <div className='flex flex-col'>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
          className='w-[100%] h-[180]' />
      </Link>
      <div className=''>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
          <h2 className="font-bold text-white">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </h2>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <p className='text-gray-400 text-[16px] tracking-tight'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon className="text-gray-500 ml-[5px] " sx={{fontSize: '14px'}}/>
          </p>
        </Link>
      </div>
    </div>
    );
 }
export default VideoCard