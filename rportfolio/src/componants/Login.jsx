import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function Login() {
  const history=useHistory();
  const [user,setUser]=useState({email:"",password:""});
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  
  const PostData = async (e) => {
    e.preventDefault();
    const { email,password,  } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid login");
      console.log("invalid login");
    } else {
      window.alert("login success");
      console.log("login success");
      history.push("/");
    }
  };


  return (
    <div className="container w-80 p-4">
    <h1 className="text-center mt-5 ck">LOGIN</h1>
    <hr className="w-25 mx-auto" />
    <form method="POST">
      <div className="form-group">
        <label for="email">email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={user.value}
          onChange={handleInputs}
          placeholder="email"
        />
      </div>

      <div className="form-group">
        <label for="password">password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={user.password}
          onChange={handleInputs}
          placeholder="password"
        />
      </div>

      <button
        type="submit"
        name="signup"
       value={user.login}
        onClick={PostData}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
    <NavLink className="nav-link active" aria-current="page" to="/signup">
    <p className="text-center">Before login Signup pls!</p>
    </NavLink>
  </div>
  )
}


export default Login