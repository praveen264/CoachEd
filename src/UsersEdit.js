import React, { useEffect, useState } from 'react'
import {Link, useParams ,useHistory} from 'react-router-dom';
import axios from 'axios'
const UsersEdit = () => {
  
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [contact,setContact]=useState("");
  const [userImage,setImage]=useState("");
 const [id,setId]=useState("");
 
 // const {id}=useParams();
 //if(id!=undefined) {alert(id);}
  const [listofdatas, listofdata] = useState([]);
  const [listofeditdatas, listofeditdata] = useState([]);

  const seteditid = (id) =>{
    setId(id);
    async function fetchData() {
      const request = await axios.get("http://localhost:3000/users/"+id);
    setAddress(request.data.address);
    setName(request.data.name);
    setEmail(request.data.email);
    setContact(request.data.contact);
    setImage(request.data.userImage.data);
    console.log(request);
  }
  fetchData();
 
  }
 
  const history=useHistory();
  useEffect(() => {
    async function fetchData() {
        const request = await axios.get("http://localhost:3000/users/");
        listofdata(request.data)
    }
    fetchData();
   
}, []);
 
  // useEffect(() => {

  //   async function fetchData() {
  //     const request = await axios.get("http://localhost:3000/users/"+editId);
  //     console.log('skjksdj'+request.data);
  //     listofdata(request.data);
  //     setName(listofdatas.name);
  //     setEmail(request.data.email);
  //     setAddress(request.data.address);
  //     setContact(request.data.contact);
  
  //   }
  //   fetchData();
   
  // }, []);
 
 //console.log("list of datas is "+listofdatas.email);
  const editask = async(event) => {
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
     await axios.patch("http://localhost:3000/users/",
     data
     );
 
     history.push('/users');
   }
 }

  return (
    <>


<div class="container">
      <table  class="table table-hover">
        <tr>
          <td colSpan="2">Name</td>
          <td>Address</td>
          <td>Contact</td>
          <td>Email</td>
          <td colSpan="2" >Edit/Delete</td>
        </tr>
      {
        listofdatas!=''?
        listofdatas.map((item)=>{
        return <tr >
           <td><img src={`http://localhost:3000/users/image/${item._id}`}></img></td>
          <td>{item.name}</td>
        <td>{item.address}</td>
          <td>{item.contact}</td>
        <td>{item.email}</td>
       
           <td >
         
           <button type="button"  class="btn btn-default" onClick={()=>seteditid(item._id)}  data-toggle="modal"  data-target="#modal-defaultt">
                  Launch Default Modal
                </button>
            
                {/* <UsersEdit 
                id={item._id}
                > 
           <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-defaultt">
                  Launch Default Modal
                </button>
                </UsersEdit> */}
       
        <Link to={'/todolistdelete/'+item._id}  className="btn btn-danger">Delete</Link>
        </td>
        </tr>
        })
        :
        <tr>
        <td colSpan="2">'No datas found'</td>
        </tr>
      }
      </table>
      {/* <UsersEdit 
              
              name={name}
              address={address}
              contact={contact}
              email={email}
              >

              </UsersEdit> */}
              <div className="modal fade" id="modal-defaultt">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Default Modal</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"  >×</span>
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
                  <input type="file"   onChange={event => setImage(event.target.files[0])}  className="form-control"  />
                </div>
              {/* /.card-body */}
              {/* <div>
                <button type="submit" onClick={addtask} className="btn btn-primary">Submit</button>
              </div> */}

              <div className="modal-footer justify-content-between">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary"  onClick={editask} data-dismiss="modal">Save changes</button>
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
   
      {/* <UsersEdit
  editId={editId}
  ></UsersEdit> */}
       </div>

<div className="modal fade" id="modal-defaultt">
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
        <button type="submit" className="btn btn-primary" onClick={editask} data-dismiss="modal">Save changes</button>
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
     </>
  )
}

export default UsersEdit
