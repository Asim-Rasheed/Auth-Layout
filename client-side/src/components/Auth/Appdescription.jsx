export default function Appdescription({ name, description }) {
    return (
        <div>
            <h2 className="text-center text-white fw-bold">{name}</h2>
            <p className="text-center text-white fw-bold">{description}</p>
        </div>)
}