import React, { useEffect, useRef , useState} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Model from './model.jsx'

function RotatingBox() {
  const boxRef = useRef();

  const [yVelocity, setyVelocity] = useState(0); 
  const [zVelocity, setzVelocity] = useState(0); 
  const [xVelocity, setxVelocity] = useState(0); 
  const [isJumping, setIsJumping] = useState(false);
  
  useFrame(() => {
    if (boxRef.current && PerspectiveCamera) {

      boxRef.current.position.y += yVelocity;
      boxRef.current.position.z += zVelocity;
      boxRef.current.position.x += xVelocity;


  
      if (boxRef.current.position.y > 0) {
        setyVelocity((prev) => prev - 0.01); 
      } else {

        boxRef.current.position.y = 0;
        setyVelocity(0);
        setzVelocity(0);
        setxVelocity(0);
        setIsJumping(false);
      }
    }
  });
  
  const handleKeyDown = (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp' && !isJumping) {
      setyVelocity(0.1);
      setzVelocity(0.057); 
      setIsJumping(true); 
    }
    if (e.code === 'ArrowLeft' && !isJumping) {
      setxVelocity(0.1);
      setyVelocity(0.1);
    }
    if (e.code === 'ArrowRight' && !isJumping) {
        setyVelocity(-0.1);
      setxVelocity(-0.1);
      setyVelocity(0.1);
    }
  };


  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isJumping]);
  

  return (
    <mesh ref={boxRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial  />
    </mesh>
  );
}


function Ground(){
  return(
    <mesh position={[0 , -0.5 , 0]} rotation={[-Math.PI / 2, 0, 0]} >
        <planeGeometry args={[100 , 100]} />
        <meshStandardMaterial color= {"green"} />
    </mesh>
  )
}


export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={5} />
        <pointLight position={[10, 10, 10]} />
        {/* <OrbitControls enableZoom={false} enableRotate={false}/>  */}
        <OrbitControls/>
        <Ground/>
        <RotatingBox />

        <Model/>
        <Model  />
        <PerspectiveCamera  makeDefault position={[0 , 1.8 , -3 ]} fov={75 } near={0.1} far={1000} />

      </Canvas>
    </div>
  );
}
