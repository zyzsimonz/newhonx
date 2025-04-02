import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </nav>
    </Router>
  );
}

export default App
