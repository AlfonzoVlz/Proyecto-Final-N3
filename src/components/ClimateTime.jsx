import React, { useContext, useState } from 'react'
import { dataContext } from '../hooks/DataProvide'
import { TimeAnalisys } from './TimeAnalisys';


export const ClimateTime = () => {
    const { data } = useContext(dataContext);
    const [unit, setUnit] = useState('C');

    if (!data || !data.list) return <div>No weather data available</div>;
    const foreCasts = data.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));

    const converTemperature = (temp) => {
        return unit === 'C' ? Math.round(temp - 273.15) : Math.round((temp - 273.15) * 9 / 5 + 32);
    };

    return (
        <div className="flex-grow flex justify-center mb-16 ">
            <div className="w-full max-w-6xl mx-auto relative" style={{ top: '40px' }}>
                <div className="flex justify-end mb-4 space-x-4">
                    <button
                        className={`p-2 rounded-full ${unit === 'C' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                        style={{ width: '40px', height: '40px' }}
                        onClick={() => setUnit('C')}>°C</button>
                    <button
                        className={`p-2 rounded-full ${unit === 'F' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}
                        style={{ width: '40px', height: '40px' }}
                        onClick={() => setUnit('F')}>°F</button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {foreCasts.slice(0, 5).map((forecast, index) => (
                        <div key={index} className="bg-[#1E213A] p-3 rounded-lg text-center w-full h-44">
                            <p className="text-xs mb-1 py-4">
                                {new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                            </p>
                            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="weather icon" className="mx-auto w-10 h-10" />
                            <p className="text-xs py-2">
                                <span className="font-semibold">{converTemperature(forecast.main.temp_max)}°{unit} Mx -</span> {converTemperature(forecast.main.temp_min)}°{unit} Mn
                            </p>
                        </div>
                    ))}
                </div>
                <TimeAnalisys/>
            </div>
        </div>
    )
}