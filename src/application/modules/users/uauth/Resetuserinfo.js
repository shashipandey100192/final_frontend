import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Resetuserinfo() {
    const mynav = useParams();
    console.log(mynav);


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


  const updateinfopage = ()=>{
        axios.patch("",mynav,formData).then((d)=>{
            console.log(d);

        })


  } 




  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">Reset password and email</h3>

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
          <button type="button" className="btn btn-primary w-100" onClick={updateinfopage}>
            Update
          </button>
        </form>

        
      </div>
    </div>
  )
}

export default Resetuserinfo