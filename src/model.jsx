    import { useFrame, useLoader } from '@react-three/fiber';
    import React, { useEffect, useRef, useState , useCallback} from 'react';
    import {  DoubleSide, TextureLoader } from 'three';

    function Circle() {
        const refCircle = useRef();
        const refCircle2 = useRef();
        const [xposition , setxposition] = useState(-10);
        const [xposition2 , setxposition2] = useState(-1);
        const [zposition , setzposition] = useState(1.2);
        const [targetZ, setTargetZ] = useState(0.54);

        useFrame(()=>{
            setxposition((prevx)=>{ 
                const newX = prevx + 0.1;
                return newX > 10 ? -10 : newX;
            });
            if (refCircle.current) {
                refCircle.current.position.x = xposition;
                const lerpFactor = 0.1; // Adjust speed of transition
                refCircle.current.position.z += (targetZ - refCircle.current.position.z) * lerpFactor;
            }
            setxposition2((prevx)=>{ 
                const newX = prevx + 0.1;
                return newX > 10 ? -10 : newX;
            })
            // if (refCircle2.current) {
            //     refCircle2.current.position.x = xposition2;
            // }
        })
        const handleKeyDown = useCallback((e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                setTargetZ(-10); // Set target Z position
            }
        }, []);
         const texture = useLoader(TextureLoader , [
            '/textures/mat.png',
            '/textures/mat3.jpg',
            '/textures/mat5.png',
            // '/textures/mat5.png',
            // '/textures/mat6.png'
            
         ])

         useEffect(()=>{
            window.addEventListener("keydown" , handleKeyDown);
            return window.removeEventListener("keydown" , handleKeyDown);
         },[handleKeyDown]  )
        //  let i = 0;
        //  if (i > 10) {
        //     setTargetZ = setTargetZ + 10; 
        //     i++;
        return (
           
                
            
            <>
                <mesh 
                ref={refCircle} position={[xposition, 0, zposition]} rotation={[Math.PI/2, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial  map={texture[1]}  side={DoubleSide} />
                </mesh>
                <mesh 
                ref={refCircle2} position={[xposition2, 0, zposition]} rotation={[Math.PI/2, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial  map={texture[1]}  side={DoubleSide} />
                </mesh>
            </>
        );
         
    }
    // }

    export default Circle;



//     import { useFrame, useLoader } from '@react-three/fiber';
// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { DoubleSide, TextureLoader } from 'three';

// function Circle() {
//   const [blocks, setBlocks] = useState([
//     { id: 0, xPosition: -10, zPosition: 1.2, targetZ: 0.54 },
//     { id: 1, xPosition: -1, zPosition: 1.2, targetZ: 0.54 },
//     { id: 2, xPosition: 5, zPosition: 1.2, targetZ: 0.54 },
//     { id: 3, xPosition: 8, zPosition: 1.2, targetZ: 0.54 },
//   ]);

//   const texture = useLoader(TextureLoader, [
//     '/textures/mat.png',
//     '/textures/mat3.jpg',
//     '/textures/mat5.png',
//   ]);

//   const handleKeyDown = useCallback((e) => {
//     if (e.code === 'Space' || e.code === 'ArrowUp') {
//       setBlocks((prevBlocks) =>
//         prevBlocks.map((block) => ({
//           ...block,
//           targetZ: - 2, // Move all blocks to target Z position when space or up is pressed
//         }))
//       );
//     }
//   }, []);

//   // Update blocks in each frame
//   useFrame(() => {
//     setBlocks((prevBlocks) =>
//       prevBlocks.map((block) => {
//         const newX = block.xPosition + 0.1;
//         const updatedXPosition = newX > 10 ? -10 : newX; // Reset position if it exceeds boundary
//         const lerpFactor = 0.1;
//         const updatedZPosition = block.zPosition + (block.targetZ - block.zPosition) * lerpFactor;

//         return {
//           ...block,
//           xPosition: updatedXPosition,
//           zPosition: updatedZPosition,
//         };
//       })
//     );
//   });

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleKeyDown]);

//   return (
//     <>
//       {blocks.map((block, index) => (
//         <mesh
//           key={block.id}
//           position={[block.xPosition, 0, block.zPosition]}
//           rotation={[Math.PI / 2, 0, 0]}
//         >
//           <boxGeometry args={[1, 1, 1]} />
//           <meshStandardMaterial map={texture[index % texture.length]} side={DoubleSide} />
//         </mesh>
//       ))}
//     </>
//   );
// }

// export default Circle;



//     // import { useFrame, useLoader } from '@react-three/fiber';
//     // import React, { useEffect, useRef, useState, useCallback } from 'react';
//     // import { DoubleSide, TextureLoader } from 'three';
    
//     // function Circle() {
//     //     const groupRef = useRef();
//     //     const [xposition, setxposition] = useState(1); // For horizontal movement
//     //     const [targetZ, setTargetZ] = useState(Array.from({ length: 20 }, (_, i) => i * 2)); // 20 Z positions
//     //     // const blockNUmber = 40;
//     //     // if (blockNUmber ) {
            
//     //     // }
//     //     // Update positions in the animation loop
//     //     useFrame(() => {
//     //         setxposition((prevx) => {
//     //             const newX = prevx + 0.1;
//     //             return newX > 10 ? -10 : newX; // Reset when it goes out of bounds
//     //         });
    
//     //         const lerpFactor = 0.1;
//     //         if (groupRef.current) {
//     //             groupRef.current.children.forEach((box, index) => {
//     //                 // Horizontal movement
//     //                 box.position.x = xposition + (index % 2 === 0 ? 10 : 0);
    
//     //                 // Smooth Z movement
//     //                 box.position.z += (targetZ[index] - box.position.z) * lerpFactor;
//     //             });
//     //         }
//     //     });
    
//     //     // Shift all Z positions on keydown
//     //     const handleKeyDown = useCallback((e) => {
//     //         if (e.code === 'Space' || e.code === 'ArrowUp') {
//     //             setTargetZ((prev) => prev.map((z) => z - 2));
//     //         }
//     //     }, []);
    
//     //     // Load textures
//     //     const texture = useLoader(TextureLoader, [
//     //         '/textures/mat.png',
//     //         '/textures/mat3.jpg',
//     //         '/textures/mat5.png',
//     //     ]);
    
//     //     useEffect(() => {
//     //         window.addEventListener('keydown', handleKeyDown);
//     //         return () => {
//     //             window.removeEventListener('keydown', handleKeyDown);
//     //         };
//     //     }, [handleKeyDown]);
    
//     //     return (
//     //         <>
//     //         <group ref={groupRef}>
//     //             {targetZ.map((zPos, index) => (
//     //                 <mesh
//     //                     key={index}
//     //                     position={[xposition, 0, zPos + 1.2]} // Initial position
//     //                     rotation={[Math.PI / 2, 0, 0]}
//     //                 >
//     //                     <boxGeometry args={[1, 1, 1]} />
//     //                     <meshStandardMaterial map={texture[index % texture.length]} side={DoubleSide} />
//     //                 </mesh>
//     //             ))}
//     //         </group>
//     //         {/* <group ref={groupRef}>
//     //             {targetZ.map((zPos, index) => (
//     //                 <mesh
//     //                     key={index}
//     //                     position={[xposition, 10, zPos]} // Initial position
//     //                     rotation={[Math.PI / 2, 0, 0]}
//     //                 >
//     //                     <boxGeometry args={[1, 1, 1]} />
//     //                     <meshStandardMaterial map={texture[index % texture.length]} side={DoubleSide} />
//     //                 </mesh>
//     //             ))}
//     //         </group> */}
//     //         </>
//     //     );
//     // }
    
//     // export default Circle;
    