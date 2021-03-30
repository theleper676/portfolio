import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { GetWeather } from '../components/serverapis';




const Home = () => {

  
  const [ currentWeather, setWeather ] = useState(undefined);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=>
    {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      GetWeather(long,lat)
      .then(res => {
        setWeather(res);
      });
    }
    );
  },[]);

  const Api = () => {
    return (
      <div className={styles.main}>
        <div>
          <h2>API'S</h2>
          <h3>Here is an API that I have implimented to the site</h3></div>
          <p>The wather is {JSON.stringify(currentWeather)}</p>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.title}>My name Is Yoav Levin</h1>
        <h2>I am a developer and maker</h2>
      </div>
      <div>
        <Api />
      </div>
    </div>

  )
};

export default Home;
