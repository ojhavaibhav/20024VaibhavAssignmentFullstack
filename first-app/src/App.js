import './App.css';
import FirstComp from './components/firstComp';
import SecondComp from './components/secondComp';
import SecondChildComp from './components/secondChild';
import ThirdChildComp from './components/thirdChild';
import NoPage from './components/noPage';
import HomeComp from './components/homeComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<HomeComp/>}></Route>
          <Route path = "/firstcomp" element={<FirstComp/>}></Route>
          <Route path = "/secondcomp" element={<SecondComp/>}></Route>
          <Route path = "/secondchildcomp" element={<SecondChildComp/>}></Route>
          <Route path = "/thirdchildcomp" element={<ThirdChildComp/>}></Route>
          <Route path = "*" element={<NoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
