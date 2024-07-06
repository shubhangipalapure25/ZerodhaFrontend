import React, { useState } from "react";
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
// import UserAuth from "../UserAuth";


function Login() {

const navigate = useNavigate();
const [userInfo,setUserInfo] = useState({
    email:"",
    password:""
});
const [emailValidErr,setemailValidErr] = useState("");
const [passwordValidErr,setpasswordValidErr] = useState("");


const[errorMsg,setErrorMsg] =useState("");
const[successMsg,setSuccessMsg] = useState("");

function handleInputChange(e){
setErrorMsg("");
setSuccessMsg("");
const {name,value} = e.target;
setUserInfo({
    ...userInfo,
    [name]:value
});
}
const handleError = (msg) =>{
    setErrorMsg(msg);
}
  const handleSuccess = (msg) =>{
    setSuccessMsg(msg);
  }
  
function handleValidation(){
  let res =true;
  setemailValidErr("");
  setpasswordValidErr("");
  if(userInfo.email === ""){
    setemailValidErr("email required");
    res=false
  }
 if(userInfo.password === ""){
    setpasswordValidErr("password required");
   res=false;
  }
  
  return res;
}
async function handleSubmit(e){
e.preventDefault();
console.log(userInfo);
let isvalid = handleValidation();
try{
  if(isvalid){
const {data} = await axios.post("http://localhost:3002/login",
    {...userInfo},
    {withCredentials:true}
);
console.log(data);
const {message,success} = data;

// if(success){alert(message);}else{
// alert(message);}
if (success) {
    handleSuccess(message);
     window.location.href = 'http://localhost:3001/';
  
 } else {
    handleError(message);
  }
}
}catch(err){
    console.log(err);
}
// setUserInfo({...userInfo,email:"",password:""});
}

  return (
    <>
    <div className="row col-4 offset-4 mb-5">
    <h2 className="mt-3">Login on Zerodha</h2>
      <form>
        {errorMsg && <h4 style={{color:'red'}}>{errorMsg}</h4>}
        {successMsg && <h4 style={{color:'green'}}>{successMsg}</h4>}
        <div>
        <label htmlFor="email" className="form-label mt-3">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter email"
          value={userInfo.email}
          onChange={handleInputChange}
          required
        ></input>
        {emailValidErr && <p style={{color:'red'}}>{emailValidErr}</p>}
        </div>

        <div>
        <label htmlFor="password" className="form-label mt-3">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter password"
          value={userInfo.password}
          onChange={handleInputChange}
        ></input>
        {passwordValidErr && <p style={{color:'red'}}>{passwordValidErr}</p>}
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>Login</button>
        <br/>
        <span>Don't have Account? <Link to={'/Signup'}>Signup</Link></span>
      </form>
      </div>
    </>
  );
}

export default Login;
