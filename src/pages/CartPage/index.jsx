import { Button, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import ItemCart from '../../components/ItemCart';
import './CartPage.scss';
CartPage.propTypes = {

};

function CartPage(props) {

    const [cart, setCart] = useState([{}]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchCart = async () => {
            const itemsCart = localStorage.getItem('itemsCart');
            let tempCart = [];
            if (itemsCart) {
                const tempItemCart = JSON.parse(itemsCart);

                for (const ele of tempItemCart) {
                    const data = await productApi.fetchProductById(ele.id);
                    const tempItem = {
                        item: data,
                        quantity: ele.quantity
                    }
                    tempCart.push(tempItem);
                }
            }
            setCart(tempCart)
        }

        fetchCart();

    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            // const total = cart.reduce((pre, cur) => {
            //     const preTemp = pre?.item.price || 0;
            //     const curTemp = cur.item.price;
            //     console.log('preTemp', preTemp);
            //     console.log('curTemp', curTemp);
            // })
            // console.log()
        }
    }, [cart])




    const { Title } = Typography;
    return (
        <div id='cart-page'>
            <Title level={2}>Giỏ Hàng</Title>

            <div className="cart_wrapper">

                {cart.map((ele, index) => (
                    <ItemCart data={ele} key={index} />
                ))}



            </div>

            <div className="total-price">
                {totalPrice}
            </div>

            <div className="cart-button">
                <Button type="primary">Mua hàng</Button>
            </div>

        </div>
    );
}

export default CartPage;