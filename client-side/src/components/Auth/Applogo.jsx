export default function Applogo({ img }) {
    return (
        <div className="img d-flex align-items-center justify-content-center mb-4" >
            <img style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
            }} src={img} /></div>)
}