import React from "react";
import "./Users.css";
import { Table } from "antd";
import { useSelector } from "react-redux";


const Users = () => {

    const { users } = useSelector((state) => state.users);
    return (
        <div className="conatiner">
            <h1> {users && users.length > 0 ? "Users" : "Loading...."}  </h1>

            <Table dataSource={users} columns={[
                {
                    title: 'First Name',
                    dataIndex: 'firstName',
                    key: 'id',
                },
                {
                    title: 'Last Name',
                    dataIndex: 'lastName',
                    key: 'id',
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'id',
                },
                {
                    title: 'Phone',
                    dataIndex: 'phone',
                    key: 'id',
                },
                {
                    title: 'gender',
                    dataIndex: 'gender',
                    key: 'id',
                },
            ]} />
        </div>
    );
};

export default Users;