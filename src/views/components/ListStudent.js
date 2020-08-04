import React, { Component } from "react";
import { Table, Tag, Space } from "antd";
import { UserAddOutlined, DeleteOutlined } from '@ant-design/icons';
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
        render: (age) => <Tag color={"green"}>{age}</Tag>,
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Introdution",
        key: "introdution",
        dataIndex: "introdution"
    },
    {
        title: "Action",
        key: "action",
        render: () => (
            <Space size="middle">
                <a><UserAddOutlined /></a>
                <a><DeleteOutlined /></a>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        email: "New York No. 1 Lake Park",
        introdution: "Good",
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        email: "London No. 1 Lake Park",
        introdution: "Good",
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        email: "Sidney No. 1 Lake Park",
        introdution: "Good",
    },
];

export default class ListStudent extends Component {
    render() {
        return <Table columns={columns} dataSource={data} />;
    }
}
