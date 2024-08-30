import "./App.css";
import  NavBar  from "./components/NavBar.jsx";
import Main from "./components/Main.jsx"
import Categorias from "./components/Categorias.jsx"
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";


function App() {
  return (
    <>
    <NavBar/>
    <Main/>
    <Categorias/>
    <ContactForm/>
    <Footer/>
    </>
  );
}

export default App;
