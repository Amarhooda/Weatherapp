import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row max-md:flex-col justify-center my-6">
      <hr className="my-2"/>
      <div className="flex mx-6 max-md:ml-0 space-x-4 w-full ">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl max-md:text-sm rounded-xl font-light p-2 w-4/5 shadow-xl capitalize"
        />
        <UilSearch
          size={40}
          className="text-white cursor-pointer hover:bg-blue-500 rounded-md my-2 max-md:w-1/5 transition ease-in-out hover:scale-125"
          onClick={handleSearchClick}
        />
      </div>
      <div className="flex flex-row items-center p-4 justify-center">
        <div>
          <UilLocationPoint
            size={50}
            className="text-white cursor-pointer px-2  rounded-lg hover:bg-slate-400  transition ease-in-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>
        <button
          name="metric"
          className="text-3xl text-white font-medium rounded-lg hover:bg-slate-400  px-2 transition ease-in-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <button
          name="imperial"
          className="text-3xl text-white font-medium  rounded-lg hover:bg-slate-400 ml-3 px-2 transition ease-in-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
