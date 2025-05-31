// "use client";
// import img1 from "@/assets/images/1.png";

// import img2 from "@/assets/images/2.png";
// import React, { useEffect } from "react";
// import { motion, useAnimation } from "motion/react";
// // import { motion } from "motion/react";
// import Image from "next/image";

// type GallerySquareProps = {
//     imageSrc?: string;
// };

// const GallerySquare = ({ imageSrc }: GallerySquareProps) => {
//     return (
//         <motion.div
//         animate= {}
//         className=" relative w-100 h-100">
//             <div className="absolute w-150 h-100 border-4 overflow-clip bg-amber-400">
//                 <Image
//                     className="object-cover object-[0px_0px] scale-200"
//                     src={img}
//                     alt=""
//                 />
//             </div>
//         </motion.div>
//     );
// };

// export default GallerySquare;

// app/components/RotatingBox.tsx

// app/components/MovingImage.tsx

// type MovingImageProps = {
//     imgSrc: string;
// };

// export default function MovingImage({ imgSrc }: MovingImageProps) {
//     // 1) Create an AnimationControls instance
//     const controls = useAnimation();

//     useEffect(() => {
//         let offsetY = 0;

//         const moveOnce = async () => {
//             offsetY = 100;

//             await controls.start({
//                 top: `${offsetY}px`,
//                 transition: { duration: 5, ease: "linear" },
//             });

//             setTimeout(moveOnce, 5000);
//         };

//         moveOnce();

//         return () => {
//             controls.stop();
//         };
//     }, [controls]);

//     return (
//         <div className="flex items-center justify-center w-full bg-gray-100 relative">
//             <div className="absolute w-[240px] h-[160px] border-4 overfl bg-amber-400">
//                 <motion.img
//                     src={img1.src}
//                     alt=""
//                     className="
//             w-full
//             h-full
//             object-cover
//             scale-[2]
//             origin-top
//           "
//                     style={{ top: "-20px" }}
//                     animate={controls}
//                 />

//                 {/* <motion.img
//                     src={img2.src}
//                     alt=""
//                     className="
//             w-full
//             h-full
//             object-cover
//             scale-[2]
//             origin-center
//           "
//                     style={{ objectPosition: "0px -50px" }}
//                     animate={controls}
//                 /> */}
//             </div>
//         </div>
//     );
// }
