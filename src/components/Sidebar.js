import React from "react";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <div
  className="flex flex-row overflow-y-auto h-auto md:flex-col md:space-x-1 space-y-0 md:sticky md:overflow-x-auto md:max-h-[80vh]"
  >
    {categories.map((category) => (
      <button
        className={`group hover:bg-neutral-800/90 hover:text-white ${category.name === selectedCategory ? "bg-neutral-800/90" : ""}  px-[15px] py-[7px] my-[10px] mx-[2px] rounded-[10px] transition-all duration-300 ease-out !font-bold capitalize flex items-center text-[10px] md:text-[14px] justify-start cursor-pointer bg-transparent outline-none border-none text-white`}
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
      >
        <p
          sx={{ fontSize: "12px" }}
          className=' mr-4'
          >
            {category.icon}
        </p>
        <span className={`${category.name === selectedCategory ? 'opacity-100' : 'opacity-80'} group-hover:text-white text-xs xs:text-sm`}>
          {category.name}
        </span>

      </button>
    ))}
  </div>
);

export default Categories;

