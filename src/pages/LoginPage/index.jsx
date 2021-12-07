import { Button, Divider, Form, Input, message, Modal, Typography } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userApi from '../../api/userApi';
import { setUser } from '../../redux/slice/userSlice';
import './LoginPage.scss';

LoginPage.propTypes = {

};

function LoginPage(props) {
    const { Title } = Typography;
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const onFinish = async ({ username, password }) => {
        console.log({ username, password })
        await userApi.login(username, password).then(({ accessToken }) => {
            localStorage.setItem('accessToken', accessToken);
        }).then(async () => {
            await userApi.fetchProfile().then((data) => {
                dispatch(setUser(data));

            });
            success()
        }).catch((error) => {
            console.log('error', error);
            message.error('has an error')
        })
    };

    function success() {
        Modal.success({
            content: 'Login success',
            onOk: () => navigate('/products'),
            onCancel: () => navigate('/products'),
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