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
          padding: "2rem 0",
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
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          padding: "2rem 1rem",
          boxSizing: "border-box",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            width: "100%",
            textAlign: "right",
            fontFamily: '"Cabin Sketch", sans-serif',
            fontSize: "0.8rem",
            color: "#fff",
            margin: 0,
          }}
        >
          by Faraz Shaikh <br />
          Freelance WebGL Developer <br />
          <a
            href="mailto:farazzshaikh@gmail.com"
            style={{
              color: "#fff",
              textDecoration: "underline",
              pointerEvents: "all",
            }}
          >
            farazzshaikh@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}
