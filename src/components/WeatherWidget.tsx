import { Umbrella, CloudHail, Wind, CloudRain, CloudSnow, Snowflake, Search } from "lucide-react";

export default function WeatherWidget() {
  return (
    <div className="w-[448px] h-[562px] bg-matte-black rounded-[15px] mx-auto p-11">
      <header className="flex justify-between items-center">
        <div className="city-info">
          <h1 className="font-teko font-bold text-[2em] tracking-wider">London</h1>
          <p className="font-montserrat text-[1em] text-mid-gray">22 January, 2024</p>
        </div>
        <Search className="w-[35px] h-[35px] cursor-pointer" />
      </header>
      <div className="current-weather flex justify-between items-center mt-8">
        <h2 className="text-7xl font-teko font-bold">10°</h2>
        <Wind className="w-[72px] h-[72px]"/>
      </div>
    </div>
  )
}
