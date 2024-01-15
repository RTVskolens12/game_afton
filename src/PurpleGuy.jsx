import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PurpleGuy(props) {
  const { nodes, materials } = useGLTF("/purple_guy.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.167, 1.967, 0.011]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.143, 0.803, 0.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        position={[0.214, 0.255, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.441, 1, 0.426]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials["Material.001"]}
        position={[0.941, 0.956, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.194, 0.803, 0.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials["Material.002"]}
        position={[0.267, 1.575, 0.006]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.254, 0.803, 0.123]}
      />
    </group>
  );
}

useGLTF.preload("/purple_guy.glb");