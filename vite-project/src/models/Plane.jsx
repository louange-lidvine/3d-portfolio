import React from 'react'
import PlaneScene from "../models/Plane";
import { useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(PlaneScene);
  return (
      <mesh >
          <primitive object={scene} />
      </mesh>
  );
}
 export default Plane;