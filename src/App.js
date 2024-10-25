import './App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Introduction from './Components/Introduction/Introduction';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Introduction/>

      <Navbar/>

      <Experience/>

      <Contact/>

      <Footer/>
    </div>
  );
}

export default App;
