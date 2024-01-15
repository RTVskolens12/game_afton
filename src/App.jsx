import {PointerLockControls, Sky} from "@react-three/drei";
import {Ground} from "./Ground.jsx";
import {Physics, RigidBody} from "@react-three/rapier";
import {Player} from "./Player.jsx";
import {Cubes} from "./Cube.jsx";
import {SkibidiToilet} from "./SkibidiToilet.jsx"
import {PurpleGuy} from "./PurpleGuy.jsx"
import { FreddyFazbear } from "./FreddyFazbear.jsx";
import { Helicopter } from "./Helicopter.jsx";
import (FreddyFazbear)
import { TwinTowers } from "./TwinTowers.jsx";

export const App = () => {
    return (
      <>
          <PointerLockControls />
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={1.5} />
          <Physics gravity={[0, -20, 0]}>
            <Ground />
            <Player />
            <Cubes />
          </Physics>

          <group position={[69, 3, 69]}>
              <SkibidiToilet />
          </group>
          <group position={[5, 0, 0]}>
              <PurpleGuy />
          </group>
          <group position={[10, 30, 40]}>
              <Helicopter />
          </group>
          <group position={[9, -3, 8]}>
              <FreddyFazbear />
          </group>
          <group position={[13, -5, -8]}> 
              <TwinTowers />
          </group>
     </>
  )
}

export default App