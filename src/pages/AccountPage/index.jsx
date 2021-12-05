import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import RegistryPage from '../RegistryPage';
import LoginPage from '../LoginPage';

AccountPage.propTypes = {

};

function AccountPage(props) {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registry" element={<RegistryPage />} />
        </Routes>
    );
}

export default AccountPage;