import axios from 'axios';
import {APP_ID} from '../constants/Credentials';

export  default async function WeatherDataByCityCountryService(searchParams){
    let responseData = null;
    console.log(searchParams)
    let cityName = searchParams.cityName;
    let countryName = searchParams.countryName;
    let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+','+countryName+'&appid='+APP_ID;
    try{
        await axios.get(apiUrl)
        .then((response) => {
            responseData = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
    }catch(error){
        console.log('Error in WeatherDataByCityCountryService = '+error);
    }
    return responseData;
} 