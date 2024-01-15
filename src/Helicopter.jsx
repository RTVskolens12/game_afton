import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Helicopter(props) {
  const { nodes, materials } = useGLTF("/heli.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.894, 0, 1.708]} rotation={[-Math.PI / 2, 0, 2.119]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line50-FACES_1"].geometry}
            material={materials["Line47-FACES"]}
            position={[0.375, 1.282, -3.131]}
            rotation={[-1.071, 0, 2.578]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line49-FACES_1"].geometry}
            material={materials["Line47-FACES"]}
            position={[0.408, 1.399, -3.177]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line48-FACES_1"].geometry}
            material={materials["Line47-FACES"]}
            position={[-0.375, 1.282, -3.131]}
            rotation={[2.071, 0, 2.578]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line47-FACES_1"].geometry}
            material={materials["Line47-FACES"]}
            position={[-0.408, 1.399, -3.177]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
          />
          <group position={[-0.322, 1.096, -2.164]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line43-FACES_1"].geometry}
              material={materials["Line05-FACES"]}
              position={[-0.157, 0.048, 0.028]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line44-FACES_1"].geometry}
              material={materials["Line41-FACES"]}
              position={[-0.138, -0.24, 0.028]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line45-FACES_1"].geometry}
              material={materials["Line41-FACES"]}
              position={[0.15, -0.24, 0.028]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
          </group>
          <group position={[0.322, 1.096, -1.889]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line05-FACES_1"].geometry}
              material={materials["Line05-FACES"]}
              position={[-0.157, 0.048, 0.028]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line38-FACES_1"].geometry}
              material={materials["Line41-FACES"]}
              position={[-0.138, -0.24, 0.028]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line42-FACES_1"].geometry}
              material={materials["Line41-FACES"]}
              position={[0.15, -0.24, 0.028]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line41-FACES_1"].geometry}
            material={materials["Line41-FACES"]}
            position={[0.342, 0.988, -2.337]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Tube03-FACES_1"].geometry}
            material={materials["Tube02-FACES"]}
            position={[0, 2.203, -1.488]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder38-FACES_1"].geometry}
            material={materials["Cylinder01-FACES"]}
            position={[0, 2.224, -2.609]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder37-FACES_1"].geometry}
            material={materials["Cylinder05-FACES"]}
            position={[0, 0.03, -2.662]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Torus05-FACES_1"].geometry}
            material={materials["Torus02-FACES"]}
            position={[0, 0.032, -2.663]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line40-FACES_1"].geometry}
            material={materials["Line06-FACES"]}
            position={[0, 0.587, -0.023]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder36-FACES_1"].geometry}
            material={materials["Cylinder29-FACES"]}
            position={[0.507, 3.048, 8.251]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder31-FACES_1"].geometry}
            material={materials["Cylinder31-FACES"]}
            position={[0.716, 3.046, 8.327]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder29-FACES_1"].geometry}
            material={materials["Cylinder29-FACES"]}
            position={[0.504, 3.045, 8.271]}
          />
          <group position={[0.013, 3.357, 1.419]} rotation={[-0.072, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object03-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.705, 0.285, -2.351]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder16-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[-0.011, 0.216, -1.911]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["NGon01-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.01, 0.261, -1.915]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line21-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[0.3, 0.269, -2.015]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Box03-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[0.311, 0.296, -2.191]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder22-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[0.393, 0.21, -2.351]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder23-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[0.114, 0.307, -2.079]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line17-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[0.43, 0.32, -1.908]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object02-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[0.74, 0.293, -2.246]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder26-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[-0.215, 0.317, -1.929]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line26-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[-0.269, 0.263, -2.114]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Box04-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[-0.419, 0.307, -2.027]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder25-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.601, 0.233, -1.998]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line18-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[0.309, 0.325, -1.773]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line13-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.218, 0.345, -1.529]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line16-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[-0.284, 0.329, -1.697]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line22-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.251, 0.295, -2.286]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line23-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[-0.071, 0.292, -2.262]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder17-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[0.078, 0.33, -1.733]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line12-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[-0.061, 0.297, -1.592]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Box02-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[0.09, 0.341, -1.507]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder20-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[0.2, 0.277, -1.354]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line15-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[-0.256, -0.023, -1.691]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line14-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.269, 0.074, -1.684]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line20-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[0.282, -0.027, -1.766]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line19-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[0.299, 0.069, -1.767]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object01-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.055, 0.368, -1.101]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder15-FACES_1"].geometry}
              material={materials["Cylinder15-FACES"]}
              position={[-0.01, 0.417, -1.921]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder18-FACES_1"].geometry}
              material={materials["Cylinder09-FACES"]}
              position={[-0.011, -0.007, -1.896]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder19-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.011, -0.213, -1.886]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["NGon02-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.01, 0.035, -1.894]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Line24-FACES_1"].geometry}
              material={materials["Line03-FACES"]}
              position={[-0.075, 0.038, -2.23]}
              rotation={[0.067, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder34-FACES_1"].geometry}
              material={materials["Cylinder15-FACES"]}
              position={[-0.01, 0.35, -1.921]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder35-FACES_1"].geometry}
              material={materials["Cylinder15-FACES"]}
              position={[-0.01, 0.333, -1.921]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["motor__09-FACES_1"].geometry}
            material={materials["motor__09-FACES"]}
            position={[0, 2.055, -2.591]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line25-FACES_1"].geometry}
            material={materials["Cylinder09-FACES"]}
            position={[-0.056, 3.188, -0.772]}
            rotation={[0.067, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Torus04-FACES_1"].geometry}
            material={materials["Torus01-FACES"]}
            position={[0, 0.297, -0.017]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder33-FACES_1"].geometry}
            material={materials["Cylinder04-FACES"]}
            position={[0, 0.292, -0.013]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder32-FACES_1"].geometry}
            material={materials["Cylinder11-FACES"]}
            position={[0, 0.292, -0.013]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Ellipse10-FACES_1"].geometry}
            material={materials["Ellipse09-FACES"]}
            position={[0, 2.062, 6.159]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line39-FACES_1"].geometry}
            material={materials["Line08-FACES"]}
            position={[0, 2.533, -2.5]}
          />
          <group position={[0, 3.023, 8.312]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["kabina-FACES_1"].geometry}
              material={materials["kabina-FACES"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["kabina-FACES_3"].geometry}
              material={materials["fuz__03-FACES_0"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line37-FACES_1"].geometry}
            material={materials["Line34-FACES"]}
            position={[0, 0.404, 0.666]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line36-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0.297, 0.366, 0.365]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line35-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[-0.297, 0.366, 0.365]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line34-FACES_1"].geometry}
            material={materials["Line34-FACES"]}
            position={[0, 0.404, 0.666]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line33-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0, 0.566, 1.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["ChamferCyl01-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0, 1.784, 5.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line32-FACES_1"].geometry}
            material={materials["Line32-FACES"]}
            position={[-0.623, 1.882, 0.074]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["ChamferBox02-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0, 1.72, 5.615]}
            scale={[0.927, 1, 1.051]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["ChamferBox01-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0, 1.623, 4.322]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line31-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0.751, 0.396, -2.332]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line30-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0.677, 0.299, -2.493]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line46-FACES_1"].geometry}
            material={materials["Line41-FACES"]}
            position={[-0.323, 0.988, -2.615]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Tube01-FACES_1"].geometry}
            material={materials["Tube01-FACES"]}
            position={[0.326, 0.411, -2.209]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line28-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[-0.705, 0.396, -2.556]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line27-FACES_1"].geometry}
            material={materials["Cylinder08-FACES_0"]}
            position={[-0.514, 0.565, -2.92]}
          />
          <group position={[0, 3.023, 8.312]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["fuz__03-FACES_1"].geometry}
              material={materials["fuz__03-FACES"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["fuz__03-FACES_3"].geometry}
              material={materials["fuz__03-FACES_0"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder14-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0.384, 3.047, 8.329]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere01-FACES_1"].geometry}
            material={materials["Sphere01-FACES"]}
            position={[-0.159, 3.12, 8.289]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Capsule01-FACES_1"].geometry}
            material={materials["Capsule01-FACES"]}
            position={[-0.162, 3.042, 8.218]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder13-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[-0.053, 3.036, 8.307]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder12-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0, 2.989, 8.227]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line11-FACES_1"].geometry}
            material={materials["Box01-FACES"]}
            position={[-0.922, 0.42, 0.097]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line10-FACES_1"].geometry}
            material={materials["Box01-FACES"]}
            position={[-0.922, 0.42, -0.162]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Box01-FACES_1"].geometry}
            material={materials["Box01-FACES"]}
            position={[-0.852, 0.401, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line09-FACES_1"].geometry}
            material={materials["Line08-FACES"]}
            position={[0, 2.145, 2.278]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line08-FACES_1"].geometry}
            material={materials["Line08-FACES"]}
            position={[0, 2.145, 2.278]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line07-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0, 0.289, 0.004]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line06-FACES_1"].geometry}
            material={materials["Line06-FACES"]}
            position={[0, 0.587, -0.023]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line29-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[-0.631, 0.299, -2.396]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder11-FACES_1"].geometry}
            material={materials["Cylinder11-FACES"]}
            position={[0, 0.292, -0.013]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line04-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0, 0.289, 0.004]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line03-FACES_1"].geometry}
            material={materials["Line03-FACES"]}
            position={[0, 1.338, 6.488]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line02-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0, 0.194, -2.931]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle03-FACES_1"].geometry}
            material={materials["Cylinder09-FACES"]}
            position={[0, 0.139, -2.956]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Circle02-FACES_1"].geometry}
            material={materials["Cylinder09-FACES"]}
            position={[0, 0.251, -2.919]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Line01-FACES_1"].geometry}
            material={materials["Cylinder08-FACES"]}
            position={[0, 0.08, -2.791]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder09-FACES_1"].geometry}
            material={materials["Cylinder09-FACES"]}
            position={[0, 0.03, -2.662]}
          />
          <group position={[0, 0.535, -2.849]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder08-FACES_1"].geometry}
              material={materials["Cylinder08-FACES"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder08-FACES_3"].geometry}
              material={materials["Cylinder08-FACES_0"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Tube02-FACES_1"].geometry}
            material={materials["Tube02-FACES"]}
            position={[0, 2.203, -1.488]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Torus02-FACES_1"].geometry}
            material={materials["Torus02-FACES"]}
            position={[0, 0.032, -2.663]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder05-FACES_1"].geometry}
            material={materials["Cylinder05-FACES"]}
            position={[0, 0.03, -2.662]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder04-FACES_1"].geometry}
            material={materials["Cylinder04-FACES"]}
            position={[0, 0.292, -0.013]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Torus01-FACES_1"].geometry}
            material={materials["Torus01-FACES"]}
            position={[0, 0.297, -0.017]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Ellipse09-FACES_1"].geometry}
            material={materials["Ellipse09-FACES"]}
            position={[0, 2.062, 6.159]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder03-FACES_1"].geometry}
            material={materials["Cylinder03-FACES"]}
            position={[-0.001, 2.182, 6.775]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder01-FACES_1"].geometry}
            material={materials["Cylinder01-FACES"]}
            position={[0, 2.224, -2.609]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/heli.glb");