import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import CharacterModel from "./CharacterModel";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { CuboidCollider } from "@react-three/rapier";
import Tommy from "./Tommy-animated";
import PopCat from "./PopCat";

export default function Player() {
  const ref = useRef<any>();

  const characterURL = "./cat.glb";

  const animationSet = {
    idle: "cat_rig_Walk",
    walk: "cat_rig_Walk",
    run: "cat_rig_Run",
    jump: "cat_rig_Walk",
    jumpIdle: "cat_rig_Walk",
    jumpLand: "cat_rig_Walk",
    fall: "cat_rig_Walk",
  };

  const reset = () => {
    if (ref.current) {
      ref.current.setTranslation({ x: 24, y: 2, z: 3 });
      ref.current.setLinvel({ x: 0, y: 0, z: 0 });
      ref.current.setAngvel({ x: 0, y: 0, z: 0 });
    }
  };

  useFrame(() => {
    if (ref.current) {
      const position = ref.current.translation();

      // Reset
      if (position.y < -3) {
        reset();
      }
    }
  });

  return (
    <>
      <Ecctrl
        ref={ref}
        debug
        animated
        position={[26, 0.54, 1.54]}
        // position={[24, -0.54, 3]}
        camInitDir={{ x: 0, y: -2.09, z: 0 }}
        autoBalance={false}
        // springK={2}
        // dampingC={0.2}
        // autoBalanceSpringK={1.2}
        // autoBalanceDampingC={0.04}
        // autoBalanceSpringOnY={0.7}
        // autoBalanceDampingOnY={0.05}
        capsuleHalfHeight={0.3}
        // capsuleRadius={0.6}
      >
        <CuboidCollider args={[0.2, 0.2, 0.7]} mass={0} />
        <EcctrlAnimation
          characterURL={characterURL} // Must have property
          animationSet={animationSet} // Must have property
        >
          {/* <mesh>
          <capsuleGeometry args={[0.3, 0.7, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh> */}
          <CharacterModel scale={[3, 3, 3]} position={[0, -0.7, 0]} />
          {/* <CharacterModel /> */}
        </EcctrlAnimation>
      </Ecctrl>
    </>
  );
}
