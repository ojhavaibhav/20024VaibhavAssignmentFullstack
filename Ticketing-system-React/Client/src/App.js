// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NoPageFoundComponent from './components/NoPageFoundComponent';
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';
import NavbarComponent from './components/NavbarComponent';
import ProfileComponent from './components/ProfileComponent';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<LoginComponent />} />
          <Route path="/signUp" element={<SignUpComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="*" element={<NoPageFoundComponent />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
