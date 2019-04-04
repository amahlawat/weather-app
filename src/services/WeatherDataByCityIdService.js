import axios from 'axios';
import {APP_ID} from '../constants/Credentials';

export  default async function WeatherDataByCityIdService(){
    let responseData = null;
    let apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=17&lon=78&appid='+APP_ID;
    try{
        await axios.get(apiUrl)
        .then((response) => {
            responseData = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
    }catch(error){
        console.log('Error in WeatherDataByCityIdService = '+error);
    }
    return responseData;
} 