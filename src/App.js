import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Experience } from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
