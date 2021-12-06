import { Table } from 'antd';
import React from 'react';


ProductPane.propTypes = {

};

function ProductPane(props) {
    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Gía',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
        }
    ];

    const data = [
        {
            key: '1',
            name: 'Thinkpad T550',
            type: 'Gamming',
            price: 20000,
            quantity: 10
        },
        {
            key: '2',
            name: 'Thinkpad T550',
            type: 'Gamming',
            price: 20000,
            quantity: 10
        },
        {
            key: '3',
            name: 'Thinkpad T550',
            type: 'Gamming',
            price: 20000,
            quantity: 10
        },

    ]
    return (
        <Table columns={columns} dataSource={data} />
    );
}

export default ProductPane;