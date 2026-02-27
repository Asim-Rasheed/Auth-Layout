import SectionHeader from "../components/dashboard/SectionHeader"
import TeamCard from "../components/team/TeamCard"
export default function TeamScreen() {
    const teamMembers = [
        { name: "Ali", role: "Leader", img: "https://i.pravatar.cc/30?img=2" },
        { name: "Ahmer", role: "Project Manger", img: "https://i.pravatar.cc/30?img=3" },
        { name: "Rehman", role: "CO Leader", img: "https://i.pravatar.cc/30?img=5" },
        { name: "Abubakr", role: "Associate", img: "https://i.pravatar.cc/30?img=6" },
        { name: "Ahmad", role: "Associate", img: "https://i.pravatar.cc/30?img=7" },
        { name: "Usama", role: "Assossiate", img: "https://i.pravatar.cc/30?img=8" },
        { name: "Zaid", role: "Associate", img: "https://i.pravatar.cc/30?img=2" },
        { name: "Umer", role: "Associate", img: "https://i.pravatar.cc/30?img=0" },
        { name: "Ali", role: "Associate", img: "https://i.pravatar.cc/30?img=1" },
    ]

    return (
        <div className="mt-3">
            <SectionHeader
                title="Team Members"
                color="white"
            />

            <div style={{ padding: 20 }}>
                <TeamCard team={teamMembers} /></div>
        </div>
    )
}