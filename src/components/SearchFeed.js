import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <section className="flex justify-center items-center ">
      <div className="min-h-[95vh] flex-col max-w-[1340px] mx-[10px]">
        <h4 className="text-white font-medium sm:text-xl pb-4 border-b-[0.5px] border-zinc-300 ">
          Search Results for "{searchTerm}"
        </h4>
        <div className="flex">
          <Videos videos={videos} />
        </div>
      </div>
    </section>
  );
};

export default SearchFeed;