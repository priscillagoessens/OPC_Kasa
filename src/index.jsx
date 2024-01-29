import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About'
import Header from './components/Header/Header'
import Error from './components/Error'
import Footer from './components/Footer/Footer'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
          </Router>
    </React.StrictMode>,
document.getElementById('root')
)

