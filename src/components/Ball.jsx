import React from 'react';
import { useGLTF } from "@react-three/drei";

const Ball = ({ position }) => {
  const { nodes, materials } = useGLTF("/models/basketball.glb");

  return (
    <mesh
      position={position}
      geometry={nodes.Sphere.geometry}
      material={materials["Material.001"]}
      castShadow
      receiveShadow
    />
  );
};

useGLTF.preload("/models/basketball.glb");

export default Ball;