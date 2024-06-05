import { createContext, useEffect, useState } from "react";

export const dataContext = createContext()

export const DataProvide = ({children}) =>{
    const[data, setData] = useState([])
    const[city, setCity] = useState('')

   /*  const getData = async (lat, lon) =>{
        const rs = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c739b37edac93e5b65459fa362b12a26`)
        const rsJson = await rs.json()
        setData(rsJson)
    } */
 /*    const cityName = async (lat, lon) =>{
        const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=57cc648f410e0c7a6314ac6aaa175edf`)
    } */


/*     useEffect(() =>{
        getData()
    },[])   */
    return(
        <dataContext.Provider value={{
            data
        }}>
            
            {children}
        </dataContext.Provider>
    )
}
