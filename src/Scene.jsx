import React from "react";
import { Box, Center, Environment, OrbitControls } from "@react-three/drei";
import Table from "./components/Table";
import Ball from "./components/Ball";
import { Physics } from "@react-three/rapier";

const Scene = () => {
  return (
    <>
      <color attach="background" args={["#7ca1f0"]} />

      <ambientLight />
      <directionalLight position={[0, 1, 2]} intensity={1.5} />
      <Environment preset="city" />

      <OrbitControls makeDefault />

      <Physics>
        <Center>
          <Table position={[0, 0, 0]} />
          <Ball position={[0.25, 1.5, 0.2]} />
        </Center>
      </Physics>
    </>
  );
};

export default Scene;
