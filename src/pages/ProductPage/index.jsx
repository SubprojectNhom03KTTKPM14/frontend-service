import { Col, Row, Typography } from 'antd';
import React from 'react';
import FilterProduct from '../../components/FilterProduct';
import ProductCard from '../../components/ProductCard';
import './ProductPage.scss';



ProductPage.propTypes = {

};

function ProductPage(props) {
    const { Title } = Typography;
    return (
        <div id='product-page'>
            <div className="product-page_title">
                <Title level={1}>Danh sách sản phẩm</Title>
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