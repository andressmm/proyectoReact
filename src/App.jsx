
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import {ItemDetailsContainer } from './components/ItemDetailsContainer/ItemDetailsContainer'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'




function App() {



  return (
    <>
    <BrowserRouter>
      <CartProvider>
          <div> 
      <Header/>
          <Routes> 
            <Route path="/" element={ <ItemListContainer/> } />

          <Route path="/category/:category" element={ <ItemListContainer/> } />


            <Route path="/detail/:id" element={ <ItemDetailsContainer/> } />
            <Route path="/carrito" element={ <Cart/> } />
            <Route path='/admin' element={<ProductFormContainer/>}/>
          </Routes>
      <Footer/>
      </div>
    </CartProvider>
    </BrowserRouter> 
    </>
  )
}

export default App
