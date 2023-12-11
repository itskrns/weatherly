import React from "react";
import icon from './images/icon.png'
export default function TopBar() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center my-2">
        <p className="flex flex-row text-white font-medium uppercase text-3xl rounded-10 p-1">
            <img src={icon} className="w-8 h-8 mx-1 font-sans" alt=""/>
            Weatherly
        </p>
      </div>
      <hr className="py-3"></hr>
    </div>
  );
}
