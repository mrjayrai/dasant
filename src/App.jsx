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
import Client from '../components/Client';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <HeadLine title={'About Us'}/>
            <About1/>
            <Service />
            {/* <About/> */}
            <Teams/>
            <Contact/>
            <Client/>
          </>
        } />
        
        <Route path="/service/:id" element={<ServiceDesc />} />
      </Routes>
    </Router>
  );
}

export default App;
