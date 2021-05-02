
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Header from './components/Home/MainHeader/Header';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/ContactForm/ContactForm';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Projects/>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default App;
