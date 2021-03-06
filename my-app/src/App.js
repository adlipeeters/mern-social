import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/"  element={<Home />}></Route>
      <Route exact path="/register"  element={<Register />}></Route>
      <Route exact path="/login"  element={<Login />}></Route>
      <Route exact path="/profile/:username"  element={<Profile />}></Route>
      </Routes>  
    </BrowserRouter>
      
  );
}

export default App;
