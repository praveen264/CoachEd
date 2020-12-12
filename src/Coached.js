import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Coached = () => {
    const [listofdatas, listofdata] = useState([]);
    // useEffect(() => {
        async function fetchData() {
 const request = await axios.get("https://api.unsplash.com/search/photos?client_id=F1ZTwpC5Ls5uRxQNiJrTSj8XS7YuTceBWZ4qSJDivi8&query=cars");
            listofdata(request.data.results)
        }
       function settimer()
       {
        var timeleft = 10;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
          }
          document.getElementById("progressBar").innerHTML = timeleft;
          timeleft -= 1;
        }, 1000);
      setTimeout(() => {
        fetchData();
      }, 11000); 
    }
    // }, []);

  console.log(listofdatas);
  return (
    <>
      <h1>Coahed</h1>
      <button  onClick={()=>settimer()} class="btn btn-primary"id="progressBar">Click to see the images</button>
      
     
     
      {
          listofdatas.map((item)=>{
          return <p><img src={item.urls.regular} style={{height:120,width:120}}></img></p>
          })
      }
      
    </>
  )
}

export default Coached
