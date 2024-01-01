import "./AuthComp.css";
import LoginForm from "./LoginForm";

const CreateAccount = () => {
  return (
    <>
    {/* <LoginForm className="CFormBack"/> */}
    <div className="Ccontainer">
      <div className="CcontainerItems">
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi CcloseImg bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
        <h5>Sign Up</h5>
        <h6>It's Quick and Easy</h6>
        <hr></hr>
        <form className="Cform">
        <input type="text" placeholder="First Name" className="CfullInput1"/>
        <input type="text" placeholder="Last Name" className="CfullInput1" />
        <input type="email"  placeholder="Email" className="CfullInput2"/>
        <input type="number"   placeholder="Phone Number" className="CfullInput2"/>
        <input  type="password" placeholder="Create Password" className="CfullInput2" />
        <input type="password"  placeholder="Confirm Password" className="CfullInput2"/>
        <p for="Createdob" className="Cdob" >Date of Birth :</p>

        <input id="Createdob"  type="date" />
<br/>
        <p className="Cgender">Gender : </p>
        <div className="CinputContainer">

        <label for="CreateGenderM">Male</label>
        <input
          id="CreateGenderM"
          name="CreateGender"
          value="Male"
          type="radio"
        />
        <label for="CreateGenderW">Female</label>
        <input
          id="CreateGenderW"
          name="CreateGender"
          value="Female"
          type="radio"
        />
        <label for="CreateGenderO">Other</label>
        <input
          id="CreateGenderO"
          name="CreateGender"
          value="Other"
          type="radio"
        />
      </div>

        <button type="submit">Sign Up</button>
      </form>
      </div>
      </div>
    </>
  );
};

export default CreateAccount;
