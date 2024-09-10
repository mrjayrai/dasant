import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Service from '../components/Service';
import ServiceDesc from '../components/ServiceDesc';
import About from '../components/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Service />
            <About/>
          </>
        } />
        
        <Route path="/service/:id" element={<ServiceDesc />} />
      </Routes>
    </Router>
  );
}

export default App;
