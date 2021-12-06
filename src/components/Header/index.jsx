import { ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

Header.propTypes = {

};

function Header(props) {
    const { SubMenu } = Menu;

    const [current, setCurrent] = useState('mail');


    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key)
    };
    return (
        <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Menu.Item key="PRODUCT" icon={<ShopOutlined />}>
                <Link to='/products' >Danh sách sản phẩm</Link>
            </Menu.Item>
            <Menu.Item key="CART" icon={<ShoppingCartOutlined />}>
                <Link to='/cart' >Giỏ hàng</Link>
            </Menu.Item>
            <SubMenu key="ACCOUNT" icon={<UserOutlined />} title="Tài khoản">
                <Menu.Item key="LOGIN">
                    <Link to='/account/login' >Đăng nhập</Link>
                </Menu.Item>
                <Menu.Item key="REGISTRY">
                    <Link to='/account/regisrty'>Đăng ký</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Header;