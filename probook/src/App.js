import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Login from './Components/Authentification/LoginForm.jsx';
import CreateAccount from './Components/Authentification/CreateAccount.jsx';
import ForgotPassword from './Components/Authentification/ForgotPassword.jsx';

function App() {
  return (
    <body>

    <div className="App">
         <Routes>
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/create" element={<CreateAccount/>} />
        <Route path="/auth/forget" element={<ForgotPassword/>} />

      </Routes>
    </div>
    </body>
  );
}

export default App;
