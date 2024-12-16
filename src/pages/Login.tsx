import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    // State variables
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("");
    const [error, setError] = useState<string>("");

    // Default credentials
    const defaultUsername = "palliativevkd";
    const defaultPassword = "123456";
    const defaultOtp = "0000";

    // Handle username/password validation
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === defaultUsername && password === defaultPassword) {
            setIsPasswordValid(true);
            setError("");
        } else {
            setError("Invalid username or password");
        }
    };

    // Handle OTP validation
    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp === defaultOtp) {
            navigate("/"); // Redirect to Dashboard (default path)
        } else {
            setError("Invalid OTP");
        }
    };

    const loginContainerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f4f6",
    };

    const formStyle: React.CSSProperties = {
        width: "300px",
        padding: "2rem",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "0.8rem",
        margin: "0.5rem 0",
        borderRadius: "4px",
        border: "1px solid #d1d5db",
        fontSize: "1rem",
    };

    const buttonStyle: React.CSSProperties = {
        width: "100%",
        padding: "0.8rem",
        marginTop: "1rem",
        backgroundColor: "#3b82f6",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "1rem",
        cursor: "pointer",
    };

    const errorStyle: React.CSSProperties = {
        color: "red",
        fontSize: "0.9rem",
        marginTop: "0.5rem",
    };

    return (
        <div style={loginContainerStyle}>
            <div style={formStyle}>
                <h2>Login</h2>
                {!isPasswordValid ? (
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={inputStyle}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                        />
                        <button type="submit" style={buttonStyle}>
                            Login
                        </button>
                        {error && <div style={errorStyle}>{error}</div>}
                    </form>
                ) : (
                    <form onSubmit={handleOtpSubmit}>
                        <h3>Enter OTP</h3>
                        <input
                            type="text"
                            placeholder="OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            style={inputStyle}
                        />
                        <button type="submit" style={buttonStyle}>
                            Submit OTP
                        </button>
                        {error && <div style={errorStyle}>{error}</div>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
