import React from 'react'
import { DataProvide } from './hooks/DataProvide'
import { WeatherCard } from './components/WeatherCard'
import { ClimateTime } from './components/ClimateTime'

function App() {

  return (

    <DataProvide>
      <div className="min-h-screen flex flex-col md:flex-row bg-[#100E1D] text-white">
        <WeatherCard/>
        <ClimateTime/>
      </div>
    </DataProvide>


  )
}

export default App
