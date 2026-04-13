import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import EShop from './pages/EShop'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="noise">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/eshop" element={<EShop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  )
}