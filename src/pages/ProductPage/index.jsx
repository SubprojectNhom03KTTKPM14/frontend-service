import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import FilterProduct from '../../components/FilterProduct';
import ProductCard from '../../components/ProductCard';
import { useSelector } from 'react-redux';
import './ProductPage.scss';



ProductPage.propTypes = {

};

function ProductPage(props) {
    const { Title } = Typography;
    const { product } = useSelector(state => state.product)

    useEffect(() => {


    }, [])



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
                        <Col span={6} >
                            <ProductCard />
                        </Col>
                        <Col span={6} >
                            <ProductCard />
                        </Col>
                        <Col span={6} >
                            <ProductCard />
                        </Col>
                        <Col span={6} >
                            <ProductCard />
                        </Col>
                        <Col span={6} >
                            <ProductCard />
                        </Col>
                        <Col span={6} >
                            <ProductCard />
                        </Col>
                        <Col span={6} >
                            <ProductCard />
                        </Col>
                    </Row>

                </div>


            </div>
        </div>
    );
}

export default ProductPage;