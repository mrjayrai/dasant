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
import Footer from '../components/Footer';
import Nbspde from '../components/Nbspde';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <div className='block'>
            <div className='max-sm:fixed max-sm:z-10001'>
            <Home />
            </div>
            <div className='sm:hidden'>
            <Nbspde/>
            </div>
            <HeadLine title={'About Us'}/>
            <About1/>
            <Service />
            {/* <About/> */}
            <Teams/>
            <Contact/>
            <Client/>
            <Footer/>
            </div>
          </>
        } />
        
        <Route path="/service/:id" element={<ServiceDesc />} />
      </Routes>
    </Router>
  );
}

export default App;
