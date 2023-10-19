import "./App.css";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";
function App() {
  return (
    <>
     <NavBar/>
      <div className="h-screen">Main Content</div>
      <Footer/>
    </>
  );
}

export default App;
