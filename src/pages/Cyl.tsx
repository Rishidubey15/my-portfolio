import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import {useFrame} from '@react-three/fiber';
import { useRef } from "react";


function Cyl() {
  const tex = useTexture("./projects2.png");
  const cyl = useRef(null);

  useFrame((state, delta)=> {
    if (cyl.current) {
      cyl.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
    <group rotation={[0, -0.25, 0.25]}>
      <mesh ref = {cyl}>
        <cylinderGeometry args={[2, 2, 2, 30, 30, true]} />
        <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
    </>
  );
}

export default Cyl;
