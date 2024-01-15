import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SkibidiToilet(props) {
  const { nodes, materials } = useGLTF("/skibidi_toilet.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.056}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Toilet}
            position={[-13.925, 60.722, 18.565]}
          />
          <group position={[0, 37.021, 22.373]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.Toilet}
              rotation={[-1.512, 0, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.Toilet}
            position={[0, 37.021, 22.373]}
            rotation={[-1.55, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.Toilet}
            position={[0, 37.021, 22.373]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.Toilet}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={4.823}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.002, -0.583, 0.498]}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_30.geometry}
              material={materials.eyeball_r}
              skeleton={nodes.Object_30.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_32.geometry}
              material={materials.mouth}
              skeleton={nodes.Object_32.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_34.geometry}
              material={materials.eyeball_l}
              skeleton={nodes.Object_34.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_36.geometry}
              material={materials.mike_facemap}
              skeleton={nodes.Object_36.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/skibidi_toilet.glb");