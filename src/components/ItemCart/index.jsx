import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './ItemCart.scss';

ItemCart.propTypes = {

};

function ItemCart(props) {

    const [quantity, setQuantity] = useState(0);


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
                    <img src="https://static2.yan.vn/YanNews/2167221/202011/le-bong-la-ai-tieu-su-doi-tu-su-nghiep-cua-co-057d0b59-4eceb02c.png" alt="" />
                </div>

                <div className="item-info-name">
                    Lê bống
                </div>
            </div>

            <div className="item-price">
                1200000
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
                        onBlur={handleOnBlur}
                        onChange={handleQuantityChange}
                        type="number" value={quantity}
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