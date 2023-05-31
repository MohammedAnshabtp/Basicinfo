import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";

const RegistrationPage = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        dateOfBirth: "",
        technicalSkill: "",
        status: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: "",
            phoneNumber: "",
            email: "",
            dateOfBirth: "",
            technicalSkill: "",
            status: "",
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth:</Form.Label>
                <Form.Control
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="technicalSkill">
                <Form.Label>Technical Skill:</Form.Label>
                <Form.Control
                    as="select"
                    name="technicalSkill"
                    value={formData.technicalSkill}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Technical Skill</option>
                    <option value="PHP">PHP</option>
                    <option value="NODEJS">Node.js</option>
                    <option value="REACTJS">ReactJS</option>
                    <option value="MONGODB">MongoDB</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="status">
                <Form.Label>Status:</Form.Label>
                <Form.Control
                    as="select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                </Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
                Submit
            </Button>
        </Form>
    );
};

export default RegistrationPage;
