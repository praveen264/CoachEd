import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Carts = ({id}) => {
    const [listofdatas, listofdata] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("https://ivneu.herokuapp.com/products/"+id);
            listofdata(request.data)
        }
        fetchData();
    }, []);
console.log(listofdatas);

  
   
  return (
    <>
  

<div className="card">
    
    <div className="card-body">
       Product: {listofdatas.description}
        <br></br>
       Rating: {listofdatas.rating}
        <br></br>
       Seller Name: {listofdatas.seller}
        </div> 
    <div className="card-footer">
        <p>Rs {listofdatas.price}</p>
       
       
    </div>
  </div>

    </>
  )
}

export default Carts
