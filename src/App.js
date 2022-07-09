import Navbar from './components/Navbar';
import LandlingPage from './components/LandlingPage';
import Addusers from './components/Addusers';
import Allusers from './components/Allusers';
import Notfound from './components/Notfound';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Edituser from './components/Edituser';


function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandlingPage/>} exact/>
        <Route path="/allusers" element={<Allusers/>}/> 
        <Route path="/addusers" element={<Addusers/>}/> 
        <Route path="/edituser/:id" element={<Edituser/>}/> 
        <Route path="*" element={<Notfound/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
