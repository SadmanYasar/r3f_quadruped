import { RigidBody, InstancedRigidBodies } from "@react-three/rapier";
import { useGame } from "ecctrl";
import { useRef, useMemo } from "react";
import { InstancedMesh, Object3D } from "three";
// import { editable as e } from '@theatre/r3f'

export default function Ground() {
  const buildingsRef = useRef<InstancedMesh>(null);

  // Generate random building positions and sizes
  const buildings = useMemo(() => {
    const buildingCount = 350; // Increased count for denser city layout
    const instances = [];
    const dummy = new Object3D();

    for (let i = 0; i < buildingCount; i++) {
      const x = (Math.random() - 0.5) * 100; // Reduced spread to 100 units for closer buildings
      const z = (Math.random() - 0.5) * 100; // Reduced spread to 100 units
      const height = Math.random() * 6 + 2; // Buildings 2-8 units tall (taller for tower effect)
      const width = Math.random() * 0.6 + 0.2; // Buildings 0.2-0.8 units wide (much narrower)
      const depth = Math.random() * 0.6 + 0.2; // Buildings 0.2-0.8 units deep (much narrower)

      // Position building on ground
      const y = 5 + height / 2;
      dummy.position.set(x, y, z);
      dummy.scale.set(width, height, depth);
      dummy.updateMatrix();

      instances.push({
        key: i,
        position: [x, y, z] as [number, number, number],
        rotation: [0, Math.random() * Math.PI, 0] as [number, number, number],
        scale: [width, height, depth] as [number, number, number],
      });

      if (buildingsRef.current) {
        buildingsRef.current.setMatrixAt(i, dummy.matrix);
      }
    }

    return instances;
  }, []);

  return (
    <>
      {/* Ground */}
      <RigidBody type="fixed">
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[300, 10, 300]} />
          <meshPhongMaterial color="#ff0000" opacity={0.4} transparent />
        </mesh>
      </RigidBody>

      {/* Dynamic Buildings (changed from fixed to dynamic to enable movement) */}
      <InstancedRigidBodies
        instances={buildings}
        colliders="cuboid"
        type="dynamic"
        name={`building`}
        // onCollisionEnter={(e) => {
        //   // Check if the collision involves the player
        //   const isPlayerCollision =
        //     e.colliderObject.name === "playerCube" ||
        //     e.colliderObject.name === "character-capsule-collider";

        //   if (isPlayerCollision) {
        //     // Determine which object is the building (the one that's not the player)
        //     const buildingRigidBody =
        //       e.colliderObject.name === "playerCube" ||
        //       e.colliderObject.name === "character-capsule-collider"
        //         ? e.other.rigidBody // If this is the player, then other is the building
        //         : e.rigidBody; // If other is the player, then this is the building

        //     if (buildingRigidBody) {
        //       // Apply forces only to the building to make it fall down
        //       const forceX = (Math.random() - 0.5) * 12; // Increased from 4 to 12
        //       const forceZ = (Math.random() - 0.5) * 12; // Increased from 4 to 12
        //       buildingRigidBody.applyImpulse(
        //         { x: forceX, y: 0, z: forceZ }, // No upward force, let gravity handle falling
        //         true
        //       );
        //       buildingRigidBody.applyTorqueImpulse(
        //         { x: forceX * 0.5, y: 0, z: forceZ * 0.5 }, // Increased torque for more dramatic falling
        //         true
        //       );
        //     }
        //   }
        // }}
        mass={0}
        restitution={0.2}
        // friction={0.7}
        linearDamping={0.5}
        angularDamping={0.6}
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
            color="#666666"
            roughness={0.5}
            metalness={0.1}
          />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
