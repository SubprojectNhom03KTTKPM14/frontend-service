import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag, Space } from 'antd';

UserPane.propTypes = {

};

function UserPane(props) {

    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Tuổi',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }
    ];


    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            email: 'phuc12@gmail.com'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            email: 'phuc12@gmail.com'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            email: 'phuc12@gmail.com'

        },
    ];
    return (
        <Table columns={columns} dataSource={data} />
    );
}

export default UserPane;