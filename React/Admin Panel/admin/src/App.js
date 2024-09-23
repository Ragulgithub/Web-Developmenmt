import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotpasswordIndex from './Auth/Forgotpassword';
import SignupIndex from './Auth/Signup';
import Login from './Auth/Login/login';
import Dashboard from './Auth/Dashboard/Dashboard';
import UserTable from './User/table';
import Adduser from './User/Adduser';
import TopNavbar from './Auth/Dashboard/TopNav';
import Edituser from './User/Edituser';

const token =localStorage.getItem('authToken');
console.log(token);


function App() {
  return (
   <>
   <BrowserRouter>
   <TopNavbar/>
   <Routes>

    {token ? 
    <>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/table" element={<UserTable/>}/>
    <Route path="/adduser" element={<Adduser/>}/>
    <Route path="/edit/:id" element={<Edituser/>}/>
    </> 
    :
    <>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={ <SignupIndex/>}/>
    <Route path="/forgotpassword" element={<ForgotpasswordIndex/>}/>
    </>
     }
   
   
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
