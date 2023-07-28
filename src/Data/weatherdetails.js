import axios from "axios";

const url="https://api.openweathermap.org/data/2.5/weather?";
const apiKey="e33c8bd77d139c634e6a6376eef509af";

 export const getWeatherData = async (cityname) => {
try{ 
    const {data} = await axios.get(url+`q=${cityname}&appid=${apiKey}`);
    return data;
} 
catch(error){
   throw(error)
}
}