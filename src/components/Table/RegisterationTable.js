import React, { useState } from "react";

const TableComponent = ({ data }) => {
    const [editableIndex, setEditableIndex] = useState(-1);

    const handleEdit = (index) => {
        setEditableIndex(index);
    };

    const handleSave = () => {
        setEditableIndex(-1);
    };

    const handleCancel = () => {
        setEditableIndex(-1);
    };
    const renderRow = (item, index) => {
        const isEditable = editableIndex === index;

        return (
            <tr key={index}>
                <td>
                    {isEditable ? (
                        <input type="text" value={item.name} />
                    ) : (
                        item.name
                    )}
                </td>
                <td>
                    {isEditable ? (
                        <input type="text" value={item.phoneNumber} />
                    ) : (
                        item.phoneNumber
                    )}
                </td>
                <td>
                    {isEditable ? (
                        <input type="text" value={item.email} />
                    ) : (
                        item.email
                    )}
                </td>
                <td>
                    {isEditable ? (
                        <input type="text" value={item.dateOfBirth} />
                    ) : (
                        item.dateOfBirth
                    )}
                </td>
                <td>
                    {isEditable ? (
                        <input type="text" value={item.technicalSkill} />
                    ) : (
                        item.technicalSkill
                    )}
                </td>
                <td>
                    {isEditable ? (
                        <input type="text" value={item.status} />
                    ) : (
                        item.status
                    )}
                </td>
                <td>
                    {isEditable ? (
                        <div>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </div>
                    ) : (
                        <button onClick={() => handleEdit(index)}>Edit</button>
                    )}
                </td>
            </tr>
        );
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Technical Skill</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{data.map(renderRow)}</tbody>
        </table>
    );
};
export default TableComponent;
