import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'

const Table = (props) => {
  const { nodes, materials } = useGLTF('/models/table.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table.geometry}
        material={materials.Wood}
        position={[0, 0.068, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Controls.geometry}
        material={materials.Wood}
        position={[4.135, 0.092, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Control_A.geometry}
        material={materials.Red}
        position={[4.184, 0.129, 0.744]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Control_A_Text.geometry}
          material={materials.White}
          position={[0.237, 0.046, 0.21]}
          rotation={[Math.PI / 2, 1.179, -Math.PI / 2]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Control_B.geometry}
        material={materials.Green}
        position={[4.183, 0.128, -0.754]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Control_B_Text.geometry}
          material={materials.White}
          position={[0.25, 0.043, 0.207]}
          rotation={[Math.PI / 2, 1.184, -Math.PI / 2]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Thruster_B.geometry}
        material={materials.Black}
        position={[2.259, -0.189, -0.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Thruster_A.geometry}
        material={materials.Black}
        position={[2.259, -0.189, 0.765]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hide_Thruster.geometry}
        material={materials.Black}
        position={[2.257, -0.047, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials.Wood}
        position={[-2.235, 0.565, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Red}
        position={[-2.235, 1.177, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Panel.geometry}
        material={materials.Wood}
        position={[-2.234, 1.814, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials.Red}
        position={[-1.686, 1.46, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        position={[0.497, 1.54, 0.005]}
      >
        <MeshTransmissionMaterial anisotropy={0.1} chromaticAberration={0.04} distortionScale={0} temporalDistortion={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/table.gltf');

export default Table;