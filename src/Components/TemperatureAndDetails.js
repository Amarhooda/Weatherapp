import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherServices";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row max-md:flex-col items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-6xl font-bold">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col max-md:mt-8 space-y-2">
          <div className="flex font-medium items-center  justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-medium  items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-medium items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row max-md:flex-col items-center justify-center space-x-2 text-white text-sm p-5">
        <UilSun />
        <p className="font-medium">
          Rise:{" "}
          <span className="font-medium  ml-3">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>

        <UilSunset />
        <p className="font-medium">
          Set:{" "}
          <span className="font-medium ml-3 ">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span> 
        </p>

        <UilArrowUp />
        <p className="font-medium">
          High:{" "}
          <span className="font-medium ml-3">{`${temp_max.toFixed()}°`}</span>
        </p>

        <UilArrowDown />
        <p className="font-medium">
          Low:{" "}
          <span className="font-medium ml-3">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
