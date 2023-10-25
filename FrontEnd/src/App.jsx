import "./App.css";
import Footer from "./components/Footer";
import Home from './pages/Home/Home'

import NavBar from "./components/NavBar";
import Services from "./pages/Services/Services";
import PetSitter from "./pages/PetSitter/PetSitter";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
     <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
