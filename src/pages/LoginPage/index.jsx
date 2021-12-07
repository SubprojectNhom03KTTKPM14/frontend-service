import { Button, Divider, Form, Input, message, Typography, Modal } from 'antd';
import React from 'react';
import userApi from '../../api/userApi';
import './LoginPage.scss';

LoginPage.propTypes = {

};

function LoginPage(props) {
    const { Title } = Typography;

    const onFinish = async ({ username, password }) => {
        console.log({ username, password })
        await userApi.login(username, password).then(({ accessToken }) => {
            localStorage.setItem('accessToken', accessToken);
            success()

        }).catch(() => {
            message.error('has an error')
        })
    };

    function success() {
        Modal.success({
            content: 'Login success',
        });
    }





    return (
        <div id='login-page'>
            <div className="login-form">
                <Title level={2}>Đăng nhập</Title>
                <Divider />

                <Form
                    name="basic"
                    labelCol={{
                        span: 7,
                    }}

                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}

                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Username trống',
                            },
                            {
                                type: 'email',
                                message: 'Email không hợp lệ',

                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Button type="primary" htmlType="submit" block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default LoginPage;