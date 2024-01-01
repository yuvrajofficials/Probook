import './AuthComp.css'
const ForgotPassword = () => {

    return (
      <>
<div className='Fcontainer'>

<div className='FcontainerItem1'>

<p className='LLogoOfFacebook'>Probook</p>
<form className='frm1'>   
        <input type='text' placeholder='Email address or phone number'/>
        <input type='text' placeholder='Password'/>
        <button type='submit'>Log In</button>

        <a href='#'>Forgetten Account</a>

        </form> 
</div>
<div className='FcontainerItem2'>

        <form><h5>Find Your Account</h5>
        <hr></hr>
            <p>Please enter your email address or mobile number to search for your account.</p>
            <input className='Finput' type='text' placeholder='Email or Mobile Number'/>
            <input className='Finput' type='text' placeholder='Answer to Security Question'/>
            <button type='button' className='Fcancelbtn'>Cancel</button>
            <button type='button' className='Fsearchbtn'>Search</button>

        </form>
</div>
</div>
      </>
      )
    }
  
    export default ForgotPassword;