
import StatCard from "../components/dashboard/StatCard";
import ProjectCard from "../components/dashboard/ProjectCard";
import InsightGraph from "../components/Auth/Chart";
import UpcomingProjectCard from "../components/dashboard/UpcomingProjectCard";
import SectionHeader from "../components/dashboard/SectionHeader";
import { FaTachometerAlt, FaTasks, FaCalendarAlt, FaUsers, FaCog, FaCheckCircle, FaChartBar, FaClock } from "react-icons/fa";


export default function Dashboard() {

    const cards = [
        {
            title: "Active Projects", value: "12", subtitle: "+2 this week",
            icon: <FaChartBar size={18} color="#f59e0b" />, iconBg: "#f59e0b22"
        },
        {
            title: "Tasks Completed", value: "86", subtitle: "67% completion rate",
            icon: <FaCheckCircle size={18} color="#22c55e" />, iconBg: "#22c55e22"
        },
        {
            title: "Pending Tasks", value: "10", subtitle: "5 due today",
            icon: <FaClock size={18} color="#ef4444" />, iconBg: "#ef444422"
        },
        {
            title: "Team Members", value: "24", subtitle: "3 online now",
            icon: <FaUsers size={18} color="#3b82f6" />, iconBg: "#3b82f622"
        },
    ];

    const projects = [
        {
            title: "Mobile App",
            date: "Feb 20, 2026",
            progress: 75,
            avatars: ["https://i.pravatar.cc/30?img=1", "https://i.pravatar.cc/30?img=2"],
            buttonText: "View",

        },
        {
            title: "Landing Page",
            date: "Feb 18, 2026",
            progress: 40,
            avatars: ["https://i.pravatar.cc/30?img=3", "https://i.pravatar.cc/30?img=4"],
            buttonText: "View",

        },
        {
            title: "Static UI",
            date: "Feb 15, 2026",
            progress: 55,
            avatars: ["https://i.pravatar.cc/30?img=5", "https://i.pravatar.cc/30?img=6"],
            buttonText: "View",
            gradient: "linear-gradient(90deg, #1f4037, #99f2c8)",
        },
        {
            title: "Design",
            date: "Feb 12, 2026",
            progress: 99,
            avatars: ["https://i.pravatar.cc/30?img=7", "https://i.pravatar.cc/30?img=8"],
            buttonText: "View",

        },
        {
            title: "Web App",
            date: "Feb 10, 2026",
            progress: 60,
            avatars: ["https://i.pravatar.cc/30?img=9", "https://i.pravatar.cc/30?img=10"],
            buttonText: "View",

        },
        {
            title: "Testing",
            date: "Feb 5, 2026",
            progress: 35,
            avatars: ["https://i.pravatar.cc/30?img=11", "https://i.pravatar.cc/30?img=12"],
            buttonText: "View",

        },
    ];

    const upcomingProjectsData = [
        {
            title: "Mobile App UI",
            subtitle: "Design new onboarding screens",
            priority: "High",
            creator: "Ali",
            image: "https://i.pravatar.cc/30?img=9",
        },
        {
            title: "Marketing Campaign",
            subtitle: "Social media planning",
            priority: "Medium",
            creator: "Ali",
            image: "https://i.pravatar.cc/30?img=11",
        },
        {
            title: "Backend Upgrade",
            subtitle: "Migrate to Node v20",
            priority: "Low",
            creator: "Ahmed",
            image: "https://i.pravatar.cc/30?img=7",
        },
        {
            title: "Mobile App UI",
            subtitle: "Design new onboarding screens",
            priority: "High",
            creator: "Ali",
            image: "https://i.pravatar.cc/30?img=11",
        },
        {
            title: "Marketing Campaign",
            subtitle: "Social media planning",
            priority: "Medium",
            creator: "Ahmad",
            image: "https://i.pravatar.cc/30?img=7",
        },
        {
            title: "Backend Upgrade",
            subtitle: "Migrate to Node v20",
            priority: "Low",
            creator: "Ahmed",
            image: "https://i.pravatar.cc/30?img=11",
        },

    ];

    return (
        <>
            <div style={{ padding: 20 }}>
                <StatCard cards={cards} />
            </div>

            <SectionHeader
                title="Project Overview"
                buttonText="View All"
                color="white"
            />

            <div style={{ padding: 20 }}>
                <ProjectCard projects={projects} graph={<InsightGraph />} /></div>

            <SectionHeader
                title="Upcoming Projects"
                buttonText="View All"
                color="white"
            />

            <div style={{ padding: 20 }}><UpcomingProjectCard upcoming={upcomingProjectsData} /></div>
        </>

    )
}