import { ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

Header.propTypes = {

};

function Header(props) {
    const { SubMenu } = Menu;

    const [current, setCurrent] = useState('mail');
    const { user } = useSelector(state => state.user);
    //  <Avatar size={64} icon={<UserOutlined />} />


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

            {user && (
                <Menu.Item key="USER" icon={<ShopOutlined />}>
                    <Avatar size={64} src='https://joeschmoe.io/api/v1/random' /> {user.name}
                </Menu.Item>
            )}


            <Menu.Item key="PRODUCT" icon={<ShopOutlined />}>
                <Link to='/products' >Products</Link>
            </Menu.Item>
            <Menu.Item key="CART" icon={<ShoppingCartOutlined />}>
                <Link to='/cart' >Cart</Link>
            </Menu.Item>
            <SubMenu key="ACCOUNT" icon={<UserOutlined />} title="Account">
                <Menu.Item key="LOGIN">
                    <Link to='/account/login' >Login</Link>
                </Menu.Item>
                <Menu.Item key="REGISTRY">
                    <Link to='/account/registry'>Registry</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Header;