import React from "react";

const Header: React.FC = () => {

    return (
        <header style={{ backgroundColor: "#f3f4f6",
            padding: "1rem 2rem",
            marginLeft: "250px", 
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",}}>
            <h1 style={{ fontSize: "1.5rem",
        fontWeight: "600",
        color: "#374151",}}>Dashboard</h1>
            <div style={{display: "flex",
        alignItems: "center",
        gap: "1rem"}}>
                <div style={{  width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#3b82f6",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "600",}}>A</div>
                <span>Admin</span>
            </div>
        </header>
    );
};

export default Header;
