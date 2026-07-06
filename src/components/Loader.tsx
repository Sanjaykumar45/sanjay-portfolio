// import { motion } from "framer-motion";
// import { Code2 } from "lucide-react";

// export default function Loader() {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
//     >
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
//         className="relative grid h-20 w-20 place-items-center rounded-2xl"
//         style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
//       >
//         <Code2 className="h-9 w-9 text-white" />
//       </motion.div>
//       <motion.p
//         initial={{ opacity: 0, y: 8 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="mt-6 text-sm tracking-[0.3em] text-muted-foreground uppercase"
//       >
//         Loading
//       </motion.p>
//     </motion.div>
//   );
// }


// import { motion } from "framer-motion";
// import { Code2 } from "lucide-react";

// export default function Loader() {
//   return (
//     <motion.div
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-card backdrop-blur-xl"
//       >
//         <Code2 className="h-10 w-10 text-brand" />
//       </motion.div>

//       <h2 className="mt-6 text-lg font-semibold">
//         Sanjay Kumar
//       </h2>

//       <p className="mt-1 text-sm text-muted-foreground">
//         Full Stack Developer
//       </p>

//       <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-muted">
//         <motion.div
//           className="h-full bg-brand"
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// }

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Code2 } from "lucide-react";

// export default function Loader() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(timer);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 30);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <motion.div
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-background"
//     >
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0">
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
//         />

//         <motion.div
//           animate={{
//             x: [0, -120, 0],
//             y: [0, 60, 0],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]"
//         />
//       </div>

//       {/* Loader Card */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         className="
//           relative
//           w-[380px]
//           rounded-3xl
//           border
//           border-white/10
//           bg-white/5
//           p-8
//           backdrop-blur-xl
//         "
//       >
//         {/* Logo */}
//         <motion.div
//           animate={{
//             rotate: [0, 5, -5, 0],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//           }}
//           className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-2xl"
//         >
//           <Code2 className="h-10 w-10 text-white" />
//         </motion.div>

//         {/* Name */}
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="mt-6 text-center text-2xl font-bold"
//         >
//           Sanjay Rajan
//         </motion.h1>

//         <p className="mt-2 text-center text-sm text-muted-foreground">
//           Full Stack Developer
//         </p>

//         {/* Loading Text */}
//         <motion.p
//           key={progress}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="mt-8 text-center text-sm tracking-widest text-muted-foreground"
//         >
//           LOADING PORTFOLIO
//         </motion.p>

//         {/* Progress */}
//         <div className="mt-5">
//           <div className="mb-2 flex justify-between text-xs text-muted-foreground">
//             <span>Initializing</span>
//             <span>{progress}%</span>
//           </div>

//           <div className="h-2 overflow-hidden rounded-full bg-white/10">
//             <motion.div
//               className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500"
//               animate={{ width: `${progress}%` }}
//               transition={{ ease: "easeOut" }}
//             />
//           </div>
//         </div>

//         {/* Status */}
//         <motion.div
//           animate={{ opacity: [0.4, 1, 0.4] }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//           }}
//           className="mt-5 text-center text-xs text-muted-foreground"
//         >
//           Loading projects, skills & experience...
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Loader() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    damping: 20,
    stiffness: 150,
  });

  const springY = useSpring(mouseY, {
    damping: 20,
    stiffness: 150,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 140);
      mouseY.set(e.clientY - 140);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#f8f1df]"
    >
      {/* Pop-Art Dotted Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(#d6c6a7 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Mouse Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="
          pointer-events-none
          absolute
          h-[280px]
          w-[280px]
          rounded-full
          bg-orange-400/30
          blur-[100px]
        "
      />

      {/* Floating Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-15, 15, -15],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
          }}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 20}%`,
          }}
        >
          <div className="h-4 w-4 rounded-full border-2 border-black bg-orange-400" />
        </motion.div>
      ))}

      {/* Center Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="
            mb-8
            rounded-full
            border-4
            border-black
            bg-white
            px-6
            py-2
            text-sm
            font-bold
            shadow-[6px_6px_0px_#000]
          "
        >
          👋 Welcome to my portfolio
        </motion.div>

        {/* Main Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-center
            text-6xl
            font-black
            tracking-tight
            text-black
            md:text-8xl
          "
          style={{
            textShadow: "5px 5px 0px rgba(0,0,0,0.08)",
          }}
        >
          SANJAY
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="
            bg-gradient-to-r
            from-orange-500
            via-yellow-500
            to-blue-500
            bg-clip-text
            text-center
            text-6xl
            font-black
            text-transparent
            md:text-8xl
          "
        >
          KUMAR
        </motion.h2>

        {/* Role Badge */}
        <motion.div
          animate={{
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mt-6
            rounded-full
            border-4
            border-black
            bg-orange-500
            px-6
            py-3
            font-bold
            text-white
            shadow-[6px_6px_0px_#000]
          "
        >
          Full Stack Developer
        </motion.div>

        {/* Description */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mt-6
            text-center
            text-sm
            font-medium
            uppercase
            tracking-[0.4em]
            text-black/60
          "
        >
          Crafting Modern Web Experiences. Every Design Tells a Story.
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-10 w-64 overflow-hidden rounded-full border-4 border-black bg-white shadow-[4px_4px_0px_#000]">
          <motion.div
            animate={{
              x: ["-100%", "300%"],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              h-3
              w-20
              rounded-full
              bg-gradient-to-r
              from-orange-500
              via-yellow-400
              to-blue-500
            "
          />
        </div>
      </div>
    </motion.div>
  );
}