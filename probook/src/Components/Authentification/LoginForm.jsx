import './AuthComp.css'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/auth.js';

const LoginForm = () => {

    return (
      <>
      <div className="LoginForm">
      <div className='Lcontainer'>

        <div className='LcontainerItems1'>
        <p className='LLogoOfFacebook'>Probook</p>
         <p className='LLogoPhrase'>Probook helps you connect and share with the people in your life</p>
        </div>


        <div className='LcontainerItems2'>
       <form className='LLoginFrm'>
        <input type='text'   placeholder='Email address or phone number'/>
        <input type='text' placeholder='Password'/>
        <button id='Lsubmit' type='submit'>Log In</button>
        <a href='#'>Forgetten Password</a>
        <button id='Lcreate' type='button'>Create new account</button>

       </form>
      
       {/* <p className='LtagLine'>Create a Page for a celebrity, brand or business</p> */}
      </div>
        
      </div>

      

      </div>
  
      </>
    )
  }

  export default LoginForm;