import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

ProductCard.propTypes = {

};

function ProductCard(props) {
    return (
        <Card
            hoverable
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            actions={[
                <ShoppingCartOutlined key='add_to_cart' />
            ]}
        // style={{ height: '200px' }}
        >
            <div className="product-name">Tên</div>
            <div className="product-des">Mô tả</div>
            <div className="product-price">Gía</div>
        </Card>
    );
}

export default ProductCard;