import { Umbrella, CloudHail, Wind, CloudRain, CloudSnow, Snowflake, Search } from "lucide-react";
import WindIcon from "./icons/WindIcon";
import HumidityIcon from "./icons/HumidityIcon";

export default function WeatherWidget() {
  return (
    <div className="w-[448px] h-[562px] bg-matte-black rounded-[15px] mx-auto p-11">
      <header className="flex justify-between items-center">
        <div className="city-info">
          <h1 className="font-teko font-bold text-[2em] tracking-[1px]">London</h1>
          <p className="font-montserrat text-[1em] text-mid-gray">22 January, 2024</p>
        </div>
        <Search className="w-[35px] h-[35px] cursor-pointer" />
      </header>
      <div className="current-weather flex justify-between items-center mt-8">
        <h2 className="text-8xl font-teko font-bold">10&deg;</h2>
        <WindIcon size="h-auto max-w-24 w-full" />
      </div>
      <div className="current-weather-conditions bg-solid-black rounded-[10px] mt-5">
        <div className="flex flex-col justify-between items-center gap-[0.5rem]">
          <WindIcon size="w-6 h-6"/>
          <span className="wind-speed">34 km/s</span>
          <p className="font-montserrat text-[1em] text-mid-gray">Wind</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-[0.5rem]">
          <HumidityIcon size="w-6 h-6"/>
          <span className="wind-speed">63%</span>
          <p className="font-montserrat text-[1em] text-mid-gray">Humidity</p>
        </div>
        <div className="flex  flex-col justify-between items-center gap-[0.5rem]">
          <Umbrella className="w-6 h-6"/>
          <span className="wind-speed">0%</span>
          <p className="font-montserrat text-[1em] text-mid-gray">Precipitation</p>
        </div>
      </div>
    </div>
  )
}
