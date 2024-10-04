import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "font-awesome/css/font-awesome.min.css";
import 'animate.css';
import './App.css';
import Leyout from './shared/leyout';
import Home from './components/home';
import Portfolio from './components/portfolio';
import About from './components/about-us';
import Resume from './components/resume';
import Contact from './components/contact-us';
import Loader from './shared/loader/loader';

function AppContent() {
  const [loading, setLoading] = useState(false); // State to track loading status
  const location = useLocation(); // Track the route changes

  // useEffect to handle loader on route changes
  useEffect(() => {
    setLoading(true); // Show loader when route changes

    // Simulate component loading
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 1 second
    }, 1400); // Adjust the delay as per the actual loading time

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, [location.pathname]); // Runs when the path changes


  useEffect(() => {
    const downloadFile = () => {
      const link = document.createElement('a');
      link.href = '/mayurTemp.pdf'; // relative path to your PDF in the public folder
      link.download = 'mayurTemp.pdf'; // Optional: specify download file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up after download
    };

    downloadFile();
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      {loading && <Loader />}
      <Leyout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Leyout>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
