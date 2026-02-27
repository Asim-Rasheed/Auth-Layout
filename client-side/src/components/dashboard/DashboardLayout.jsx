import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import Background from "../Auth/Background";
import { FaTachometerAlt, FaTasks, FaCalendarAlt, FaUsers, FaCog } from "react-icons/fa";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
        { name: "Projects", label: "Projects", icon: <FaTasks /> },
        { name: "Calendar", label: "Calendar", icon: <FaCalendarAlt /> },
        { name: "Team", label: "Team", icon: <FaUsers /> },
        { name: "Settings", label: "Settings", icon: <FaCog /> },
    ];

    return (
        <Background>
            <div style={{ display: "flex", minHeight: "100vh", width: "100vw" }}>
                <DashboardSidebar
                    menuItems={menuItems}
                    activeItem={activeMenu}
                    onSelect={setActiveMenu}
                    show={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />
                <div style={{ flex: 1, overflowY: "auto", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <DashboardHeader
                        title={activeMenu}
                        subtitle="Welcome back! Track your activities."
                        onShare={() => alert("Share clicked")}
                        onNotification={() => alert("Notification clicked")}
                        onSettings={() => alert("Settings clicked")}
                        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                    />
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </Background>
    )
}