import { Umbrella, Search } from "lucide-react";
import WindIcon from "./icons/WindIcon";
import HumidityIcon from "./icons/HumidityIcon";

interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    icon: string;
  }[];
}

type weatherObj = {
  weather: { icon: string }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  name: string;
}

interface weatherProps {
  currentWeather: weatherObj | null;
  weeklyForecast: ForecastItem[] | null;
  currentDate: number | string;
  cityNameInput: string;
  cityNameSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cityNameSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function WeatherWidget({
  currentWeather,
  weeklyForecast,
  currentDate,
  cityNameInput,
  cityNameSearch,
  cityNameSubmit }: weatherProps) {
  return (
    <>
      <div className="weather-app max-w-[28rem] w-full bg-matte-black rounded-[15px] relative">
        <header className="flex justify-between items-center">
          <div className="city-info">
            <h1 className="font-teko font-bold text-[2em] tracking-[1px]">{currentWeather?.name}</h1>
            <p className="font-montserrat text-[1em] text-mid-gray">{currentDate}</p>
          </div>
          <Search className="w-[35px] h-[35px] cursor-pointer" onClick={()=>document.getElementById('weather_model').showModal()} />
        </header>
        <div className="current-weather flex justify-between items-center mt-8">
          <h2 className="text-8xl font-teko font-bold">{Math.round((currentWeather?.main.temp ?? 0) * 9/5 + 32)}&deg;F</h2>
          {/* <WindIcon size="h-auto max-w-24 w-full" /> */}
          <img className="h-auto max-w-24 w-full" src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`} alt="weather icon" />
        </div>
        <div className="current-weather-conditions bg-solid-black rounded-[10px] mt-5">
          <div className="flex flex-col justify-between items-center gap-[0.5rem]">
            <WindIcon size="w-6 h-6"/>
            <span className="wind-speed">{currentWeather?.wind.speed} km/s</span>
            <p className="font-montserrat text-[1em] text-mid-gray">Wind</p>
          </div>
          <div className="flex flex-col justify-between items-center gap-[0.5rem]">
            <HumidityIcon size="w-6 h-6"/>
            <span className="wind-speed">{currentWeather?.main.humidity}</span>
            <p className="font-montserrat text-[1em] text-mid-gray">Humidity</p>
          </div>
          <div className="flex flex-col justify-between items-center gap-[0.5rem]">
            <Umbrella className="w-6 h-6"/>
            <span className="wind-speed">{currentWeather?.main.pressure}%</span>
            <p className="font-montserrat text-[1em] text-mid-gray">Precipitation</p>
          </div>
        </div>
        <div className="weekly-forecast">
          {weeklyForecast?.slice(0, 7).map((forecast, idx) => (
              <div key={idx} className="data flex flex-col items-center gap-[0.5rem]">
                <p className="font-montserrat text-[1em]">{new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                <img className="w-8 h-8" src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="weather icon" />
                <div className="flex gap-[0.15rem] pb-[1rem]">
                <span day-temp-min={forecast.main.temp_min}>{((forecast?.main.temp_min ?? 0) * 9/5 + 32).toFixed(1)}&deg;F</span> | <span day-temp-max={forecast.main.temp_max}>{((forecast?.main.temp_max ?? 0) * 9/5 + 32).toFixed(1)}&deg;F</span>
                </div>
              </div>
          ))}
        </div>
      </div>
      <dialog id="weather_model" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-solid-black">
          <h3 className="font-teko font-bold text-lg text-pale-white">Hello!</h3>
          <p className="text-mid-gray">Enter the Name or City you want to search for!</p>
          <div className="modal-action">
            <form className="w-full" method="dialog" onSubmit={cityNameSubmit}>
              {/* if there is a button in form, it will close the modal */}
              <label htmlFor="city"></label>
              <input className="input text-matte-black" id="city" type="search" value={cityNameInput} onChange={cityNameSearch}/>
              <button className="btn ml-1.5">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
