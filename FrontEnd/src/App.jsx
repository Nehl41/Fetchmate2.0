import "./App.css";
import Footer from "./components/Footer";
import Home from './pages/Home/Home'

import NavBar from "./components/NavBar";
import Services from "./pages/Services/Services";
function App() {
  return (
    <>
     <NavBar/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;
