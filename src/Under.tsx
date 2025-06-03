import { Mask, TransformControls, useMask } from "@react-three/drei";
import { useFrame, type ElementProps } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { button, useControls } from "leva";
import { useMemo, useRef } from "react";
import { Vector3, type Group } from "three";
import { easing } from "maath";

interface UnderProps {
  underPositionRef?: React.RefObject<Vector3>;
}

export function Under({ underPositionRef }: UnderProps) {
  const bodyRef = useRef<RapierRigidBody>(null!);
  const controlsRef = useRef<any>(null!);

  const vec3 = useMemo(() => new Vector3(-5, 0, -5), []);
  const target = useMemo(() => new Vector3(-5, 0, -5), []);

  const changeTimeout = useRef<any>(null);
  const canMoveRandom = useRef(true);

  const onChange = (e: any) => {
    if (!e.target.object) return;

    canMoveRandom.current = false;
    target.copy(e.target.object.position);

    clearTimeout(changeTimeout.current);
    changeTimeout.current = setTimeout(() => {
      canMoveRandom.current = true;
    }, 3000);
  };

  useFrame(({ clock }, dt) => {
    if (!bodyRef.current) return;

    if (canMoveRandom.current) {
      const time = clock.elapsedTime;
      target.set(
        Math.sin(time * 0.5 + Math.PI) * 5,
        0,
        Math.cos(time * 0.5 + Math.PI) * 5
      );
    }

    easing.damp3(vec3, target, 0.3, dt);
    bodyRef.current.setNextKinematicTranslation(vec3);
    underPositionRef?.current?.copy(bodyRef.current.translation());
  });

  const mask = useMask(1, false);

  return (
    <>
      <TransformControls
        onChange={onChange}
        position={[-5, 0, -5]}
        ref={controlsRef}
      />

      <RigidBody
        ref={bodyRef}
        type="kinematicPosition"
        colliders="ball"
        position={[-5, 0, -5]}
      >
        <group>
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[1]} />
            <meshStandardMaterial color="#4E6688" {...mask} />
          </mesh>
        </group>
      </RigidBody>

      <Mask id={1} depthWrite rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial />
      </Mask>
    </>
  );
}
