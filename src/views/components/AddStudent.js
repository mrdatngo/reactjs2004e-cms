import React, { Component, Fragment } from "react";
import { Form, Input, InputNumber, Button, Typography } from "antd";

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: "${label} hihi is required!",
    types: {
        email: "${label} is not validate email!",
        number: "${label} is not a validate number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

export default class AddStudent extends Component {
    onFinish = (values) => {
        console.log(values);
    };
    render() {
        return (
            <div id="add-student">
                <Typography.Title level={3} style={{ textAlign: "center", paddingBottom: "20px" }}  className={"primary-color"}>Add Student</Typography.Title>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={this.onFinish}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={["user", "name"]}
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["user", "email"]}
                        label="Email"
                        rules={[{ type: "email" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["user", "age"]}
                        label="Age"
                        rules={[
                            { type: "number", min: 0, max: 99, required: true },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name={["user", "introduction"]}
                        label="Introduction"
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
