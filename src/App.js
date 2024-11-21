import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: '20px' }}>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Use 'element' instead of children */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
