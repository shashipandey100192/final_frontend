import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Userlist() {
    
    const [users,updateuseer]=useState([]);

    const alluser = async ()=>{
        axios.get("http://localhost:9700/alldata",{
            withCredentials:true
        }).then((d)=>{
            console.log(d.data);
            updateuseer(d.data.userlist)
        })
    }

    useEffect(()=>{
        alluser()
    },[])

const deleteuser = (myid)=>
{
    console.log(myid);
    axios.delete(`http://localhost:9700/userdelete/${myid}`).then((res)=>{
        console.log(res);
        alluser();
    })
}


    

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 g-0'>
                    <div className='card p-3 mt-3 bg-light'>
                    <h1>user list page</h1>
                    <table class="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">Sno</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Roll</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Father's Name</th>
                                <th scope="col">Working</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((d)=>{
                                return(
                                    <tr>
                                <th scope="row">1</th>
                                <td>{d.sname}</td>
                                <td>{d.email}</td>
                                <td>{d.mobile}</td>
                                <td>{d.roll}</td>
                                <td>{d.dob}</td>
                                <td>{d.gender}</td>
                                <td>{d.fathername}</td>
                                <td>{d.working}</td>
                                <td>
                                    <span class=" btn badge text-bg-danger" onClick={()=>deleteuser(d._id)}>Del</span>
                                    <Link to={"useredit/"+d._id} class="btn badge text-bg-info">Edit</Link>
                                    <span class="btn badge text-bg-warning">View</span>


                                </td>
                            </tr>
                                )
                            })}
                            
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div className='row'>
                
            </div>
        </div>
    )
}

export default Userlist