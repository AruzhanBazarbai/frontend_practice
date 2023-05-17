import axios from 'axios';

export const BASE_URL='https://api.themoviedb.org/3';
export const API_KEY='03418ae22c6ea93bf35ffcd15bf43e5d'
const options={
    params:{
        api_key:API_KEY,
        language:'en-US',
        page:1,
    },
    headers: {
        'Content-Type': 'application/json',
    },
}
export const fetchFromAPI=async (url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}