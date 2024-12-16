import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Patients from "./pages/Patients";
import Dashboard from "./components/Sidebar/Dashboard";
import InventoryStockManage from "./pages/Inventory";
import Header from "./components/Header/Header";

const App: React.FC = () => {
    const appStyle: React.CSSProperties = {
        display: "flex",
    };

    return (
        <Router>
            <div style={appStyle}>
                <Sidebar />
                <div style={{ flex: 1 }}>
                    <Header />
                    <Routes>
                    {/* <Route path="/" element={<LoginPage />} /> */}

                        <Route path="/" element={<Dashboard />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/inventory" element={<InventoryStockManage />} />

                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
