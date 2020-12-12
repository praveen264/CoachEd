import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link ,useHistory,useParams} from 'react-router-dom';
 import './Users.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import UsersEdit from './UsersEdit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const Users = () => {
   // const [task,setTask]=useState("");
   const [idd,setId]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [contact,setContact]=useState("");
    const [userImage,setImage]=useState("");
   const history=useHistory();
   
    const {id}=useParams();
   //if(id!=undefined) {alert(id);}
    const [listofdatas, listofdata] = useState([]);
    const [listofeditdatas, listofeditdata] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
          const request = await axios.get("http://localhost:3000/users/");
          listofdata(request.data)
      }
      fetchData();
  }, []);

  
//console.log('kjsdksjd'+listofeditdatas                                                                                                                                                      );
const addtask = async(event) => {
   let data=new FormData();
   data.append("name",name);
   data.append("email",email);
   data.append("address",address);
   data.append("contact",contact);
   data.append("userImage",userImage);
  event.preventDefault();
  if (name == '' ) {
    console.log("please fill all posts");
  }
  else {
    const request = await axios.post("http://localhost:3000/users/",
    data
    );
   
    
      history.push('/users');
    

  //   async function fetchData() {
  //     const request2 = await axios.get("http://localhost:3000/users/");
  //     listofdata(request2.data)
  // }
  // fetchData();
  }
}

  

 // console.log(listofdatas);
  return (
    <>
    
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-default">
                  Launch Default Modal
                </button>
        
        
     
    
          
     

      
        <div className="modal fade" id="modal-default">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Default Modal</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" >×</span>
        </button>
      </div>
      <div className="modal-body">
       
      <form encType="multipart/form-data">
      <div className="form-group">
       
    <label>Full Name </label>
                  <input type="text"  value={name}   onChange={event => setName(event.target.value)}  className="form-control" id="exampleInputEmail1" placeholder="Enter Task" />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input type="email"  value={email}   onChange={event => setEmail(event.target.value)}  className="form-control" id="exampleInputEmail1" placeholder="Enter Task" />
                </div>
                
                <div className="form-group">
                  <label>Address</label>
                  <input type="text"  value={address}   onChange={event => setAddress(event.target.value)}  className="form-control" id="exampleInputEmail1" placeholder="Enter Task" />
                </div>

                <div className="form-group">
                  <label>Contact</label>
                  <input type="text"  value={contact}   onChange={event => setContact(event.target.value)}  className="form-control" id="exampleInputEmail1" placeholder="Enter Task" />
                </div>

                <div className="form-group">
                  <label>File</label>
                  <input type="file"     onChange={event => setImage(event.target.files[0])}  className="form-control"  />
                </div>
              {/* /.card-body */}
              {/* <div>
                <button type="submit" onClick={addtask} className="btn btn-primary">Submit</button>
              </div> */}

              <div className="modal-footer justify-content-between">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" onClick={addtask} data-dismiss="modal">Save changes</button>
      </div>
      </form>
    
      </div>
      {/* <div className="modal-footer justify-content-between">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"  data-dismiss="modal">Save changes</button>
      </div> */}
    </div>
    {/* /.modal-content */}
  </div>
  {/* /.modal-dialog */}
</div>
 {
   listofdatas!=''?
   <UsersEdit></UsersEdit>
 :
<UsersEdit></UsersEdit>
 }    

       {/* /.content */}
    
     
    </>
  )
}

export default Users
