import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import NotFound from './components/NotFound'
import AccountPage from './pages/AccountPage'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="account/*" element={<AccountPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
