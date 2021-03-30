import axios from 'axios';


export const GetWeather =  async (long, lad) => {
    const params = {
    lad,
    long,
    appid: 'f8968fe82483bd8d5fb6c452df075108'
  }
    const { data } = await axios.get('/api/weather', {
        params
    });
    return data;
}