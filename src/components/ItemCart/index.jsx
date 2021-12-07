
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { currencyFormat } from "../../utils/commonUtils";
import './ItemCart.scss';

ItemCart.propTypes = {
    data: PropTypes.object,
    onCounterIncrease: PropTypes.func.isRequired,
    onCouterDecrease: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,


};
ItemCart.defaultProps = {
    data: {},
};

function ItemCart({
    data,
    onCouterDecrease,
    onCounterIncrease,
    onInputChange,
    onDeleteItem
}) {




    const handleQuantityChange = (e) => {
        const value = e.target.value;
        const number = parseInt(value);
        console.log('value', value);

        if (!isNaN(number)) {
            console.log('number', number);

            if (number > 0) {
                onInputChange(number, data.item.id)
            }
        }

        // handleInputChange
    }

    const handleOnClickDelete = () => {
        onDeleteItem(data.item.id)
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
                {currencyFormat(data.item?.price)}
            </div>

            <div className="item-counter">
                <div
                    className="item-count_minus"
                    onClick={() => {
                        if (data.quantity > 0) {
                            onCouterDecrease(data.item.id);
                        }
                    }}
                >
                    <MinusOutlined />
                </div>

                <div className="item-count_quantity">
                    <input
                        onChange={handleQuantityChange}
                        type="number"
                        value={data.quantity}
                    />


                </div>
                <div
                    className="item-count_plus"
                    onClick={() => onCounterIncrease(data.item.id)}
                >
                    <PlusOutlined />
                </div>
            </div>

            <div className="action-delete">
                <DeleteOutlined onClick={handleOnClickDelete} />
            </div>
        </div>
    );
}

export default ItemCart;
