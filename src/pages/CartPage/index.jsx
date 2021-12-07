import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, message, Modal, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import orderApi from '../../api/orderApi';
import productApi from '../../api/productApi';
import ItemCart from '../../components/ItemCart';
import './CartPage.scss';
CartPage.propTypes = {

};

function CartPage(props) {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { user } = useSelector(state => state.user);
    const navigate = useNavigate();

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
            let tempPrice = 0;
            cart.forEach(ele => {
                if (Object.keys(ele).length > 0) {
                    const priceItem = ele.item.price * ele.quantity;
                    tempPrice += priceItem;
                }
            })
            setTotalPrice(tempPrice);
        } else {
            setTotalPrice(0);
        }
    }, [cart]);


    useEffect(() => {
        saveToLocalStorage(cart)
    }, [cart])

    function saveToLocalStorage(newCart) {

        const tempCart = newCart.map(ele => ({
            id: ele.item?.id,
            quantity: ele.quantity
        }))
        localStorage.setItem('itemsCart', JSON.stringify(tempCart));
    }


    function confirm() {
        Modal.confirm({
            icon: <ExclamationCircleOutlined />,
            content: 'Login to buy..',
            okText: 'Redirect to login page',
            cancelText: 'Cancel',
            onOk: () => navigate('/account/login')
        });
    }

    function success() {
        Modal.success({
            content: 'Order successed',
            onOk: () => location.reload(),
            onCancel: () => location.reload(),

        });

    }



    const handleBuy = async () => {
        if (user) {
            if (cart) {
                const currentOrder = cart.map(ele => (
                    {

                        productID: ele.item.id,
                        quantity: ele.quantity
                    }
                ))

                await orderApi.createOrder(currentOrder, user.id).then(() => {
                    success();
                    localStorage.removeItem('itemsCart');
                }).catch(() => {
                    message.error('Has a error');
                })
            }

        } else {
            confirm();
        }
    }

    const handleOnCounterIncrease = (id) => {
        const index = cart.findIndex(ele => ele.item.id === id);
        let tempCart = [...cart];
        tempCart[index].quantity = tempCart[index].quantity + 1;
        setCart(tempCart);

    }

    const handleOnCouterDecrease = (id) => {
        const index = cart.findIndex(ele => ele.item.id === id);
        let tempCart = [...cart];

        if (tempCart[index].quantity === 1) {
            handleOnDeleteItem(id);
        } else {
            tempCart[index].quantity = tempCart[index].quantity - 1;
            setCart(tempCart);

        }


    }



    const handleInputChange = (number, id) => {
        const index = cart.findIndex(ele => ele.item.id === id);
        let tempCart = [...cart];
        tempCart[index].quantity = number;
        setCart(tempCart);



    }


    const handleOnDeleteItem = (id) => {
        const tempCart = cart.filter(ele => ele.item.id !== id);
        setCart(tempCart);


    }


    const { Title } = Typography;
    return (
        <div id='cart-page'>
            <Title level={2}>Giỏ Hàng</Title>

            <div className="cart_wrapper">

                {cart.map((ele, index) => (
                    <ItemCart
                        data={ele} key={index}
                        onCounterIncrease={handleOnCounterIncrease}
                        onCouterDecrease={handleOnCouterDecrease}
                        onInputChange={handleInputChange}
                        onDeleteItem={handleOnDeleteItem}
                    />
                ))}

            </div>

            {totalPrice > 0 && (
                <div className="total-price">
                    Total Price: {totalPrice}
                </div>
            )}
            {cart.length > 0 && (
                <div className="cart-button">
                    <Button type="primary" onClick={handleBuy} >Mua hàng</Button>
                </div>
            )}


        </div>
    );
}

export default CartPage;