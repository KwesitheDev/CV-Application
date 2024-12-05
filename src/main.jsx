import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import Header from './Header';
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Header /> 
      <div className="container2">
        <App />
      </div>
      <Footer />
    </div>
  </StrictMode>,
);
