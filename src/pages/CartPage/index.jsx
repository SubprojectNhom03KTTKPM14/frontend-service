import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from 'antd';
import ItemCart from '../../components/ItemCart';
import './CartPage.scss'
CartPage.propTypes = {

};

function CartPage(props) {
    const { Title } = Typography;
    return (
        <div id='cart-page'>
            <Title level={2}>Giỏ Hàng</Title>

            <div className="cart_wrapper">
                <ItemCart />
                <ItemCart />
            </div>

            <div className="cart-button">
                <Button type="primary">Mua hàng</Button>
            </div>

        </div>
    );
}

export default CartPage;