import React from "react";
import { ChannelCard, Loader, VideoCard } from "./";
import { useLocation } from "react-router-dom";
const Videos = ({ videos, column }) => {
  const { pathname } = useLocation();
  if(!videos?.length) return <Loader />;

  return (
    column ? (
      <div className="grid grid-cols-1">
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
      </div>
      ):(
        <div className={`${pathname === '/' ? 'xl:grid-cols-4 lg:grid-cols-3' : 'lg:grid-cols-4 xl:grid-cols-5'}mx-[8px] grid xs:grid-cols-2 md:grid-cols-3 w-full gap-[16px]`}>
        {videos.map((item, idx) => (
          <div key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
      </div>
      )
      
  )
}

export default Videos;