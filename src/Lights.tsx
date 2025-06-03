import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { OrthographicCamera, type DirectionalLight } from "three";

export function Lights() {
  const lightRef = useRef<DirectionalLight>(null!);
  const cameraRef = useRef<OrthographicCamera>(null!);

  // useHelper(lightRef, DirectionalLightHelper);
  // useHelper(cameraRef, CameraHelper);

  return (
    <>
      <Environment preset="apartment" />

      {/* <ambientLight intensity={1} /> */}

      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={5}
        castShadow
        shadow-bias={-0.01}
      >
        <orthographicCamera
          ref={cameraRef}
          attach="shadow-camera"
          near={0.1}
          far={20}
          left={-10}
          right={10}
          top={10}
          bottom={-10}
        />
      </directionalLight>
    </>
  );
}
