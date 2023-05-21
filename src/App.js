import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import FoodList from './Components/Pages/FoodList/FoodList';
import Landing from './Components/Pages/Landing/Landing';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stock from './Components/Pages/Stock/Stock';
import Login from './Components/Login/Login';
function App() {
  const [isLoggedin, setLoggedin] = useState(true);
      useEffect(() =>{
        if(localStorage.getItem("token") !=null) {
          setLoggedin(true);
        }
      }, [])
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      {isLoggedin && ( 
      
      <Route path="/" element={<Landing />}>
      <Route path="/foodlist" element={<FoodList/>}></Route>
      <Route path="/stock" element={<Stock/>}></Route>
     
      </Route>
       
      
      )}
      {!isLoggedin && <Login/>}
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
