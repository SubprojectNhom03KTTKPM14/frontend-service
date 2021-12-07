import { Card, List } from 'antd';
import React from 'react';
import './HomePage.scss';

function HomePage(props) {

    const data = [
        {
            title: 'Huỳnh Anh Tiên',
            mssv: '18065341'
        },
        {
            title: 'Nguyễn Trần Nhật Hào',
            mssv: '18055671'
        },

        {
            title: 'Trần Hoàng Phúc',
            mssv: '18072731'
        },
        {
            title: 'Mai Thanh Trọng',
            mssv: '18064861'
        },
        {
            title: 'Vũ Văn Khải',
            mssv: '18068771'
        },
    ];


    return (

        <div id="home-page">
            <List
                grid={{ gutter: 16, column: 5 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card   >
                            <div>Tên : {item.title}</div>
                            <div>MSSV : {item.mssv}</div>
                        </Card>

                    </List.Item>
                )}
            />
        </div>


    );
}

export default HomePage;