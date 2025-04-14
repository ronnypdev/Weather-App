import React, { useState, useEffect } from "react";

import WeatherWidget from "./components/WeatherWidget"

function App() {
  const [userInput, setUserInput] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<weatherObj | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[] | null>(null);
  const [currentDay, setCurrentDay] = useState<number | string>("");
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const searchCityName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  }

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();

    const formattedDate = `${day} ${month}, ${year}`;
    setCurrentDay(formattedDate);
  }, []);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);

      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=194addcb775754ff4641c41474eb1fa7`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&cnt=7&appid=194addcb775754ff4641c41474eb1fa7`)
      ]);

      if (!weatherRes.ok || !forecastRes.ok) {
        throw new Error("Network response was not ok");
      }

      const [weatherDay, weatherForecast] = await Promise.all([
        weatherRes.json(),
        forecastRes.json(),
      ])

      setCurrentWeather(weatherDay);
      setForecast(weatherForecast.list);

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(`Connection failed! Try again! ${error.message}`);
        setError(error);
      } else {
        setError(new Error("Unknown error occurred"));
      }
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p className="text-red-600">This is loading...</p>
  }

  const submitWeatherInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchWeatherData();
  }

  if (error) {
    return <p className="text-red-600">Oh no! something went wrong: {error.message}</p>;
  }

  return (
    <>
      <main className="h-dvh flex justify-center items-center">
        <WeatherWidget
          currentWeather={currentWeather}
          weeklyForecast={forecast}
          currentDate={currentDay}
          cityNameInput={userInput}
          cityNameSearch={searchCityName}
          cityNameSubmit={submitWeatherInfo}
        />
      </main>
    </>
  )
}

export default App;
