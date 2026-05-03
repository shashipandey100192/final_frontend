
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from '../../../service/Apiservice';


const UserLogin = () => {
  const mynav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    await axios.post(`${baseurl}/userlogin`, formData, {
      withCredentials: true
    }).then((d) => {
      console.log(d);
      if (d.data.status === 420) {
        alert(d.data.msg);
      }
      if (d.data.status === 390) {
        alert(d.data.msg);
      }

      if (d.data.status === 380) {
        alert(d.data.msg);
        mynav("landing")
      }

      if (d.data.status === 270) {
        alert(d.data.msg);
      }

    })
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">Login</h3>

        <form >
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Remember me */}
          <div className="mb-3 form-check">
            <Link to="forgetuser">Forget email and password ?</Link>

          </div>

          {/* Button */}
          <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>
            Login
          </button>
        </form>

        <p className="text-center mt-3">
          Don't have an account? <Link to="registor">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;