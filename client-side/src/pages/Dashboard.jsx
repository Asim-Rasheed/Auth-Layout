import Background from "../components/Background"
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import ProjectCard from "../components/dashboard/ProjectCard";

import { useState } from "react";
import { FaTachometerAlt, FaTasks, FaCalendarAlt, FaUsers, FaCog, FaCheckCircle, FaChartBar, FaClock } from "react-icons/fa";

export default function Dashboard() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    const menuItems = [
        { name: "Dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
        { name: "Projects", label: "Projects", icon: <FaTasks /> },
        { name: "Calendar", label: "Calendar", icon: <FaCalendarAlt /> },
        { name: "Team", label: "Team", icon: <FaUsers /> },
        { name: "Settings", label: "Settings", icon: <FaCog /> },
    ];

    const cards = [
        { title: "Active Projects", value: "12", subtitle: "+2 this week", icon: <FaChartBar size={18} color="#f59e0b" />, iconBg: "#f59e0b22" },
        { title: "Tasks Completed", value: "86", subtitle: "67% completion rate", icon: <FaCheckCircle size={18} color="#22c55e" />, iconBg: "#22c55e22" },
        { title: "Pending Tasks", value: "10", subtitle: "5 due today", icon: <FaClock size={18} color="#ef4444" />, iconBg: "#ef444422" },
        { title: "Team Members", value: "24", subtitle: "3 online now", icon: <FaUsers size={18} color="#3b82f6" />, iconBg: "#3b82f622" },
    ];

    return (
        <Background>
            <div style={{ display: "flex", minHeight: "100vh", width: "100vw"}}>

                <DashboardSidebar
                    menuItems={menuItems}
                    activeItem={activeMenu}
                    onSelect={setActiveMenu}
                />

                <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>

                    <DashboardHeader
                        title="Dashboard"
                        subtitle="Welcome back! Track your activities."
                        onShare={() => alert("Share clicked")}
                        onNotification={() => alert("Notification clicked")}
                        onSettings={() => alert("Settings clicked")}
                    />

                    <div style={{ padding: 20 }}>
                        <StatCard cards={cards} />
                    </div>

                </div>

            </div>
        </Background>
    )
}