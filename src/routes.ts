import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ResetPassword from './pages/Auth/ResetPassword'
import MoreInfo from './pages/Auth/MoreInfo'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/auth/signup',
        Component: SignUp
    },
    {
        path: 'auth/more-info',
        Component: MoreInfo
    },
    {
        path: '/auth/signin',
        Component: SignIn
    },
    {
        path: '/auth/forgot-password',
        Component: ForgotPassword
    },
    {
        path: '/auth/reset-password/:token',
        Component: ResetPassword
    }
])