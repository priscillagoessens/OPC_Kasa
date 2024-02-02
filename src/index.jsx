import {React, StrictMode} from 'react'
import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {createRoot} from 'react-dom/client';
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header/Header'
import Error from './components/Error'
import Footer from './components/Footer/Footer'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
 
root.render(
    <StrictMode>
        <Router>
          <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
          </Router>
    </StrictMode>
)

