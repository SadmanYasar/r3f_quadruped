import { Canvas, extend } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import {
  Billboard,
  Environment,
  GizmoHelper,
  GizmoViewport,
  Image,
  KeyboardControls,
  Loader,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { EcctrlJoystick } from "ecctrl";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import demoProjectState from "./state.json";
import nyan from "./assets/nyan.png";
import strat from "./assets/strat.png";

// our Theatrjs project sheet, we'll use this later
const demoSheet = getProject("Demo Project", { state: demoProjectState }).sheet(
  "Demo Sheet"
);

// if (import.meta.env.DEV) {
//   studio.initialize()
//   studio.extend(extension)
// }

import Lights from "./components/Lights";
// import Map from './Map'
import Player from "./components/Player";
import ViceCity from "./components/Vice_city_map";
import Tommy from "./components/Tommy-animated";
import PopCat from "./components/PopCat";
import { useControls } from "leva";
import Ground from "./components/Ground";
import { Perf } from "r3f-perf";
import * as THREE from "three";

extend({ Canvas });

const EcctrlJoystickControls = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  useEffect(() => {
    // Check if using a touch control device, show/hide joystick
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsTouchScreen(false);
        console.log("Desktop");
      } else {
        setIsTouchScreen(true);
        console.log("Mobile");
      }
    };

    handleResize(); // Check initial width

    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);
  return (
    <>
      {isTouchScreen && (
        <EcctrlJoystick
          joystickBaseProps={{
            receiveShadow: true,
            material: new THREE.MeshStandardMaterial({ color: "grey" }),
          }}
        />
      )}
    </>
  );
};

export default function App() {
  //create a timer to display the current time in HH:MM format
  const [time, setTime] = useState(new Date());
  const { ground, zoom } = useControls({
    //environment
    ground: { height: 35, radius: 30, scale: 100 },
    zoom: {
      value: 1,
      min: 0.1,
      max: 1000,
    },
  });

  //update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   demoSheet.project.ready.then(() => demoSheet.sequencplay({ iterationCount: 1 }))
  // }, [])

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <>
      <div className="max-sm:hidden lg:block absolute top-0 right-0 text-white z-[99] flex flex-col p-4 space-y-1">
        <div className="flex flex-row">
          <img src="fist_icon.webp" alt="fist" className="w-20 h-20" />
          <div className="flex flex-col space-y-1 text-3xl font-bold">
            <div>
              {time.getHours().toString().padStart(2, "0")}:
              {time.getMinutes().toString().padStart(2, "0")}
            </div>
            <div className="h-4 border-4 w-full border-black bg-[#E7E4E7]"></div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-full h-4 bg-red-600 border-4 border-black"></div>
        </div>
        <div className="text-3xl font-bold text-green-600 money">$99999999</div>
      </div>
      <EcctrlJoystickControls />
      <Canvas
        shadows
        // camera={{
        //   fov: 120,
        //   near: 0.1,
        //   far: 1000,
        //   zoom: 150,
        // }}
        // orthographic
        // onPointerDown={(e) => {
        //   if (e.pointerType === "mouse") {
        //     (e.target as HTMLCanvasElement).requestPointerLock();
        //   }
        // }}
      >
        {/* <OrthographicCamera
          makeDefault
          zoom={100}
          far={10000}
          near={0.1}
          position={[0, 0, -300]}
        /> */}
        <color attach={"background"} args={["black"]} />
        {/* <ContactShadows /> */}
        <SheetProvider sheet={demoSheet}>
          <Perf position="top-left" />
          <axesHelper args={[3]} />
          <Environment preset="apartment" />
          {/* <Sphere scale={[80, 80, 80]} rotation-y={Math.PI / 2}>
            <LayerMaterial
              // lighting='physical'
              // transmission={1}
              side={THREE.BackSide}
            >
              <Gradient
                colorA={"magenta"}
                colorB={"blue"}
                axes='y'
                start={0}
                end={0.4}
              />
            </LayerMaterial>
          </Sphere> */}
          {/* <Stars /> */}
          <Lights />
          {/* <Stats /> */}
          <color attach="background" args={["white"]} />
          <Physics timeStep="vary" debug>
            <KeyboardControls map={keyboardMap}>
              <Suspense fallback={null}>
                <Player />
              </Suspense>
            </KeyboardControls>
            <Suspense fallback={null}>
              <Tommy />
            </Suspense>
            <Ground />
            {/* <MainRoad position={[0, -0.3, 0]} rotation={[-1.58, 0, 0]} /> */}
            {/* <Intersection position={[30, -0.3, 0]} rotation={[-1.58, 0, 0]} /> */}
            {/* <MainRoad position={[60, -0.3, 0]} rotation={[-1.58, 0, 0]} /> */}

            {/* <ViceCity /> */}
            {/* <ViceCityColliderMesh /> */}
            {/* <ViceCityColliderMesh /> */}
            {/* <GroveStreet visible={false} /> */}
          </Physics>
          <Billboard>
            <group>
              <Image url={nyan} transparent />
            </group>
            <group>
              <Image url={strat} transparent zoom={0.35} />
            </group>
          </Billboard>
          {/* <PopCat /> */}
          {/* <Instances>
            <Building_2 />
            <Building_2 position={[-8.17, -0.23, 25.55]} rotation={[0, -1.54, 0]} scale={[0.5, 0.5, 0.5]} />
            <Building_2 position={[50, -0.23, 25.55]} rotation={[0, -1.54, 0]} scale={[0.5, 0.5, 0.5]} />
          </Instances> */}
        </SheetProvider>
      </Canvas>
      <Loader />
    </>
  );
}
