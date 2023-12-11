import React from 'react'
import { cleanDate } from "./Script";


function TimeAndDate({weather:{dt,name, country}}) {
  return (
    <div>
        <div className='flex items-center justify-center my-4'>
            <p className='text-white text-xl font-extralight'>{cleanDate(dt)}</p>
        </div>
        <div className='flex items-center justify-center my-2'>
            <p className='text-white text-3xl font-medium'>{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default TimeAndDate