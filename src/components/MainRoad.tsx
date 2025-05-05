import { mainRoadTextureLoader } from "../utils/constants";

export const MainRoad = (props: any) => {
  return (
    <mesh theatreKey="road1" {...props}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial map={mainRoadTextureLoader} />
    </mesh>
  );
};
