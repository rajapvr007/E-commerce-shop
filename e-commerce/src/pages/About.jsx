// import React from "react";

// function About() {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold text-gray-800">About Our Store</h1>

//       <p className="mt-4 text-gray-600">
//         We are a small team of fashion enthusiasts who love creating affordable
//         and stylish clothing. Our collection focuses on high quality fabrics and
//         flattering fits suitable for any occasion.
//       </p>

//       <h2 className="mt-8 text-2xl font-semibold">Our Story</h2>

//       <p className="mt-4 text-gray-600">
//         The business was started in 2020 by two best friends who shared a
//         passion for fashion. We started small out of our garage and quickly
//         expanded as word spread about our comfortable and trendy clothes.
//       </p>

//       <p className="mt-4 text-gray-600">
//         Our pieces are designed in-house and made from sustainably sourced
//         materials. We ship worldwide from our Los Angeles headquarters.
//       </p>

//       <h2 className="mt-8 text-2xl font-semibold">Our Team</h2>

//       <p className="mt-4 text-gray-600">
//         Our amazing team of designers, photographers, customer service reps and
//         warehouse crew make the magic happen! We're a diverse group of talented
//         individuals united by creativity and passion.
//       </p>

//       <p className="mt-4 text-gray-600">
//         We're committed to creating the best possible shopping experience and
//         customer service for all our clients around the world.
//       </p>
//     </div>
//   );
// }

// export default About;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// const About = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <motion.h1
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="text-4xl font-bold text-gray-800 mb-8"
//       >
//         About Us
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="text-lg text-gray-700 mb-8"
//       >
//         We are a clothing brand that is passionate about creating high-quality, stylish clothes for men and women. Our mission is to make you look and feel your best, no matter what the occasion.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="flex items-center justify-center"
//       >
//         <a href="#" className="text-gray-500 hover:text-gray-600 mr-4">
//           <FaFacebook size={24} />
//         </a>
//         <a href="#" className="text-gray-500 hover:text-gray-600 mr-4">
//           <FaTwitter size={24} />
//         </a>
//         <a href="#" className="text-gray-500 hover:text-gray-600">
//           <FaInstagram size={24} />
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default About;
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three';

const Box = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#f3f3f3" />
    </mesh>
  );
};

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Box />
      </Canvas>
      <h1>ABOUT</h1>
    </div>
  );
};

export default About;