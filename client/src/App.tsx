
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/user/Home/Home'
import 'remixicon/fonts/remixicon.css'
import Product from './pages/user/Product/Product'

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element = {<Product />}></Route>
        <Route path='/products/:id' element = {<Product />}></Route>
      </Routes>
    </BrowserRouter>
  )

}
export default App
