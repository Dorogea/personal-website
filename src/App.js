import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './componente/sidebar';
import MainContent from './componente/maincontent';

document.title = 'Dorogea Eduard';

function App() {

  useEffect(() => {
    const highlight = document.createElement('div');
    highlight.classList.add('highlight');
    document.body.appendChild(highlight);
  
    const moveHighlight = (e) => {
      highlight.style.left = `${e.pageX - highlight.offsetWidth / 2}px`;
      highlight.style.top = `${e.pageY - highlight.offsetHeight / 2}px`;
    };
  
    window.addEventListener('mousemove', moveHighlight);
  
    return () => {
      window.removeEventListener('mousemove', moveHighlight);
      document.body.removeChild(highlight);
    };
  }, []);
  

  return (
    <Router>
      <div class="container">
        <Sidebar />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;