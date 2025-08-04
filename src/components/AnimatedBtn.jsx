import React, { useState } from 'react'
import { motion } from "framer-motion";

function AnimatedBtn({BtnText, className, buttonBg}) {
    const [isHover, setIsHover] = useState(false);
      const [clipOrigin, setClipOrigin] = useState({ x: 50, y: 50 });
    
      const handleMouseEnter = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setClipOrigin({ x, y });
        setIsHover(true);
      };
    
      const handleMouseLeave = () => {
        setIsHover(false);
      };
  return (
    <div
            className={`relative inline-block overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.05)]  ${buttonBg} rounded-full`}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseEnter} // update position continuously for smoother origin
              onMouseLeave={handleMouseLeave}
            >
              {/* Clip path hover effect background */}
              <motion.div
                className="absolute inset-0 bg-[#C084FC] z-0"
                initial={false}
                animate={{
                  clipPath: isHover
                    ? `circle(150% at ${clipOrigin.x}% ${clipOrigin.y}%)`
                    : `circle(0% at ${clipOrigin.x}% ${clipOrigin.y}%)`,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                aria-hidden="true"
              />

              {/* Button text */}
              <motion.a
                href="/demo"
                className={className}
              >
                {BtnText}
              </motion.a>
            </div>
  )
}

export default AnimatedBtn