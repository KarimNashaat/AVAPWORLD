import { Button, Checkbox, Form, Input, Card, Alert, Spin } from 'antd'
import { UserOutlined, MessageOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import axios from '../../axios'

const { Meta } = Card;

const { TextArea } = Input

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [responseMessage, setMessage] = useState("")

    const onSubmit = (values) => {
        console.log(values)
        setLoading(true)
        axios.post('http://localhost:4000/contact', values)
            .then(function (response) {
                // handle success
                setLoading(false)
                console.log(response);
                setMessage(<Alert message="Thanks For Your Submit ! We Will Contact You As Soon As Possible" type="success" />)
            }).catch(error => {
                setLoading(false)
                console.log(error)
                setMessage(<Alert message={
                    error + ""
                } type="error" />)

            })
    }
    return (
        <div id="contact" className="d-flex flex-column align-items-center bg-light px-5 py-5 ">
            <div className='seven w-50 mb-3'>
                <h1 > Contact Us </h1>
            </div>
            <Card
                style={{ width: 600 }}
                className='shadow'
                cover={<img src="asserts/images/contact.jpg" />}
            >
                <Meta
                    description={
                        <div className='px-3'>
                            <Form
                                name="basic"
                                // labelCol={{ span: 8 }}
                                initialValues={{ remember: true }}
                                wrapperCol={{ span: 24 }}
                                onFinish={onSubmit}
                                // onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                layout='inline'
                            >
                                <div className='d-flex flex-column justify-content-start w-100'>
                                    <div className='d-flex my-3 w-100 justify-content-between'>
                                        <Form.Item
                                            name="firstName"
                                            // wrapperCol={{span:16}}
                                            style={{ width: '47%' }}
                                            rules={[{ required: true, message: 'Please input your First Name!' }]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                                        </Form.Item>
                                        <Form.Item
                                            name="lastName"
                                            wrapperCol={{ span: 24 }}
                                            style={{ width: '47%' }}
                                            rules={[{ required: true, message: 'Please input your Last Name!' }]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
                                        </Form.Item>
                                    </div>
                                    <Form.Item
                                        className='mb-3'
                                        name="email"
                                        // wrapperCol={{span:4}}
                                        rules={[{ required: true, message: 'Please input your Email!' }]}
                                    >
                                        <Input prefix={<MailOutlined />} placeholder="Email" type={"email"} />
                                    </Form.Item>

                                    <Form.Item
                                        name="phone"
                                        className='mb-3'
                                        // wrapperCol={{span:4}}
                                        rules={[{ required: true, message: 'Please input your Phone!' }]}
                                    >
                                        <Input prefix={<PhoneOutlined />} placeholder="Phone" type={"number"} />
                                    </Form.Item>

                                    <Form.Item
                                        name="address"
                                        className='mb-3'
                                        // wrapperCol={{span:4}}
                                        rules={[{ required: true, message: 'Please input your Address!' }]}
                                    >
                                        <Input prefix={<HomeOutlined />} placeholder="Address" />
                                    </Form.Item>

                                    <Form.Item
                                        name="message"
                                        // wrapperCol={{span:4}}
                                        rules={[{ message: 'Please input your Message!' }]}
                                    >
                                        <TextArea rows={4} placeholder="Enter Your Message" />,
                                    </Form.Item>

                                    <Form.Item initialValue={true} className='m-0' name="terms" valuePropName="checked" wrapperCol={{ span: 16 }}
                                        rules={[
                                            {
                                                validator: async (_, checked) => {
                                                    if (!checked) {
                                                        return Promise.reject(
                                                            new Error("Please agree the terms and conditions"),
                                                        );
                                                    }
                                                },
                                            },

                                        ]}>
                                        <Checkbox defaultChecked={true} checked={true} className='m-0'>I agree all the terms and conditions</Checkbox>
                                    </Form.Item>

                                    <Form.Item className='d-flex justify-content-center my-3' wrapperCol={{ span: 4, offset: 0 }}>
                                        {
                                            loading ? <Spin tip="Loading..." />
                                                :
                                                <Button className='btn btn-primary' type="primary" htmlType="submit" disabled={loading}>
                                                    Submit
                                                </Button>

                                        }
                                    </Form.Item>
                                    {responseMessage}
                                </div>

                            </Form>
                        </div>
                    }
                />
            </Card>
        </div>
    )
}

export default Contact