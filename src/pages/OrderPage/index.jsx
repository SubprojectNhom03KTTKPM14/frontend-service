import { Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import orderApi from '../../api/orderApi';
import { currencyFormat } from "../../utils/commonUtils";

import './OrderPage.scss';

OrderPage.propTypes = {

};

function OrderPage(props) {
    const [orders, setOrders] = useState([]);
    const { user } = useSelector((state) => state.user);
    console.log('user', user);




    useEffect(() => {

        async function fetchOrders() {
            if (user) {
                await orderApi.fetchOrderOfUser(user.id).then((data) => {
                    setOrders(data);
                })

            }
        }

        fetchOrders();

    }, [user]);


    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Created Date',
            dataIndex: 'createdDate',
            key: 'createdDate',
        },
        {
            title: 'Descrpition',
            dataIndex: 'description',
            key: 'description',
            render: products => (
                <div >
                    {products.map((ele, index) => (
                        <div>{`${ele.product.name} x ${ele.quantity} (${currencyFormat(ele.product.price)}  x ${ele.quantity})`}</div>
                    ))}
                </div>
            )
        },
        {
            title: 'Total Price',
            key: 'totalPrice',
            dataIndex: 'totalPrice',
            render: price => (

                <Tag color='volcano' >
                    {currencyFormat(price)}
                </Tag>

            ),
        },
    ];


    const data = orders.length > 0 && orders.map(ele => ({
        key: ele.id,
        orderId: ele.id,
        createdDate: new Date(ele.createdDate).toLocaleDateString("en-US"),
        description: ele.orderDetails,
        totalPrice: ele.totalPrice
    }))





    return (
        <div id='order-page'>
            <div className="list-order">


                <Table columns={columns} dataSource={data} />
                {/* {orders.map((ele, index) => (
                    <OrderItem data={ele} key={index} />
                ))} */}
            </div>
        </div>
    );
}

export default OrderPage;