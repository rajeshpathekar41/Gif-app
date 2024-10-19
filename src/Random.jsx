import React,{useEffect, useState} from 'react'
import axios from 'axios' ;


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const API_KEY = 'Ylq1W3LOFPuF7UCG2b64oj1CmAcQMoJM';
const Random = () => {


  const [gif,setGif] = useState('');


  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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
  

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold' >A Random Gif</h1>
      <img src= {gif} width="100" />
     
      <button onClick={clickHandler} className='bg-white rounded-lg w-10/12 font-bold py-2 mb-[20px]'>
       Generate
      </button>

      
    </div>
  );
}

export default Random;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Random = () => {
//   // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;\
//   const API_KEY='Ylq1W3LOFPuF7UCG2b64oj1CmAcQMoJM'
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//   const [gif, setGif] = useState('');
//   // const 
//   async function fetchData() {
//     try {
//       // const output = await axios.get(url);
//       // const gifUrl = output.data.data.images.original.url; // Extracting GIF URL
//       // setGif(gifUrl); // Updating state with the new GIF
//       const res=await fetch(url);
//       const res2=await res.json();
//       setGif(res2.data.images.original.url);
//       console.log(res2)
//     } catch (error) {
//       console.error('Error fetching the GIF:', error);
//     }
//   }

//   function clickHandler() {
//     fetchData(); 
//   }

//   return (
//     <div className='w-1/2 h-[300px] bg-green-500 rounded-lg border border-black
//     flex flex-col items-center gap-y-5 mt-[15px]'>
//       <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
//       <img src={gif} alt="Random Gif" width="300" />
//       <button onClick={clickHandler} className='bg-white rounded-lg w-10/12 font-bold py-2'>
//         Generate
//       </button>
//      {/* <div>
//      {
//        gif && <img src={gif.data.images.url} style={{height:100,width:200,resize:'stretch'}}/>
//       }
//      </div> */}
//      <div>
//   {gif && (
//     <img 
//       src={gif} 
//       style={{ height: 50, width: 200, objectFit: 'cover',marginTop:100,marginBottom:10 }} 
//       alt="gif" 
//     />
//   )}
// </div>

//     </div>
//   );
// };

// export default Random;
