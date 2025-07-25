import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import AuthContext from "../providers/AuthContext";

const Login = (props) => {
  document.getElementsByTagName("title")[0].text = "Login";

  let navigate = useNavigate();
  const {
    setUser,
    role,
    setRole,
    isLoading,
    authenticated,
    setAuthenticated,
  } = useContext(AuthContext);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      if (authenticated) {
        navigate(`/${role}/dashboard`);
      }
    }
  }, [isLoading, authenticated, navigate, role]);

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Selecting Role
    const role = document.querySelector(".dropdown>span").getAttribute("value");
    if (role === "teacher") {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/loginTeacher`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();

      if (!json.success) {
        setErrors(json.msg);
      }

      if (json.success) {
        localStorage.setItem("token", "BearerTeacher " + json.token);

        setUser(json.user);
        setRole("teacher");
        setAuthenticated(true);
        navigate("/teacher/dashboard");
      }
    } else if (role === "student") {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/loginStudent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();

      if (!json.success) {
        setErrors(json.msg);
      }
      if (json.success) {
        localStorage.setItem("token", "BearerStudent " + json.token);
        setUser(json.user);
        setRole("student");
        setAuthenticated(true);
        navigate("/student/dashboard");
      }
    } else {
      setErrors("Select Role");
      navigate("/login");
    }
  };
  
  return (
    <main className="formMain">
      <div className=" ">
        <form onSubmit={handleLogin} className="form">
          {/* dropdown menu =============================*/}
          <Dropdown />
          {/* ======================================== */}

          <div className="errorBox">{errors ? errors : ""}</div>

          <div className="creds">
            <input
              className=" "
              type="text"
              placeholder="Email or Username"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
            />
            <input
              className=""
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
              Login
            </button>
            <Link to={"/signup"}>New User?</Link>
          </div>
        </form>
      </div>
    </main>
  );
};
export default Login;
