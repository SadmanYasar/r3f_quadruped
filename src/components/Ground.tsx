import { RigidBody, InstancedRigidBodies } from "@react-three/rapier";
import { useGame } from "ecctrl";
import { useRef, useMemo } from "react";
import { InstancedMesh, Object3D } from "three";
// import { editable as e } from '@theatre/r3f'

export default function Ground() {
  const buildingsRef = useRef<InstancedMesh>(null);

  // Generate random building positions and sizes
  // const buildings = useMemo(() => {
  //   const buildingCount = 1; // Number of building locations
  //   const instances = [];
  //   const dummy = new Object3D();
  //   const blockSize = 0.5;

  //   for (let i = 0; i < buildingCount; i++) {
  //     const x = (Math.random() - 0.5) * 30; // Closer spread for dense city
  //     const z = (Math.random() - 0.5) * 30; // Closer spread for dense city

  //     // Determine the number of blocks to stack for this building
  //     const stackHeight = Math.floor(Math.random() * 10) + 5; // Stack 5 to 14 blocks high

  //     for (let j = 0; j < stackHeight; j++) {
  //       // Position each block on top of the previous one, starting from ground level (-0.5)
  //       const y = -0.5 + j * blockSize + blockSize / 2;

  //       // Slight offset for a more natural look
  //       const offsetX = x + (Math.random() - 0.5) * 0.1;
  //       const offsetZ = z + (Math.random() - 0.5) * 0.1;

  //       dummy.position.set(offsetX, y, offsetZ);
  //       dummy.scale.set(blockSize, blockSize, blockSize);
  //       dummy.updateMatrix();

  //       instances.push({
  //         key: `building_${i}_${j}`, // Unique key for each block
  //         position: [offsetX, y, offsetZ] as [number, number, number],
  //         rotation: [0, Math.random() * Math.PI * 2, 0] as [
  //           number,
  //           number,
  //           number
  //         ],
  //         scale: [blockSize, blockSize, blockSize] as [number, number, number],
  //       });
  //     }
  //   }

  //   return instances;
  // }, []);

  return (
    <>
      {/* Ground */}
      <RigidBody type="fixed">
        <mesh castShadow receiveShadow position={[0, -1, 0]}>
          <boxGeometry args={[100, 1, 100]} />
          <meshStandardMaterial color={"#ff5744"} opacity={0.4} transparent />
        </mesh>
      </RigidBody>
      <RigidBody>
        <mesh receiveShadow castShadow position={[0, 0.1, 11]}>
          <boxGeometry args={[0.4, 1, 0.4]} />
          <meshStandardMaterial color={"lightsteelblue"} />
        </mesh>
      </RigidBody>

      {/* Dynamic Buildings with stacked blocks */}
      {/* <InstancedRigidBodies
        instances={buildings}
        colliders="cuboid"
        type="dynamic"
        name={`building`}
        mass={1}
        restitution={0.2}
        friction={0.7}
      >
        <instancedMesh
          ref={buildingsRef}
          args={[undefined, undefined, buildings.length]}
          castShadow
          receiveShadow
          frustumCulled={true}
        >
          <boxGeometry />
          <meshStandardMaterial
            color="#888888"
            roughness={0.7}
            metalness={0.2}
          />
        </instancedMesh>
      </InstancedRigidBodies> */}
    </>
  );
}
