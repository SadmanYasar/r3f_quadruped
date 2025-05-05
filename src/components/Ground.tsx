import { RigidBody } from "@react-three/rapier";
import { useGame } from "ecctrl";
import { useRef } from "react";
// import { editable as e } from '@theatre/r3f'

export default function Ground() {
  //   const circleRef = useRef<any>();
  //   const date = useRef(0);

  //   const setMoveToPoint = useGame((state: any) => state.setMoveToPoint);
  return (
    // <RigidBody type="fixed" colliders="trimesh" ccd>
    //     <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
    //         <meshStandardMaterial color={'#888888'} />
    //     </Plane>
    // </RigidBody>
    // <RigidBody type="fixed" ccd>
    //     <mesh position={[0, -0.5, 0]}>
    //         <boxGeometry args={[20, 50, 20]} />
    //         <meshStandardMaterial color={"blue"} />
    //     </mesh>
    // </RigidBody>
    <>
      {/* <mesh ref={circleRef} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.2, 0.3]} />
        <meshBasicMaterial color={0x000000} transparent opacity={0.25} />
      </mesh> */}
      <RigidBody type="fixed" ccd>
        <mesh
          castShadow
          receiveShadow
          position={[0, -5.3, 0]}
          //   onPointerMove={({ point }) => {
          //     if (circleRef.current) {
          //       circleRef.current.position.z = point.z;
          //       circleRef.current.position.x = point.x;
          //       circleRef.current.position.y = point.y + 0.01;
          //     }
          //   }}
          //   onPointerDown={() => {
          //     date.current = Date.now();
          //   }}
          //   onPointerUp={({ point }) => {
          //     if (Date.now() - date.current < 200) {
          //       // a quick click
          //       setMoveToPoint(point);
          //     }
          //   }}
        >
          <boxGeometry args={[300, 10, 300]} />
          <meshPhongMaterial color="#ff0000" opacity={0} transparent />
        </mesh>

        {/* <e.mesh theatreKey="Plane About" castShadow receiveShadow position={[10, -5.3, 0]}>
                <boxGeometry args={[10, 10, 10]} />
                <meshPhongMaterial color="#ff0000" opacity={0.1} transparent />
            </e.mesh>

            <e.mesh theatreKey="Plane Contact" castShadow receiveShadow position={[-10, -5.3, 0]}>
                <boxGeometry args={[10, 10, 10]} />
                <meshPhongMaterial color="#ff0000" opacity={0} transparent />
            </e.mesh>

            <e.mesh theatreKey="Plane Projects" castShadow receiveShadow position={[10, -5.3, 10]}>
                <boxGeometry args={[10, 10, 10]} />
                <meshPhongMaterial color="#ff0000" opacity={0} transparent />
            </e.mesh> */}
      </RigidBody>
    </>
  );
}
