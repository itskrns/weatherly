import "./App.css";
import { useEffect, useState } from "react";
import InputBar from "./Components/InputBar";
import Temp from "./Components/Temp";
import TimeAndDate from "./Components/TimeAndDate";
import TopBar from "./Components/TopBar";
import {getWeatherData} from "./Components/Script.js";
import Cities from "./Components/Cities.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

export default function App() {
  const [query, setquery] = useState({ q: "Sirsa" });
  const [weather, setweather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const message = query.q ? query.q : 'curret location.'
      toast.info(`Fetching weather for ${message}`)
      await getWeatherData({ ...query }, setquery).then((data) => {
        toast.success(`Successfully fetched weather data for ${data.name? data.name: 'sirsa'}`)
        setweather(data)
      }).catch(error => {
        toast.error("City not found")
      });
    };
    fetchData();
  }, [query]); 

  return (
    <div className="mx-auto max-w-screen-md mt-1 mb-10 py-5 px-32 bg-gradient-to-br from-blue-700 to-green-700 h-fit shadow-xl shadow-gray-400 rounded">
      <TopBar/>
      <InputBar setquery={setquery} />

      {weather && (
        <div>
          <TimeAndDate weather={weather} />
          <Temp weather={weather} />
        </div>
      )}

      <Cities setquery={setquery} />

      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true}/>
    </div>
  );
}
