import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

ProtectedRoute.propTypes = {

};

function ProtectedRoute({ children, role }) {

    const { user } = useSelector((state) => state.user)


    if (user && user.roleType === role) {
        return children;
    }
    return <Navigate to="/account/login" />;
}

export default ProtectedRoute;