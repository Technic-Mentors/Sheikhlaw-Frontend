import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Practiceareas from './Components/Practiceareas';
import Morelegalservices from './Components/Morelegalservices';
import Faqs from './Components/Faqs';
import ScrollToTop from './Components/ScrollToTop';
import Topbar from './Components/Topbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Topbar /> 
      <Navbar />
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/areas-of-practice" element={<Practiceareas />} />
      <Route path="/more-legal-services" element={<Morelegalservices />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
