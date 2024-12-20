import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import HeroSection from './pages/HeroSection';
import Footer from './components/Footer';
import { Chatbot } from './components/Chatbot';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="contact">
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
