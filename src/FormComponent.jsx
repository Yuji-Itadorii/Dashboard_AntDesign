// FormComponent.js
import React from 'react';
import { Form, Input, Button } from 'antd';
import "./FormComponent.css"
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const FormComponent = ({ addRecord }) => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        addRecord(values);
        navigate('/table');
    };

    return (
        <>
            <div className="form-component">
                <Typography.Title level={2}>Add Record</Typography.Title>
                <Form onFinish={onFinish} layout="inline">
                    <Form.Item name="name" label="Name">
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add Record
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default FormComponent;
