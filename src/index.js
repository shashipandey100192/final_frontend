import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLogin from './application/modules/users/uauth/UserLogin';
import UserRegistor from './application/modules/users/uauth/UserRegistor';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./application/assets/style.css";
import Userforgetpage from './application/modules/users/uauth/Userforgetpage';
import Resetuserinfo from './application/modules/users/uauth/Resetuserinfo';
import Applandingpage from './application/modules/dashboard/Applandingpage';
import Appmain from './application/modules/dashboard/Appmain';
import Userlist from './application/modules/dashboard/Userlist';
import Usereditpage from './application/modules/users/ucomponents/Usereditpage';
import ChatBot from 'react-chatbotify';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<ChatBot/>
        <Routes>
          <Route path='' element={<UserLogin/>}/>
          <Route path='registor' element={<UserRegistor/>}/>
          <Route path='forgetuser' element={<Userforgetpage/>}/>
          <Route path='forgetuser/reset/:id' element={<Resetuserinfo/>}/>
          <Route path='landing' element={<Applandingpage/>}>
              <Route path='' element={<Appmain/>}></Route>
              <Route path='userlist' element={<Userlist/>}></Route>
              <Route path='userlist/useredit/:id' element={<Usereditpage/>}></Route>
          
          </Route>
          

        </Routes>
    </BrowserRouter>


  </React.StrictMode>
);

