import NavBar from './component/NavBar'
import About from './pages/about/About'
import Contact from './pages/Contact'
import Home from './pages/home/Home'
import NotFound from './pages/404'
import Products from './pages/Product/Products'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'


export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
