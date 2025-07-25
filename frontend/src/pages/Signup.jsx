import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const Signup = () => {
  document.getElementsByTagName("title")[0].text = "Signup";

  
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);


  const [credentials, setcredentials] = useState({
    fullname: "",
    email: "",
    roll_no: "",
    standard: "",
    section: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };


  const handleDropdown = (value) => {
    const roll_no = document.getElementById("roll_no");
    if (value === "student") {
      roll_no.style.display = "block";
    }
    else if (value === "teacher") {
      roll_no.style.display = "none";
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const role = document.querySelector(".dropdown>span").getAttribute("value");
    if (role === "student") {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/createStudent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: credentials.fullname,
          email: credentials.email,
          roll_no: credentials.roll_no,
          standard: credentials.standard,
          section: credentials.section,
          address: credentials.address,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        setErrors(json);
      }
      if (json.success) {
        navigate("/login");
      }

      // const json = await response.json();
    }
    else if(role === "teacher") {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/createteacher`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: credentials.fullname,
          email: credentials.email,
          roll_no: credentials.roll_no,
          standard: credentials.standard,
          section: credentials.section,
          address: credentials.address,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);

      if (!json.success) {
        setErrors(json);
      }
      if (json.success) {
        navigate("/login");
      }
    }

    else{
      setErrors("Select Role");
      navigate("/login")
    }
  };

  return (
    <main className="mainSignup">
      <div className="">
        <form onSubmit={handleSubmit} className="signupForm">

          <Dropdown onChange={handleDropdown} />
          <div className="errorBox">
            {errors?errors:""}
          </div>
          <div className="creds">
            <input
              className=" "
              type="text"
              placeholder="Full Name"
              name="fullname"
              id="fullname"
              value={credentials.fullname}
              onChange={handleChange}
            />
            <input
              className=" "
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
            />
            <input
              className="Roll Number"
              type="text"
              name="roll_no"
              id="roll_no"
              placeholder="Roll Number"
              value={credentials.roll_no}
              onChange={handleChange}
            />
            <input
              className=""
              type="text"
              name="standard"
              id="standard"
              placeholder="Standard"
              value={credentials.standard}
              onChange={handleChange}
            />
            <input
              className="Section"
              type="text"
              name="section"
              id="section"
              placeholder="Section"
              value={credentials.section}
              onChange={handleChange}
            />
            <input
              className=" "
              type="textbox"
              placeholder="Address"
              name="address"
              id="address"
              value={credentials.address}
              onChange={handleChange}
            />
            <input
              className=" "
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>


          <div className="actionBtn">
            <button type="submit" className="">
              Sign up
            </button>
            <Link to={"/login"} className="alreadyUser">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
