import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

function Userforgetpage() {
  const mynav = useNavigate();
  const [formData, setFormData] = useState({
    dob: "",
    sname: "",
    mobile: ""
  });

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
  };



  const validuserinfo = ()=>
  {
    if (formData.sname === "") {
      alert("sname is required");
    }
    else if (formData.mobile === "") {
      alert("mobile is required");
    }
    else if (formData.dob === "") {
      alert("dob is required");
    }
    else {
        axios.post("http://localhost:9700/forgetuserinfo",formData).then((d)=>{
          console.log(d);
          if(d.data.status===370)
          {
            alert(d.data.msg);
          }
          if(d.data.status===200)
          {
            mynav(`/forgetuser/reset/`+d.data.data._id);
          }
        })

    }

  }


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">Forget page</h3>

        <form >
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">DOB</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>


          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              name="sname"
              placeholder="enter user name"
              value={formData.sname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              placeholder="enter mobile no"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <button type="button" className="btn btn-primary w-100" onClick={validuserinfo}>
            Next
          </button>
        </form>


      </div>
    </div>
  )
}

export default Userforgetpage