import { LaptopOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import BillPane from '../../components/AdminPane/BillPane';
import ProductPane from '../../components/AdminPane/ProductPane';
import UserPane from '../../components/AdminPane/UserPane';
import './AdminPage.scss';

AdminPage.propTypes = {

};

function AdminPage(props) {

    const { Content, Footer, Sider } = Layout;

    const [activekey, setActiveKey] = useState('1')

    const handleOnClickMenu = ({ key }) => {
        console.log(key);
        setActiveKey(key)
    }
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu onClick={handleOnClickMenu} theme="dark" mode="inline" selectedKeys={[activekey]} >
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Người dùng
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ProfileOutlined />}>
                        Hóa đơn
                    </Menu.Item>
                    <Menu.Item key="3" icon={<LaptopOutlined />}>
                        Sản phẩm
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {activekey === '1' && (
                            <UserPane />
                        )}

                        {activekey === '2' && (
                            <BillPane />
                        )}

                        {activekey === '3' && (
                            <ProductPane />
                        )}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default AdminPage;