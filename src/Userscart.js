import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Carts from './Carts';
const Userscart = () => {
  const history=useHistory();
    const [listofdatas, listofdata] = useState([]);
    const [listofcategorydatas, listofcategorydata] = useState([]);
    const [listofcartproducts, listofcartproduct] = useState([]);
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("https://ivneu.herokuapp.com/products/");
            listofdata(request.data)

            const request2 = await axios.get("https://ivneu.herokuapp.com/categorys/");
            listofcategorydata(request2.data)

         
          //   const request3=await axios.get("http://localhost:3000/products/category/"+category);
          //  if(request3.data!='')
          //  {
          //   listofdata(request3.data);
          //  }
         

        }
        fetchData();
    }, []);

     const searchproducts = async(event) =>{
       event.preventDefault();
      const request3=await axios.get("https://ivneu.herokuapp.com/products/category/"+category);
      if(request3.data!='')
      {
       listofdata(request3.data);
      }
     }

    const setproductid = (id) =>{
     // event.preventDefault();
        async function addtocart() {
            const request = await axios.post("https://ivneu.herokuapp.com/carts/",{
                userid: "admin",
                productId: id
              
            });
           
            
        }
        addtocart();

        async function viewcart() {
            const request = await axios.get("https://ivneu.herokuapp.com/carts/");
            listofcartproduct(request.data);
        }
        viewcart();
        history.push('/cart');
    }

    async function viewcart() {
        const request = await axios.get("https://ivneu.herokuapp.com/carts/");
        listofcartproduct(request.data);
    }
    viewcart();


console.log(listofdatas);
console.log('Cart details'+listofcartproducts);
  return (


    <>
   <div>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <a className="navbar-brand" href="#">Logo</a>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
      <form class="form-inline">
          <select class="form-control mr-sm-2" onChange={event => setCategory(event.target.value)}>
              <option value="">Please select a option</option>
              {
               
                listofcategorydatas.map((item)=>{
                return <option value={item._id}>{item.categoryname}</option>
                })
                

              }
          </select>
    <button class="btn btn-success" type="submit" onClick={searchproducts}>Search</button>
  </form>
      </li>
      
    </ul>
    
  </nav>

  <div className="container-fluid" style={{marginTop: 80}}>
  <div className="container col-sm-5">
  {
        listofdatas!=''?
        listofdatas.map((item)=>{
        return  <div className="card">
    
        <div className="card-body">
           Product: {item.description}
            <br></br>
           Rating: {item.rating}
            <br></br>
           Seller Name: {item.seller}
            </div> 
        <div className="card-footer">
            <p>Rs {item.price}</p>
           
            <a onClick={()=>setproductid(item._id)} className="btn btn-primary text-center">Add to cart</a>
        </div>
      </div>
        })
        :
        <p>No datas found</p>

       
    }
   <hr></hr>
   <h1>Your Shopping List Goes Here</h1>
   { 
      listofcartproducts.map((item)=>{
      return <p>
        <Carts
      id={item.productId}
      ></Carts>
     
       </p>
      })
     
   }
  
  </div>
<br></br>
  {/* <Carts></Carts> */}

  </div>

  
</div>

   </>
  )
}

export default Userscart
