import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Model as CharacterModel, CatActionName } from "./CharacterModel";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { CuboidCollider } from "@react-three/rapier";
import Tommy from "./Tommy-animated";
import PopCat from "./PopCat";

export default function Player() {
  const ref = useRef<any>();

  const characterURL = "./cat.glb";

  const animationSet: Record<string, CatActionName> = {
    idle: "Idle",
    walk: "Walk",
    run: "Run",
    jump: "Jump_Start",
    jumpIdle: "Falling",
    jumpLand: "Jump_Land",
    fall: "Falling", // This is for falling from high sky
    action1: "Attack",
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
      const position = ref.current.translation;

      // Reset
      if (position.y < -12) {
        reset();
      }
    }
  });

  return (
    <>
      <Ecctrl
        ref={ref}
        // debug
        animated
        position={[0, 0.1, 10]}
        camInitDir={{ x: 0, y: -2.09, z: 0 }}
        autoBalance={false}
        camInitDis={-2}
        capsuleRadius={0.3}
        capsuleHalfHeight={0.35}
        floatHeight={0}
        mode="FixedCamera"
      >
        {/* <CuboidCollider
          args={[0.2, 0.2, 0.1]}
          position={[0, 0.1, 0.5]}
          name="playerCube"
        /> */}
        <EcctrlAnimation
          characterURL={characterURL}
          animationSet={animationSet}
        >
          <CharacterModel
            scale={[0.017, 0.017, 0.017]}
            position={[0, -0.16, 0]}
          />
        </EcctrlAnimation>
      </Ecctrl>
    </>
  );
}
