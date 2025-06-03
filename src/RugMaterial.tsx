import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useMemo } from "react";
import {
  DoubleSide,
  Group,
  Material,
  MeshBasicMaterial,
  MeshDepthMaterial,
  Texture,
  Vector3,
  Vector4,
  type DepthTexture,
} from "three";

import CSM from "three-custom-shader-material";

export interface RugMaterialProps {
  underPositionRef: React.RefObject<Vector3>;
  baseMaterial: Material;
}

export function RugMaterial({
  underPositionRef,
  baseMaterial,
}: RugMaterialProps) {
  const vertexShader = useMemo(
    () => /* glsl */ `
    varying float vDebug;
    varying vec2 vUv;

    uniform vec3 uUnderPosition;
    uniform vec4 uParams; // x: edge, y: blur

    float sdSphere(vec2 p, float r) {
      return length(p) - r;
    }

    vec3 displace(vec3 point) {
      vec3 worldPosition = (modelMatrix * vec4(point, 1.0)).xyz;
      float radius = uParams.z;
      float sphere = sdSphere((worldPosition - uUnderPosition).xz, radius);
      float edge = uParams.x;
      float blur = uParams.y;
      float intensity = uParams.w;

      sphere = 1.0 - smoothstep(edge, blur, sphere);

      float underDistance = worldPosition.y - uUnderPosition.y;
      float isUnderCarpet = step(-0.0001, underDistance);

      underDistance = 1.0 - clamp(underDistance, 0.0, 1.0);

      return point + vec3(0.0, 0.0, sphere * underDistance * isUnderCarpet * intensity);
    }
    
    vec3 orthogonal(vec3 v) {
      return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
      : vec3(0.0, -v.z, v.y));
    }

    vec3 recalcNormals(vec3 newPos) {
      float offset = 0.001;
      vec3 tangent = orthogonal(normal);
      vec3 bitangent = normalize(cross(normal, tangent));
      vec3 neighbour1 = position + tangent * offset;
      vec3 neighbour2 = position + bitangent * offset;

      vec3 displacedNeighbour1 = displace(neighbour1);
      vec3 displacedNeighbour2 = displace(neighbour2);

      vec3 displacedTangent = displacedNeighbour1 - newPos;
      vec3 displacedBitangent = displacedNeighbour2 - newPos;

      return normalize(cross(displacedTangent, displacedBitangent));
    }


    
    void main() {{
      vec3 newPosition = displace(position);
      vec3 newNormal = recalcNormals(newPosition);

      csm_Position = newPosition;
      csm_Normal = newNormal;
    }}
  `,
    []
  );

  const fragmentShader = useMemo(
    () => /* glsl */ `
    varying float vDebug;
    varying vec2 vUv;

    void main() {
      csm_DiffuseColor = vec4(vec3(vDebug), 1.0); // Red color
    }
  `,
    []
  );

  const uniforms = useMemo(
    () => ({
      uUnderPosition: { value: underPositionRef.current },
      uParams: { value: new Vector4(-0.35, 1.25, 0.55, 1.1) }, // edge, blur, radius, intensity
    }),
    []
  );

  return (
    <>
      <CSM
        baseMaterial={baseMaterial}
        key={vertexShader + fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        side={DoubleSide}
      />
    </>
  );
}
