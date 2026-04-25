import React, { Fragment } from 'react'
import Appheader from '../../sharepages/Appheader'
import Appsidebar from '../../sharepages/Appsidebar'
import { Outlet } from 'react-router-dom'

function Applandingpage() {
  return (
   <Fragment>
   <Appheader/>
   <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-2 border'>
      <Appsidebar/>

      </div>
      <div className='col-md-10 border'>
        <Outlet></Outlet>

      </div>
    </div>
   </div>
    

</Fragment>

  )
}

export default Applandingpage