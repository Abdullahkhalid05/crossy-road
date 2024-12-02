    // import { useFrame, useLoader } from '@react-three/fiber';
    // import React, { useEffect, useRef, useState , useCallback} from 'react';
    // import {  DoubleSide, TextureLoader } from 'three';

    // function Circle() {
    //     const refCircle = useRef();
    //     const refCircle2 = useRef();
    //     const [xposition , setxposition] = useState(-10);
    //     const [xposition2 , setxposition2] = useState(-1);
    //     const [zposition , setzposition] = useState(0.54);
    //     const [targetZ, setTargetZ] = useState(0.54);

    //     useFrame(()=>{
    //         setxposition((prevx)=>{ 
    //             const newX = prevx + 0.1;
    //             return newX > 10 ? -10 : newX;
    //         });
    //         if (refCircle.current) {
    //             refCircle.current.position.x = xposition;
    //             const lerpFactor = 0.1; // Adjust speed of transition
    //             refCircle.current.position.z += (targetZ - refCircle.current.position.z) * lerpFactor;
    //         }
    //         setxposition2((prevx)=>{ 
    //             const newX = prevx + 0.1;
    //             return newX > 10 ? -10 : newX;
    //         })
    //         // if (refCircle2.current) {
    //         //     refCircle2.current.position.x = xposition2;
    //         // }
    //     })
    //     const handleKeyDown = useCallback((e) => {
    //         if (e.code === 'Space' || e.code === 'ArrowUp') {
    //             setTargetZ(-10); // Set target Z position
    //         }
    //     }, []);
    //      const texture = useLoader(TextureLoader , [
    //         '/textures/mat.png',
    //         '/textures/mat3.jpg',
    //         '/textures/mat5.png',
    //         // '/textures/mat5.png',
    //         // '/textures/mat6.png'
            
    //      ])

    //      useEffect(()=>{
    //         window.addEventListener("keydown" , handleKeyDown);
    //         return window.removeEventListener("keydown" , handleKeyDown);
    //      },[handleKeyDown]  )
    //     return (
    //         <>
    //             <mesh 
    //             ref={refCircle} position={[xposition, 0, zposition]} rotation={[Math.PI/2, 0, 0]}>
    //                 <boxGeometry args={[1, 1, 1]} />
    //                 <meshStandardMaterial  map={texture[1]}  side={DoubleSide} />
    //             </mesh>
    //             <mesh 
    //             ref={refCircle2} position={[xposition2, 0, 1.2]} rotation={[Math.PI/2, 0, 0]}>
    //                 <boxGeometry args={[1, 1, 1]} />
    //                 <meshStandardMaterial  map={texture[1]}  side={DoubleSide} />
    //             </mesh>
    //         </>
    //     );
    // }

    // export default Circle;


    // import { useFrame, useLoader } from '@react-three/fiber';
    // import React, { useEffect, useRef, useState, useCallback } from 'react';
    // import { DoubleSide, TextureLoader } from 'three';

    // function Circle() {
    //     const refCircle = useRef();
    //     const refCircle2 = useRef();
    //     const [xposition, setxposition] = useState(-10);
    //     const [xposition2, setxposition2] = useState(-1);
    //     const [targetZ1, setTargetZ1] = useState(0.54); 
    //     const [targetZ2, setTargetZ2] = useState(0.54);  
    //     useFrame(() => {

    //         setxposition((prevx) => {
    //             const newX = prevx + 0.1;
    //             return newX > 10 ? -10 : newX;
    //         });
    //         // setTargetZ1((prev) =>{
    //         //     const newZ = prev + 5;
    //         //     return newZ;
    //         // })



    //         if (refCircle.current) {
    //             refCircle.current.position.x = xposition;

    //             const lerpFactor1 = 0.1;
    //             refCircle.current.position.z += (targetZ1 - refCircle.current.position.z) * lerpFactor1;
    //             refCircle.current.position.z += 3;
    //             // refCircle.current.position.z =4;
                

    //         }


    //         // Update X position for the second box
    //         setxposition2((prevx) => {
    //             const newX = prevx + 0.1;
    //             return newX > 10 ? -10 : newX;
    //         });
    //         const positionZ= 1.2
    //         if (refCircle2.current) {
    //             refCircle2.current.position.x = xposition2;

    //             // Smooth Z transition for the second box
    //             const lerpFactor2 = 0.1;
    //             refCircle2.current.position.z += (targetZ2 - refCircle2.current.position.z) * lerpFactor2;
    //         }
    //     });
    //     const handleKeyDown = useCallback((e) => {
    //         if (e.code === 'Space' || e.code === 'ArrowUp') {
    //             setTargetZ1 ((prev) => prev + (-10)); 
    //             setTargetZ2 ((prev) => prev + (-10)); 
    //         }
    //     }, []);

    //     const texture = useLoader(TextureLoader, [
    //         '/textures/mat.png',
    //         '/textures/mat3.jpg',
    //         '/textures/mat5.png',
    //     ]);

    //     useEffect(() => {
    //         window.addEventListener('keydown', handleKeyDown);
    //         return () => {
    //             window.removeEventListener('keydown', handleKeyDown);
    //         };
    //     }, [handleKeyDown]);

    //     return (
    //         <>
    //             <mesh
    //                 ref={refCircle}
    //                 position={[xposition, 0, 1.2]}
    //                 rotation={[Math.PI / 2, 0, 0]}
    //             >
    //                 <boxGeometry args={[1, 1, 1]} />
    //                 <meshStandardMaterial map={texture[1]} side={DoubleSide} />
    //             </mesh>
    //             <mesh
    //                 ref={refCircle2}
    //                 position={[xposition2, 0, 1.2]}
    //                 rotation={[Math.PI / 2, 0, 0]}
    //             >
    //                 <boxGeometry args={[1, 1, 1]} />
    //                 <meshStandardMaterial map={texture[1]} side={DoubleSide} />
    //             </mesh>
    //         </>
    //     );
    // }

    // export default Circle;
    import { useFrame, useLoader } from '@react-three/fiber';
    import React, { useEffect, useRef, useState, useCallback } from 'react';
    import { DoubleSide, TextureLoader } from 'three';
    
    function Circle() {
        const groupRef = useRef();
        const [xposition, setxposition] = useState(-10); // For horizontal movement
        const [targetZ, setTargetZ] = useState(Array.from({ length: 20 }, (_, i) => i * 2)); // 20 Z positions
    
        // Update positions in the animation loop
        useFrame(() => {
            setxposition((prevx) => {
                const newX = prevx + 0.1;
                return newX > 10 ? -10 : newX; // Reset when it goes out of bounds
            });
    
            const lerpFactor = 0.1;
            if (groupRef.current) {
                groupRef.current.children.forEach((box, index) => {
                    // Horizontal movement
                    box.position.x = xposition;
    
                    // Smooth Z movement
                    box.position.z += (targetZ[index] - box.position.z) * lerpFactor;
                });
            }
        });
    
        // Shift all Z positions on keydown
        const handleKeyDown = useCallback((e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                setTargetZ((prev) => prev.map((z) => z - 10));
            }
        }, []);
    
        // Load textures
        const texture = useLoader(TextureLoader, [
            '/textures/mat.png',
            '/textures/mat3.jpg',
            '/textures/mat5.png',
        ]);
    
        useEffect(() => {
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, [handleKeyDown]);
    
        return (
            <group ref={groupRef}>
                {targetZ.map((zPos, index) => (
                    <mesh
                        key={index}
                        position={[xposition, 0, zPos]} // Initial position
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial map={texture[index % texture.length]} side={DoubleSide} />
                    </mesh>
                ))}
            </group>
        );
    }
    
    export default Circle;
    