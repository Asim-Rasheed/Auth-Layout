import SectionHeader from "../components/dashboard/SectionHeader"
import TeamCard from "../components/team/TeamCard"
export default function TeamScreen() {
    const teamMembers = [
        { name: "Ali", role: "Leader", img: "https://i.pravatar.cc/30?img=2" },
        { name: "Ali", role: "Project Manger", img: "https://i.pravatar.cc/30?img=3" },
        { name: "Ali", role: "CO Leader", img: "https://i.pravatar.cc/30?img=5" },
        { name: "Ali", role: "Associate", img: "https://i.pravatar.cc/30?img=6" },
        { name: "Ali", role: "Associate", img: "https://i.pravatar.cc/30?img=7" },
        { name: "Ali", role: "Assossiate", img: "https://i.pravatar.cc/30?img=8" },
        { name: "Ali", role: "Associate", img: "https://i.pravatar.cc/30?img=2" },
        { name: "Ali", role: "Associate", img: "https://i.pravatar.cc/30?img=0" },
        { name: "Ali", role: "Associate", img: "https://i.pravatar.cc/30?img=1" },
        { name: "Ali", role: "Associate", img: "https://i.pravatar.cc/30?img=4" },
        { name: "Ali", role: "Associate", img: "https://i.pravatar.cc/30?img=15" },
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