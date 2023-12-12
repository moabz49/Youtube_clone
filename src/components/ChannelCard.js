import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link, useLocation } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

function ChannelCard({ channelDetail }) {
  console.log(channelDetail);
  const location = useLocation();
  const isCurrentPage = location.pathname === `/channel/${channelDetail?.id?.channelId}`;

  const linkTo = isCurrentPage ? '' : `/channel/${channelDetail?.id?.channelId}`;

  return (
    <div className='shadow-md flex justify-center items-center mx-auto mt-2 h-full'>
      {/* Render the Link component with conditional 'to' attribute */}
      <Link
        to={linkTo}
        className={`flex flex-col text-center text-white items-stretch ${isCurrentPage ? 'pointer-events-none' : ''}`}
      >
        <img
          src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          className='rounded-[50%] h-[180px] w-[180px] mb-2 border-[1px] object-contain border-[#e3e3e3]'
        />
        <h3>
          {channelDetail?.snippet?.title} <CheckCircleIcon className='text-[14px] text-gray-500 ml-[5px]' />
        </h3>
        {channelDetail?.statistics?.subscriberCount && (
          <h5 className='text-[15px] font-medium text-gray-500'>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </h5>
        )}
      </Link>
    </div>
  );
}

export default ChannelCard;
