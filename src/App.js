//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.mjs';
import Heros from "./Components/Heros.mjs";
import Feature1 from './Components/Feature1.mjs';
import Footer from './Components/Footer.mjs';
import FAQ from './Components/FAQ.mjs';
function App() {
  return (
    <>
      <Navbar title="Weather Nav" />
      
     <Heros />
     <Feature1 />
     <FAQ />
     <Footer />
    </>
  );
}

export default App;