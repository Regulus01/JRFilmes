import './App.css'
// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import About from './pages/About'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
