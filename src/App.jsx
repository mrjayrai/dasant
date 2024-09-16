import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Service from '../components/Service';
import ServiceDesc from '../components/ServiceDesc';
import About from '../components/About';
import HeadLine from '../components/HeadLine';
import Teams from '../components/Teams';
import Contact from '../components/Contact';
import About1 from '../components/About1';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Service />
            <HeadLine title={'About Us'}/>
            {/* <About/> */}
            <About1/>
            <Teams/>
            <Contact/>
          </>
        } />
        
        <Route path="/service/:id" element={<ServiceDesc />} />
      </Routes>
    </Router>
  );
}

export default App;
