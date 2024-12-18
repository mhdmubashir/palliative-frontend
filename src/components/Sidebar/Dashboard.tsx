import React from "react";
import Card from "../Card/Card";

const Dashboard: React.FC = () => {
    return (
        <div style={{  marginLeft: "250px", 
            padding: "2rem",
            backgroundColor: "#f9fafb",
            minHeight: "100vh",}}>
            <h2>Welcome to the Palliative Care Dashboard</h2>

         <div>
            
            <Card />
         </div>
        </div>
    );
};

export default Dashboard;
