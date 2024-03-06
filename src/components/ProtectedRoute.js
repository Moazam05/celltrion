import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const captcha = localStorage.getItem("captcha");
    return captcha
        ? <Outlet />
        : <Navigate to="/" replace />
}

export default ProtectedRoute