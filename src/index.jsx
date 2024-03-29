import {React, StrictMode} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {createRoot} from 'react-dom/client';
import './styles/index.scss'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header/Header'
import Error from './components/Error/Error'
import Footer from './components/Footer/Footer'
import Logements from './pages/Logements';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
 
root.render(
    <StrictMode>
        <Router>
          <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logements/:id" element={<Logements />} />
                <Route path="/error" element={<Error/>}/> 
                <Route path="*" element={<Navigate replace to="/error" />} />
            </Routes>
            <Footer/>
          </Router>
    </StrictMode>
)

