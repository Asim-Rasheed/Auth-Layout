export default function Background({children}){
     return (
    <div
      className="d-flex justify-content-center align-items-center vw-100 vh-100"
      style={{
        background: `
          radial-gradient(circle at top left, #0b56c0 0%, transparent 15%),
          radial-gradient(circle at bottom right, #0b56c0 0%, transparent 15%),
          #010420
        `,
      }}
    >
        {children}
    </div>
     )
}