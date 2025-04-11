import { Umbrella, CloudHail, Sun, CloudRain, CloudSnow, Snowflake, Search } from "lucide-react";
import WindIcon from "./icons/WindIcon";
import HumidityIcon from "./icons/HumidityIcon";

export default function WeatherWidget() {
  return (
    <>
      <div className="weather-app max-w-[28rem] w-full bg-matte-black rounded-[15px] relative">
        <header className="flex justify-between items-center">
          <div className="city-info">
            <h1 className="font-teko font-bold text-[2em] tracking-[1px]">London</h1>
            <p className="font-montserrat text-[1em] text-mid-gray">22 January, 2024</p>
          </div>
          <Search className="w-[35px] h-[35px] cursor-pointer" onClick={()=>document.getElementById('weather_model').showModal()} />
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
          <div className="flex flex-col justify-between items-center gap-[0.5rem]">
            <Umbrella className="w-6 h-6"/>
            <span className="wind-speed">0%</span>
            <p className="font-montserrat text-[1em] text-mid-gray">Precipitation</p>
          </div>
        </div>
        <div className="weekly-forecast">
          <div className="data flex flex-col items-center gap-[0.5rem]">
            <p className="font-montserrat text-[1em]">Mon</p>
            <WindIcon size="w-8 h-8" />
            <div className="flex gap-[0.15rem] pb-[1rem]">
              <span day-temp-min="">5&deg;</span> | <span day-temp-max="">10&deg;</span>
            </div>
          </div>
          <div className="data flex flex-col items-center gap-[0.5rem]">
            <p className="font-montserrat text-[1em]">Tue</p>
            <CloudSnow className="w-8 h-8"/>
            <div className="flex gap-[0.15rem] pb-[1rem]">
              <span day-temp-min="">6&deg;</span> | <span day-temp-max="">13&deg;</span>
            </div>
          </div>
          <div className="data flex flex-col items-center gap-[0.5rem]">
            <p className="font-montserrat text-[1em]">Wed</p>
            <WindIcon size="w-8 h-8" />
            <div className="flex gap-[0.15rem] pb-[1rem]">
              <span day-temp-min="">7&deg;</span> | <span day-temp-max="">11&deg;</span>
            </div>
          </div>
          <div className="data flex flex-col items-center gap-[0.5rem]">
            <p className="font-montserrat text-[1em]">Thu</p>
            <CloudRain className="w-8 h-8"/>
            <div className="flex gap-[0.15rem] pb-[1rem]">
              <span day-temp-min="">8&deg;</span> | <span day-temp-max="">12&deg;</span>
            </div>
          </div>
          <div className="data flex flex-col items-center gap-[0.5rem]">
            <p className="font-montserrat text-[1em]">Fri</p>
            <Sun className="w-8 h-8"/>
            <div className="flex gap-[0.15rem] pb-[1rem]">
              <span day-temp-min="">3&deg;</span> | <span day-temp-max="">9&deg;</span>
            </div>
          </div>
          <div className="data flex flex-col items-center gap-[0.5rem]">
            <p className="font-montserrat text-[1em]">Sat</p>
            <Snowflake className="w-8 h-8"/>
            <div className="flex gap-[0.15rem] pb-[1rem]">
              <span day-temp-min="">4&deg;</span> | <span day-temp-max="">10&deg;</span>
            </div>
          </div>
          <div className="data flex flex-col items-center gap-[0.5rem]">
            <p className="font-montserrat text-[1em]">Sun</p>
            <CloudHail className="w-8 h-8"/>
            <div className="flex gap-[0.15rem] pb-[1rem]">
              <span day-temp-min="">7&deg;</span> | <span day-temp-max="">11&deg;</span>
            </div>
          </div>
        </div>
      </div>
      <dialog id="weather_model" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-solid-black">
          <h3 className="font-teko font-bold text-lg text-pale-white">Hello!</h3>
          <p className="text-mid-gray">Enter the Name or City you want to search for!</p>
          <div className="modal-action">
            <form className="w-full" method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <label htmlFor="city"></label>
              <input type="search" id="city" className="input text-matte-black" />
              <button className="btn ml-1.5">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
