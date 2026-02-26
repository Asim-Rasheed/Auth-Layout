import Applogo from "./Applogo";
import Appdescription from "./Appdescription";
import Applogoimg from "../../assets/images/applogo.png";
import Background from "./Background";

export default function AuthCardLayout({ children }) {
  return (
   <Background>
      <div
        className="card overflow-auto d-flex flex-column flex-md-row"
        style={{
          borderRadius: "50px",
          minHeight: "600px",
          height: "auto",
          maxHeight: "90%",
          maxWidth: "800px",
          width: "90%",
        }}
      >
        {/* Left Side */}
        <div
          className="d-flex flex-column justify-content-center align-items-center p-4 p-md-5"
          style={{
            flex: 0.7,
            background: "#191d35",
          }}
        >
          <Applogo img={Applogoimg} className="mb-3" />
          <Appdescription
            name="App Name"
            description="Your description here"
            className="text-center text-md-left"
          />
        </div>

        {/* Right Side */}
        <div
          className="d-flex flex-column justify-content-center p-5 p-md-5"
          style={{
            flex: 1,
            background: `
              radial-gradient(circle at top left, #0b56c0 0%, transparent 15%),
              radial-gradient(circle at bottom right, #0b56c0 0%, transparent 15%),
              #010420
            `,
          }}
        >
     
          {children}

        </div>
      </div>
      </Background>
  );
}