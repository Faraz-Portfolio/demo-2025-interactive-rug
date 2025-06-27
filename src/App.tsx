import { Bounds, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { Carpet } from "./Carpet";
import { Lights } from "./Lights";

import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { Physics, RigidBody } from "@react-three/rapier";
import { Blocks } from "./Blocks";
import { Under } from "./Under";

function Thing() {
  const underPositionRef = useRef(new Vector3());

  return (
    <>
      <Bounds fit clip observe margin={0.8}>
        <Carpet underPositionRef={underPositionRef} />
      </Bounds>

      <Physics>
        <RigidBody type="fixed" colliders="hull">
          <mesh rotation-x={-Math.PI / 2}>
            <circleGeometry args={[7.5]} />
            <meshBasicMaterial color="#4E6688" toneMapped={false} />
          </mesh>
        </RigidBody>

        <Blocks />

        <Under underPositionRef={underPositionRef} />
      </Physics>
    </>
  );
}

export default function App() {
  return (
    <>
      <Canvas shadows>
        <color attach="background" args={["#4E6688"]} />

        <OrbitControls makeDefault enablePan={false} />
        <PerspectiveCamera position={[-12, 8, -12]} makeDefault fov={45} />

        <axesHelper />
        <gridHelper />

        <Lights />

        <Thing />

        <EffectComposer>
          <N8AO intensity={20} aoRadius={0.1} quality="performance" />
        </EffectComposer>
      </Canvas>
    </>
  );
}
