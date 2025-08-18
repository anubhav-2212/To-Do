import { Routes,Route } from "react-router-dom"

import Homepage from "./Pages/homepage/Homepage.jsx";
import Register from "./Pages/auth/Register/Register.jsx";
import Login from "./Pages/auth/loginpage/Login.jsx"
import Landing from "./Pages/landing/landing.jsx";
import toast, { Toaster } from 'react-hot-toast';
import Todo from "./Pages/todo/todo.jsx";



function App() {



  return (
   <div>
    <Toaster/>
      <Routes>
    <Route path="/" element={<Landing/>}></Route>
    <Route path="/Homepage" element={<Homepage/>}></Route>
    <Route path="/Register" element={<Register/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/todo" element={<Todo/>}></Route>
    
    

    </Routes>

   </div>
      
  )
}

export default App
