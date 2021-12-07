import { Col, Row, Typography, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterProduct from '../../components/FilterProduct';
import ProductCard from '../../components/ProductCard';
import { fetchProducts } from '../../redux/slice/productSlice';
import './ProductPage.scss';



ProductPage.propTypes = {

};

function ProductPage(props) {
    const { Title } = Typography;
    const { products } = useSelector(state => state.product);
    const [query, setQuery] = useState({
        page: 0,
        size: 12,
        sortType: '',
        ategoryId: ''
    });


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(query));
    }, []);


    const openNotifySucces = () => {
        notification['success']({
            message: 'Add to cart successed',
        })
    };


    const handlePushToCart = ({ id }) => {
        const itemsCart = localStorage.getItem('itemsCart');

        const newItem = {
            id,
            quantity: 1
        }

        if (itemsCart) {
            let currentCart = JSON.parse(itemsCart);
            let flag = 0;
            currentCart.forEach((item, index, arr) => {
                if (item.id === newItem.id) {
                    arr[index].quantity = arr[index].quantity + 1
                    flag++;
                }
            });
            if (flag === 0) {
                currentCart.push(newItem)
            }
            localStorage.setItem('itemsCart', JSON.stringify(currentCart));
        } else {
            const newCart = [newItem];
            localStorage.setItem('itemsCart', JSON.stringify(newCart));
        }
        openNotifySucces();
    }

    return (
        <div id='product-page'>
            <div className="product-page_title">
                <Title level={1}>PRODUCTS</Title>
            </div>

            <div className="product-page_filter">
                <FilterProduct />
            </div>


            <div className="product-page_main">


                <div className="product-page_list">

                    <Row gutter={[16, 16]}>

                        {products.map((product, index) => (
                            <Col span={6} >
                                <ProductCard
                                    key={index}
                                    data={product}
                                    onClick={handlePushToCart}
                                />
                            </Col>
                        ))}

                    </Row>

                </div>


            </div>
        </div>
    );
}

export default ProductPage;