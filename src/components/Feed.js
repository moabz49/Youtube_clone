import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <section className="flex items-center justify-center bg-black w-full">
      <div className='flex-col md:flex-row flex max-w-[1340px] '>
        <div className="w-[100vw] mx-[4px] md:h-[80vh] md:w-[17vw] border-r-[1px] border-[#3d3d3d] md:px-2 ">
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
        <div className="flex flex-col md:w-[80vw] mx-[8px] mt-[20px] md:mt-[0px]">
          <h4 className="font-bold text-3xl text-neutral-100 md:mb-[8px] tracking-tight ml-4">
            {selectedCategory} videos
          </h4>

          <Videos videos={videos} />
        </div>
      </div>
    </section>
  );
};

export default Feed;