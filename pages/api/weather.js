// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async (req, res) => {
    const { lad, long,
      appid } = req.query;
  const params = {
    lon: long,
    lat: lad,
    appid,
    units: 'metric'
  }
  const weatherResp = await axios.get('https://api.openweathermap.org/data/2.5/onecall', {params});
  console.log(weatherResp.data.current);
  res.status(200).send(weatherResp.data.current);
  }
  