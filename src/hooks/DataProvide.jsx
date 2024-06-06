import { createContext, useEffect, useState } from "react";

export const dataContext = createContext()

export const DataProvide = ({ children }) => {
    const [data, setData] = useState([])
    const [city, setCity] = useState('')
    const [lotation, setLocation] = useState([])

    //Se obtine los datos del clima por longitud y latitud 
    const getData = async (lat, lon) => {
        try {
            const rs = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9174ddaf8fa6b3aa86b127d7c27fd64d`)
            const rsJson = await rs.json()
            setData(rsJson)
        } catch (error) {
            console.error('Error fetching weather data:', error)
        }
    }  
    
    //Se obtiene los datos del clima por el nombre de la ciudad
    const getDataByCty = async (cityName) => {
        try {
        const rs = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=9174ddaf8fa6b3aa86b127d7c27fd64d`)
        const rsJson = await rs.json()
        console.log(rsJson)
        setData(rsJson)            
        } catch (error) {
            console.error('Error fetching city name weather:', error)
        }

    }

    //Se obtiene los datos por el nombre de la ciudad 
    const getCityName = async (lat, lon) => {
        try {
        const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9174ddaf8fa6b3aa86b127d7c27fd64d`)
        const rsJson = await rs.json()
        setCity(rsJson.name)            
        } catch (error) {
            console.error('Error fetching city name:', error)
        }

    } 

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    })
                }
            )

        }
    }

    useEffect(() => {
        getLocation()
    }, [])

   useEffect(() => {
        if (lotation) {
            getData('44.34', '10.99');
            getCityName('44.34', '10.99')
        }
    }, [])  
    return (
        <dataContext.Provider value={{
            data,
            city,
            getLocation,
            setLocation,
            getDataByCty
        }}>
            {children}
        </dataContext.Provider>
    )
}
