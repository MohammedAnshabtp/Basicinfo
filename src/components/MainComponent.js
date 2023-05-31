import { useState } from "react";
import RegistrationPage from "./Form/RegistrationForm";
import TableComponent from "./Table/RegisterationTable";

const MainComponent = () => {
    const [tableData, setTableData] = useState([]);

    const handleSubmit = (formData) => {
        setTableData((prevData) => [...prevData, formData]);
    };

    return (
        <div>
            <h1>Registration Form</h1>
            <RegistrationPage onSubmit={handleSubmit} />
            <h2>Registered Users</h2>
            {tableData.length > 0 ? (
                <TableComponent data={tableData} />
            ) : (
                <p>No users registered yet.</p>
            )}
        </div>
    );
};
export default MainComponent;
