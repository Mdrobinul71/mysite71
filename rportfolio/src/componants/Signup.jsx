import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("invalid regester");
      console.log("invalid regester");
    } else {
      window.alert("regestion success");
      console.log("regestaion success");
      history.push("/login");
    }
  };

  return (
    <div>
      <div className="container w-80 p-4">
        <h1 className="text-center mt-5 ck">SIGNUP</h1>
        <hr className="w-25 mx-auto" />
        <form method="POST">
          <div className="form-group">
            <label for="name">YOUR NAME</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={handleInputs}
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label for="email">email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <label for="number">phone</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={user.phone}
              onChange={handleInputs}
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <label for="work">work</label>
            <input
              type="text"
              className="form-control"
              name="work"
              value={user.work}
              onChange={handleInputs}
              placeholder="work"
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

          <div className="form-group">
            <label for="cpassword">cpassword</label>
            <input
              type="password"
              className="form-control"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="cpassword"
            />
          </div>
          <div className="form-group form-button">
            <button
              type="submit"
              name="signup"
              value={user.signup}
              onClick={PostData}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
        <NavLink className="nav-link active" aria-current="page" to="/login">
      <p className="text-center">If alredy signup Login here!</p>
      </NavLink>
      </div>
    </div>
  );
};

export default Signup;
