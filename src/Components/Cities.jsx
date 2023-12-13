import React from 'react'
import place from './images/cities.png'

function Cities({ setquery }) {
    const cities = [
        {
            id: 1,
            title: 'Amritsar',
        },
        {
            id: 2,
            title: 'Chandigarh',
        },
        {
            id: 3,
            title: 'Delhi',
        },
        {
            id: 4,
            title: 'Hisar',
        },
    ]
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">
                    Cities Nearby
                </p>
            </div>
            <hr className="my-2" />
            <div className="flex flex-row items-center justify-around my-6">
                {cities.map((city) => (
                    <div
                        key={city.id}
                        className="flex flex-col items-center transition ease-out hover:scale-110 cursor-pointer"
                        onClick={() => setquery({ q: city.title })}
                    >
                        <img src={place} alt="" className="w-9 mx-3" />
                        <button
                            className="text-white text-lg font-medium"
                            key={city.id}
                        >
                            {city.title}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cities
