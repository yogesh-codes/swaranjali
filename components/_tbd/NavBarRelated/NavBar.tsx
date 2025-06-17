// "use client";
// import React, { useLayoutEffect, useState } from "react";

// import NavList from "./NavList";
// import { RxHamburgerMenu } from "react-icons/rx";

// import { websiteSubFont } from "@/assets/websiteData";

// const NavBar = () => {
//     const [isExpanded, setIsExpanded] = useState<boolean>(false);

//     const handleHamburgerClick = () => {
//         setIsExpanded(!isExpanded);
//     };

//     useLayoutEffect(() => {
//         if (isExpanded) {
//         }
//     }, [isExpanded, setIsExpanded]);

//     return (
//         <div
//             className={`flex w-full min-h-[80px] fixed z-[100] flex-row
//                 justify-end lg:justify-center items-center bg-amber-50

//                 ${websiteSubFont.className}`}
//         >
//             <div className="hidden md:flex ">
//                 <NavList />
//             </div>

//             <div className="fixed flex flex-col items-end w-1/2 h-100 pointer-events-none">
//                 {isExpanded && <NavList />}
//             </div>

//             <div className="flex">
//                 <p>{isExpanded ? "true" : "false"}fjsldjfnsfksdfkjsdfkfj</p>
//                 <button onClick={() => handleHamburgerClick()}>
//                     <RxHamburgerMenu className="inline-flex w-[24px] h-[24px]" />
//                 </button>
//             </div>

//             <div className="h-[80px] " />
//         </div>
//     );
// };

// export default NavBar;
