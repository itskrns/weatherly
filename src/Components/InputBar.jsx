import React from "react";
import { useState } from 'react'
import location from "./images/location.png";
import { toast } from "react-toastify";

function InputBar({setquery}) {
  const [city, setCity] = useState("")

  function handleSearch(){
    if(city !== '') setquery({q:city})
  }

 function handleLocation(){
  if(navigator.geolocation){
    toast.info('Fetching user\'s current location')
    navigator.geolocation.getCurrentPosition((pos) => {
      toast.success(`Successfully fetched location`)
      let lat = pos.coords.latitude
      let lon = pos.coords.longitude

      setquery({lat, lon})
    })
  }
 }
  
  return (
    <>
      <div className="flex flex-row justify-center my-4">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="search for city"
            className="text-xl font-light px-4 py-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded"
          />
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleSearch}>Search</button>
          <img src={location} alt="" className="w-10 mx-3 transition ease-out hover:scale-125 cursor-pointer" onClick={handleLocation}/>
        </div>
      </div>
    </>
  );
}

export default InputBar;
