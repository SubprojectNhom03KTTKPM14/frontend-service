import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AccountPage from './pages/AccountPage'
import AdminPage from './pages/AdminPage'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="account/*" element={<AccountPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
