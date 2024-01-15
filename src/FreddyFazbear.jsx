import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FreddyFazbear(props) {
  const { nodes, materials } = useGLTF("/freddy_fazbear.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <primitive object={nodes.Armature_rootJoint} />
        <skinnedMesh
          geometry={nodes.RIG_FreddyForJumpscaremo002_0.geometry}
          material={materials.Suit1}
          skeleton={nodes.RIG_FreddyForJumpscaremo002_0.skeleton}
        />
        <skinnedMesh
          geometry={nodes.RIG_FreddyForJumpscaremo002_1.geometry}
          material={materials.Suit2}
          skeleton={nodes.RIG_FreddyForJumpscaremo002_1.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/freddy_fazbear.glb");
