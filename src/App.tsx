import "./App.css";
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import modelPath from "./ball.glb";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
  const gltf = useGLTF(modelPath) as unknown as GLTF;
  useFrame(() => (gltf.scene.rotation.y += 0.002));
  return <primitive object={gltf.scene} />;
}
function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <color attach="background" args={[0x333353]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
