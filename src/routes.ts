import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/signup',
        Component: SignUp
    }
])