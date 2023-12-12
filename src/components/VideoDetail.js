import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import moment from 'moment';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDownOutlined';
import millify from "millify";
import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  console.log(videoDetail)
  const { snippet: { title, channelId, channelTitle, description, publishedAt }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <section className="95vh flex w-full justify-center items-center">
      <div className="flex justify-center items-center max-w-[1340px]">
        <div className="flex flex-col md:flex-row mx-[8px] md:space-x-4 lg:space-x-6 ">
          <div className="w-[100vw] md:w-[70%] lg:w-[100%] top-[86px] flex flex-col">
            <div className="flex items-center justify-center ">
               <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="md:h-[77vh] rounded-md w-[100vw]" style={{display: 'flex' ,width: '100%', height:'100%'}} controls />
            </div>
            <h5 className="text-white text-3xl font-bold p-2">
              {title}
            </h5>
            <div className="flex justify-between text-white py-1 px-2"  >
              <Link to={`/channel/${channelId}`}>
                <h6 className='text-white font-bold text-lg tracking-wide ' variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon className="text-gray-400 ml-[5px] " sx={{ fontSize: "16px" }} />
                </h6>
              </Link>
              <div className="flex justify-between text-white/70 items-center bg-neutral-800 py-1 px-4 rounded-full mb-[10px]">
                <p  className=''>
                  <ThumbUpIcon/>&nbsp;
                  {millify(likeCount)}
                </p>
                <p className="pl-2 text-3xl font-extralight">I</p>
                <p className="">
                  &nbsp;&nbsp;<ThumbDownIcon/>
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-800 rounded-md text-white p-4 space-y-4 pb-[20px]">
              <p className="font-bold text-sm ">{parseInt(viewCount).toLocaleString()} views&nbsp;&nbsp;{moment(publishedAt).fromNow()}&nbsp;&nbsp;<span className="text-neutral-500">{channelTitle}</span> </p>
              <p className="">{description}</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-center mx-2 -pt-[8px]" >
            <Videos videos={videos} column/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDetail;