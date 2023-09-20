// TableComponent.js
import React, { useState } from 'react';
import { Table, Button, Input, Modal } from 'antd';

const TableComponent = ({ data, onDelete, onUpdate }) => {
    const [editItem, setEditItem] = useState(null);
    const handleEdit = (record) => {
        setEditItem(record);
    };

    const handleUpdate = () => {
        onUpdate(editItem.key, editItem);
        setEditItem(null);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) => (
                <>
                    <Button onClick={() => handleEdit(record)} type="link">
                        Edit
                    </Button>
                    <Button onClick={() => onDelete(record.key)} type="link">
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <>
            <Table dataSource={data} columns={columns} />
            <Modal
                title="Edit Record"
                open={!!editItem}
                onOk={handleUpdate}
                onCancel={() => setEditItem(null)}
            >
                <Input
                    placeholder="Name"
                    value={editItem?.name}
                    onChange={(e) =>
                        setEditItem({ ...editItem, name: e.target.value })
                    }
                />
                <Input
                    placeholder="Email"
                    value={editItem?.email}
                    onChange={(e) =>
                        setEditItem({ ...editItem, email: e.target.value })
                    }
                />
            </Modal>
        </>

    );
};

export default TableComponent;
