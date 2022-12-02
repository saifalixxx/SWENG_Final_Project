import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './pages/about';
import Main from './pages/main';
import TopUser from './pages/topUser';

  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/main' element={<Main/>} />
        <Route path='/topUser' element={<TopUser/>} />
      
    </Routes>
    </Router>
);
}
  
export default App;