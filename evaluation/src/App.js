import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import {Home} from './Components/Home'
import {Login} from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
// import EmpInput from './Components/EmpInput';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>         
      <Route path="/login" element={<Login />} />
            <Route path= "/" element={<Home/>}></Route>    
            <Route path= "/dashboard" element={<Dashboard/>}></Route>
            <Route path="/dashboard/:id" element={< Dashboard/>} />
            <Route path= "/Register" element={<Register/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
