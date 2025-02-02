import React, { useState } from "react";
import axios from 'axios';

function Signup() {
const [userInfo,setUserInfo] = useState({
    email:"",
    username:"",
    password:""
});

const [emailValidErr,setemailValidErr] = useState("");
const [usernameValidErr,setUSerNameValidErr] = useState("");
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
    setUSerNameValidErr("");
    setpasswordValidErr("");
    if(userInfo.email === ""){
      setemailValidErr("email is required");
      res=false
    }
    if(userInfo.password === ""){
      setUSerNameValidErr("userName is required");
     res=false;
    }
   if(userInfo.password === ""){
      setpasswordValidErr("password is required");
     res=false;
    }
    
    return res;
  }

async function handleSubmit(e){
e.preventDefault();
try{
  let isvalid = handleValidation();
  if(isvalid){
const {data} = await axios.post("http://localhost:3002/signup",
    {...userInfo},
    {withCredentials:true}
);
console.log(data);
const {message,success} = data;

// if(success){alert(message);}else{
// alert(message);}
if (success) {
    handleSuccess(message);
    // setTimeout(() => {
    //   navigate("/");
    // }, 1000);
  } else {
    handleError(message);
  }
  }
}catch(err){
    console.log(err);
}
// setUserInfo({...userInfo,email:"",username:"",password:""});
}

  return (
    <>
    <div className="row col-4 offset-4">
    <h2 className="mt-3">Signup on Zerodha</h2>
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
          required={true}
        ></input>
        {emailValidErr && <p style={{color:'red'}}>{emailValidErr}</p>}

        </div>

        <div>
        <label htmlFor="username" className="form-label mt-3">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Enter username"
          value={userInfo.username}
          onChange={handleInputChange}
          required
        ></input>
        {usernameValidErr && <p style={{color:'red'}}>{usernameValidErr}</p>}

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
          required
        ></input>
        {passwordValidErr && <p style={{color:'red'}}>{passwordValidErr}</p>}

        </div>
        <button className="btn btn-primary mt-3 mb-5" onClick={handleSubmit}>Signup</button>
      </form>
      </div>
    </>
  );
}

export default Signup;
