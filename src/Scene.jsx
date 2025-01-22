import React from 'react';
import { Box, Center, Environment, OrbitControls } from '@react-three/drei';
import Ball from './components/Ball'
import Table from './Components/Table';

const Scene = () => {
  return (
    <>
      <color attach="background" args={["#ddc28d"]} />

      <ambientLight />
      <directionalLight position={[0, 1, 2]} intensity={1.5} />
      <Environment preset="city" />

      <OrbitControls makeDefault />

      <Center>
        <Table position={[0, 0, 0]} />
        <Ball position={[0.25, 1.5, 0]} />
      </Center>
    </>
  );
}

export default Scene;