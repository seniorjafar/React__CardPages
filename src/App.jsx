import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import Navbar from './components/navbar/Navbar'
import PlantCare from './pages/plantCare/PlantCare'
import Blog from './pages/blogs/Blog'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='plantCare' element={<PlantCare/>}/>
        <Route path='blog' element={<Blog/>}/>
      </Routes>
    </>
  )
}

export default App
