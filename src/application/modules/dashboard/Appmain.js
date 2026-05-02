import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../../service/Apiservice';


function Appmain() {
    const mynav = useNavigate();

    const [users,updateuseer]=useState([]);

    const alluser = async ()=>{
        axios.get(`${baseurl}/alldata`,{
            withCredentials:true
        }).then((d)=>{
            console.log(d.data);
            updateuseer(d.data.userlist)
           
        })
    }

    useEffect(()=>{
        alluser()
    },[])


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2 mt-3'>
                    <div class="card bg-info p-1 shadow">
                        <div class="card-body">
                           <h5>Total Users</h5>
                           <h1>{users.length}</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-2 mt-3'>
                    <div class="card bg-light p-1 shadow">
                        <div class="card-body">
                           <h5>Job</h5>
                           <h1>5142</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-2 mt-3'>
                    <div class="card bg-light p-1 shadow">
                        <div class="card-body">
                           <h5>Employee</h5>
                           <h1>5142</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-2 mt-3'>
                    <div class="card bg-light p-1 shadow">
                        <div class="card-body">
                           <h5>Unemployee</h5>
                           <h1>5142</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-2 mt-3'>
                    <div class="card bg-light p-1 shadow">
                        <div class="card-body">
                           <h5>Male</h5>
                           <h1>5142</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-2 mt-3'>
                    <div class="card bg-light p-1 shadow">
                        <div class="card-body">
                           <h5>Female</h5>
                           <h1>5142</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 mt-3'>
                    <div class="card bg-light p-1 shadow">
                        <div class="card-body">
                           <h5>Female</h5>
                           <h1>5142</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-3'>
                    <div class="card bg-light p-1 shadow">
                        <div class="card-body">
                           <h5>Happy birthday</h5>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appmain