import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './ItemCart.scss';

ItemCart.propTypes = {
    data: PropTypes.object,
};
ItemCart.defaultProps = {
    data: {},
};

function ItemCart({ data }) {

    const [quantity, setQuantity] = useState(0);
    console.log('dâta', data);



    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleOnBlur = () => {
        if (!quantity) {
            setQuantity(0);
        }
    }

    return (
        <div className='item-cart'>
            <div className="item-info">

                <div className="item-img">
                    <img src={data.item?.image} />
                </div>

                <div className="item-info-name">
                    {data.item?.name}
                </div>
            </div>

            <div className="item-price">
                {data.item?.price}
            </div>

            <div className="item-counter">
                <div
                    className="item-count_minus"
                    onClick={() => {
                        if (quantity > 0) {
                            setQuantity(quantity - 1)
                        }
                    }}
                >
                    <MinusOutlined />
                </div>

                <div className="item-count_quantity">
                    <input
                        // onBlur={handleOnBlur}
                        // onChange={handleQuantityChange}
                        type="number"
                        value={data.quantity}
                    />


                </div>
                <div
                    className="item-count_plus"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    <PlusOutlined />
                </div>
            </div>

            <div className="action-delete">
                <DeleteOutlined />
            </div>
        </div>
    );
}

export default ItemCart;