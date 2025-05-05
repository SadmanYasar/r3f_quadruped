import { intersectionTextureLoader } from "../utils/constants";

export const Intersection = (props: any) => {
  return (
    <mesh {...props}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial map={intersectionTextureLoader} />
    </mesh>
  );
};
