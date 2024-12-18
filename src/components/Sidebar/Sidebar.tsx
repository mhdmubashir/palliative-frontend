import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState<string>("");

    useEffect(() => {
        setActiveLink(location.pathname || "/");
    }, [location.pathname]);

    const handleClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div style={{
            width: "250px",
            backgroundColor: "#1f2937",
            color: "#fff",
            height: "100vh",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0",
        }}>

            <SideBarHeader />

            <nav>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "0 1.5rem",
                }}>
                    {[
                        { to: "/", label: "Dashboard" },
                        { to: "/inventory", label: "Inventory" },
                        { to: "/patients", label: "Patients" },
                        { to: "/volunteers", label: "Volunteers" },
                        { to: "/donations", label: "Donations" },
                    ].map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            style={{
                                ...{
                                    textDecoration: "none",
                                    color: "#e5e7eb",
                                    fontSize: "1rem",
                                    padding: "0.8rem 1rem",
                                    borderRadius: "0.4rem",
                                    transition: "all 0.3s ease",
                                },
                                ...(activeLink === item.to ? {
                                    backgroundColor: "#374151",
                                    color: "#3b82f6",
                                    fontWeight: "bold",
                                } : {}),
                            }}
                            onClick={() => handleClick(item.to)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;

function SideBarHeader() {
    return (
        <div style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#3b82f6",
        }}>Palliative Care</div>
    );
};

