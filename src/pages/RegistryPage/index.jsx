import { Button, Divider, Form, Input, Modal, Typography, message } from 'antd';
import React from 'react';
import userApi from '../../api/userApi';
import REGEX from '../../constant/regex';
import { useNavigate } from 'react-router-dom';
import './RegistryPage.scss';



RegistryPage.propTypes = {

};

function RegistryPage(props) {
    const { Title } = Typography;
    const navigate = useNavigate();


    const pushToLogin = () => {
        navigate('/account/login')
    }
    function success() {
        Modal.success({
            content: 'Register successed !',
            onOk: pushToLogin,
            onCancel: pushToLogin
        });
    }
    const onFinish = async (values) => {

        await userApi.registry(values).then(() => {
            success()
        }).catch(() => {
            message.error('has an error');
        });
    };


    return (
        <div id='registry-page'>
            <div className="registry-form">
                <Title level={2}>REGISTRY</Title>
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
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"

                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(REGEX.USER),
                                message: "Name is not valid "
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: 'email'
                            }
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
                                pattern: new RegExp(REGEX.PHONE),
                                message: "Phone invalid"
                            }

                        ]}
                    >
                        <Input />
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