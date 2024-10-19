import React,{useEffect, useState} from 'react'
import axios from 'axios' ;


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const API_KEY = 'Ylq1W3LOFPuF7UCG2b64oj1CmAcQMoJM';
const Tag = () => {
  const [tag,setTag] = useState('car');
  const [gif,setGif] = useState('');


  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
     setGif(data.data.images.downsized_large.url);  // Set the gif URL to the state
    // setGif(imageSource);
  
  }
   

  useEffect(() => {
    fetchData();
  },[]) 

  function clickHandler() {
    fetchData();  // Fetch a new GIF on button click
  }

  function changeHandler(event){
    setTag(event.target.value)

  }
  

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold' >Random {tag} Gif</h1>
      <img src= {gif} width="100" />

      <input 
        className='w-10/12 bg-yellow-500 text-ly py-2 rounded-lg mb-[2px] text-center'
        onChange={changeHandler}
        value={tag}


      />
 

      <button onClick={clickHandler} className='bg-white rounded-lg w-10/12 font-bold py-2 mb-[20px]'>
       Generate
      </button>

      
    </div>
  );
}

export default Tag;