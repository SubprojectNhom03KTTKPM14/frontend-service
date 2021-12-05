import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Form, Input, Typography } from 'antd';
import './RegistryPage.scss';



RegistryPage.propTypes = {

};

function RegistryPage(props) {
    const { Title } = Typography;

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div id='registry-page'>
            <div className="registry-form">
                <Title level={2}>Đăng Ký</Title>
                <Divider />

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}

                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phone!',
                            },
                        ]}
                    >
                        <Input type='number' />
                    </Form.Item>


                    <Form.Item
                        label="Address"
                        name="address"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Address!',
                            },
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
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
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

export default RegistryPage;