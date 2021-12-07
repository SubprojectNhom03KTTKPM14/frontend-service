import { Col, notification, Pagination, Row, Typography } from 'antd';
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
    const { products, totalPages } = useSelector(state => state.product);
    const [query, setQuery] = useState({
        page: 0,
        size: 8,
        sortType: '',
        categoryId: ''
    });


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(query));
    }, [query]);


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

    const handlePageChange = (page) => {
        setQuery({ ...query, page: page - 1 })

    }

    const handleOnFilterChange = () => {

    }

    return (
        <div id='product-page'>
            <div className="product-page_title">
                <Title level={1}>PRODUCTS</Title>
            </div>


            <div className="product-page_filter">
                <FilterProduct
                    onFilterChange={handleOnFilterChange}
                />
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

            <div className="pagigation">
                <Pagination onChange={handlePageChange} current={query.page + 1} total={totalPages * 8} />
            </div>


        </div>
    );
}

export default ProductPage;