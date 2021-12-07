import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { fetchProfile } from './redux/slice/userSlice'

function App() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    useEffect(() => {
        const fetchMyProfile = async () => {
            const token = localStorage.getItem('accessToken')

            if (token) await dispatch(fetchProfile())
        }

        fetchMyProfile()
    }, [])

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
