import React from "react";
import axios from "axios"
import '../weatherInfos.css'

export const Weather = ({name}) => {
    const [weatherInfo, setWeatherInfo] = React.useState(null);
    const [status, setStatus] = React.useState("");
    const getWeather = () => {
        setStatus("LOADING");
        axios.get(`http://api.weatherapi.com/v1/current.json?key=b6182a124a1b43b89a3151355222402&q=${name}&aqi=no`)
        .then((res)=>{
            setWeatherInfo(res.data);
            setStatus("SUCCESS");
        })
        .catch(() => {
            alert(`${name} doesn't exist!`);
            setStatus("ERROR");
    });
        
    }
    React.useEffect(()=>{
        getWeather();
    },[name])

    return(
        <>
            {status === "LOADING" && "LOADING"}
            {status === "SUCCESS" && <div className="weatherInfos">
                
                <h2>City : {name}</h2>
                <h2>Temperatur : {weatherInfo && `${weatherInfo.current.temp_c}C`}</h2>
                <h2>Feels Like : {weatherInfo.current.feelslike_c}C</h2>
                <h2>Country : {weatherInfo.location.country}  </h2>
                <h2>Local Time : {weatherInfo.location.localtime}</h2>
                <img src={weatherInfo.current.condition.icon} alt="cityImg" />
                
                </div>  }
            {status === "ERROR" && "ERROR"}
        </>
    )
}