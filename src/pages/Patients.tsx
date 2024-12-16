import React, { useState, useEffect } from "react";
// import axios from "../services/api";

interface Patient {
    id: number;
    name: string;
    age: number;
    contact: string;
}

const Patients: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    const tableStyle: React.CSSProperties = {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "1rem",
    };

    const thTdStyle: React.CSSProperties = {
        border: "1px solid #ddd",
        padding: "8px",
        textAlign: "left",
    };

    const headerRowStyle: React.CSSProperties = {
        backgroundColor: "#f4f4f4",
    };

    // useEffect(() => {
    //     axios.get("/patients")
    //         .then(response => setPatients(response.data))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <div style={{ marginLeft: "250px", padding: "2rem" }}>
            <h2>Patients</h2>
            <table style={tableStyle}>
                <thead>
                    <tr style={headerRowStyle}>
                        <th style={thTdStyle}>Name</th>
                        <th style={thTdStyle}>Age</th>
                        <th style={thTdStyle}>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td style={thTdStyle}>{patient.name}</td>
                            <td style={thTdStyle}>{patient.age}</td>
                            <td style={thTdStyle}>{patient.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Patients;
