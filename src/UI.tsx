import {
  FaSquareTwitter,
  FaSquareXTwitter,
  FaLinkedin,
  FaArtstation,
  FaSquareInstagram,
} from "react-icons/fa6";

export function UI() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          padding: "2rem",
          boxSizing: "border-box",
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: '"Cabin Sketch", sans-serif',
            color: "#fff",
            margin: 0,
          }}
        >
          Interactive Rug Shader
        </h1>
        <p
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: '"Cabin Sketch", sans-serif',
            color: "#fff",
            margin: 0,
          }}
        >
          An interactive rug shader inspired by{" "}
          <a
            href="https://x.com/_Dervishh"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "underline",
              pointerEvents: "all",
            }}
          >
            @_Dervishh
          </a>
          .
          <br />
          Ported to React Three Fiber by{" "}
          <a
            href="https://x.com/cantBeFaraz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "underline",
              pointerEvents: "all",
            }}
          >
            Faraz Shaikh
          </a>
        </p>
      </div>

      <footer
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: "2rem",
          boxSizing: "border-box",
          color: "#fff",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <a
            href="https://x.com/cantBeFaraz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              pointerEvents: "all",
            }}
          >
            <FaSquareTwitter size="1.5rem" />
          </a>
          <a
            href="https://x.com/cantBeFaraz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              pointerEvents: "all",
            }}
          >
            <FaSquareXTwitter size="1.5rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/faraz-shaikh-811655166/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              pointerEvents: "all",
            }}
          >
            <FaLinkedin size="1.5rem" />
          </a>
          <a
            href="https://www.artstation.com/farazshaikh"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              pointerEvents: "all",
            }}
          >
            <FaArtstation size="1.5rem" />
          </a>
          <a
            href="https://www.instagram.com/cantBeFaraz/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              pointerEvents: "all",
            }}
          >
            <FaSquareInstagram size="1.5rem" />
          </a>
        </div>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "0.9rem",
            margin: 0,
            textAlign: "right",
          }}
        >
          Design and code by Faraz
          <br />
          Freelance WebGL technical artist and developer
          <br />
          <a
            href="mailto:farazzshaikh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "underline",
              pointerEvents: "all",
            }}
          >
            farazzshaikh@gmail.com
          </a>
        </p>
      </footer>
    </>
  );
}
