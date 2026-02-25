export default function SectionHeader({ title, buttonText }) {
  return (
    <div style={{ paddingLeft: 20}}>
      <h3 style={{ color: "white", marginBottom: 5 }}>{title}</h3>
      {buttonText && (
        <a
          href="#"
          style={{
            color: "white",           
            fontSize: "0.9rem",
            textDecoration: "underline",
            cursor: "pointer"
          }}
    
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}