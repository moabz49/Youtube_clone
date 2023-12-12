import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import youtubeLogo from '../images/youtube.svg'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SearchBar } from "./";

const Navbar = () => (
  <header className="flex items-center w-full justify-center sticky top-0 py-[6px] bg-black z-50">
    <div className="flex items-center justify-between px-1  max-w-[1340px] w-full">
      <Link className="flex items-center " to="/">
        <div className="flex items-center relative ">
            <div className="absolute bg-white h-[18px] w-[18px] top-1/3 left-1/3 -z-10"/>
            <YouTubeIcon className="text-red-600" sx={{colors: '#FC1503', fontSize: '42px', }}/>
        </div>
        <p className="text-white capitalize -tracking-[1px] text-2xl font-Oswald">You<span className="uppercase">t</span>ube</p>
      </Link>
      <SearchBar />
    </div>
  </header>
);

export default Navbar;