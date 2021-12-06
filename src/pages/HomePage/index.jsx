import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

HomePage.propTypes = {

};

function HomePage(props) {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    console.log('product', products);
    return (
        <div>
            Home
        </div>
    );
}

export default HomePage;