import React, { Suspense, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import Loader from '../components/Loader'
import Island from "../models/Island";
// import { Sky } from "../models/Sky";
import Bird from "../models/Bird";
import Plane  from "../models/Plane";
function Home() {
  const [isRotating,setisRotating]=useState(false)
      const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43.4];
        let rotation = [0.1, 4.7, 0];

          if (window.innerWidth < 768) {
              screenScale = [0.9, 0.9, 0.9];
   
          } else {
              screenScale = [1, 1, 1];

          }

        return [screenScale, screenPosition, rotation];
  };
  const [IslandScale,IslandPosition,IslandRotation] = adjustIslandForScreenSize();
   const adjustPlaneForScreenSize = () => {
       let planeScale = [1.5, 1.5, 1.5];
       let planePosition = [0, -1.5, 0];
  
       if (window.innerWidth < 768) {
         planeScale = [0.9, 0.9, 0.9];
            planePosition = [0, -1.5, 0];
       } else {
         planeScale = [3, 3, 3];
         planePosition = [0, -4, -4];
       }

       return [planeScale, planePosition];
  };
  const [planeScale,  planePosition] =
      adjustPlaneForScreenSize();
  return (
      <section className="w-full h-screen relative">
          <Canvas
              className={`w - full h-screen bg-transparent ${
                  isRotating ? "cursor-grabbing" : "cursor - grab"
              }`}
              camera={{ near: 0.1, far: 1000 }}
          >
              <Suspense fallback={<Loader />}>
                  <directionalLight position={[1, 1, 1]} intensity={2} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 5, 10]} intensity={2} />
                  <spotLight
                      position={[0, 50, 10]}
                      angle={0.15}
                      penumbra={1}
                      intensity={2}
                  />
                  <hemisphereLight
                    //   skyColor="#b1e1ff"
                      groundColor="#000000"
                      intensity={1}
                  />
                  <Bird />
                  {/* <Sky /> */}
                  <Island
                      position={IslandPosition}
                      scale={IslandScale}
                      rotation={IslandRotation}
            isRotating={isRotating}
            setisRotating={setisRotating}/>
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
          />
              </Suspense>
          </Canvas>
      </section>
  );
}

export default Home