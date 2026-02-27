import SectionHeader from "../components/dashboard/SectionHeader";
import AllProjectsCard from "../components/project/AllProjectsCard";
export default function ProjectScreen() {

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
    return (
        <div className="mt-3">
            <SectionHeader
                title="Projects"
                color="white"
            />

            <div style={{ padding: 20 }}>
                <AllProjectsCard projects={projects} /></div>
        </div>
    )
}