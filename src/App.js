
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Header from './components/Home/MainHeader/Header';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/ContactForm/ContactForm';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Projects/>
      <Contact></Contact>
     
    </div>
  );
}

export default App;
