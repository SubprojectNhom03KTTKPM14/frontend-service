import React from 'react';
import { Navigate } from 'react-router-dom';

ProtectedRoute.propTypes = {

};

function ProtectedRoute({ children }) {

    if (true) {
        return children;
    }
    return <Navigate to="/products" />;
}

export default ProtectedRoute;