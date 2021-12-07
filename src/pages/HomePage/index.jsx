import { Card, List } from 'antd';
import React from 'react';
import './HomePage.scss';

function HomePage(props) {

    const data = [
        {
            title: 'Huỳnh Anh Tiên',
            role: ["ABC", "SYZ"]
        },
        {
            title: 'Nguyễn Trần Nhật Hào',
            role: ["ABC", "SYZ"]
        },
        {
            title: 'Trần Hoàng Phúc',
            role: ["ABC", "SYZ"]
        },
        {
            title: 'Mai Thanh Trọng',
            role: ["ABC", "SYZ"]
        },
        {
            title: 'Vũ Văn Khải',
            role: ["ABC", "SYZ"]
        },
    ];


    return (

        <div id="home-page">
            <List
                grid={{ gutter: 16, column: 5 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}  >
                            <ul>
                                {item.role.map((ele, index) => (
                                    <li style={{ textAlign: 'left' }} key={index}>{ele}</li>
                                ))}
                            </ul>
                        </Card>

                    </List.Item>
                )}
            />
        </div>


    );
}

export default HomePage;