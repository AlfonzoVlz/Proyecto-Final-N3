import React, { useContext, useState } from 'react'
import { dataContext } from '../hooks/DataProvide'


export const ClimateTime = () => {
    const { data } = useContext(dataContext)
    const [unit, setUnit] = useState('C');

    
    const converTemperature = (temp) => {
        return unit === 'C' ? Math.round(temp - 273.15) : Math.round((temp - 273.15) * 9 / 5 + 32);
    };

    return (
        <div className="flex-grow flex justify-center ">
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

                    
                </div>
            </div>
    )
}