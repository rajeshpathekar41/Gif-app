import React,{useEffect, useState} from 'react'
import axios from 'axios' ;

const API_KEY = 'Ylq1W3LOFPuF7UCG2b64oj1CmAcQMoJM';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;



const Usegif = (tag) => {

// const API_KEY = 'Ylq1W3LOFPuF7UCG2b64oj1CmAcQMoJM';
  // const [tag,setTag] = useState('car');
  const [gif,setGif] = useState('');
  const [loading, setLoading] = useState('false')


  async function fetchData() {
    setLoading(true);
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    setGif(data.data.images.downsized_large.url);  // Set the gif URL to the state
    setLoading(false)
  
  }
   

  useEffect(() => {
    fetchData();
  },[]) 

 
return {gif}; 

}

export default Usegif;