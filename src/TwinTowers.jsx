import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TwinTowers(props) {
  const { nodes, materials } = useGLTF("/twin_towers.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-10.063, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["Material.001"]}
          position={[-2.414, -1.362, -11.248]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Material}
        position={[0, 0, 9.81]}
      />
    </group>
  );
}

useGLTF.preload("/twin_towers.glb");