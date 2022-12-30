import React, { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Paris",
    },
    {
      id: 5,
      title: "Washington",
    },
    {
      id: 6,
      title: "Monaco",
    },
    {
      id: 7,
      title: "Beijing",
    },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-10 top-2 cursor-pointer md:hidden"
      >
        <UilBars
          className="text-white transition ease-in-out hover:scale-110"
          size={35}
          name={open ? "close" : "menu"}
        />
      </div>
      <ul
        className={`md:flex md:items-center md:pb-0 py-3 absolute rounded-lg md:static max-md:bg-white md:z-auto z-1 right-0 w-[200px] md:pl-0 transition-opacity duration-500 ease-in-out ${
          open ? "top-24" : "top-[-490px]"
        }`}
      >
        {cities.map((city) => (
          <button
            key={city.id}
            className="px-8 text-bl max-md:py-2
             text-xl cursor-pointer transition md:text-white ease-in-out hover:scale-110 hover:bg-blue-100 font-bold hover:drop-shadow-2xl hover:text-black shadow-black rounded-md"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        ))}
      </ul>
    </>
  );
}

export default TopButtons;
