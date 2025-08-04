// LogoMarquee.jsx
import { motion } from "framer-motion";
import logo1 from '../assets/asset3.png'
import logo2 from '../assets/asset 4.png'
import logo3 from '../assets/asset 5.png'

const logos = [
    <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#1F2937]"><img src={logo1} className="h-8" alt="" /></span>,
    <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-[#C084FC]"><img src={logo2} className="h-6" alt="" /></span>,
    <span className="text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#1F2937]"><img src={logo3} className="h-6" alt="" /></span>,
];

export default function LogoMarquee() {
    return (
        <div className="relative overflow-hidden w-full py-6 pb-11 h-10 ">
            {/* Left blur */}
            <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-[#f3f4f6] via-[#f3f4f6]/80 to-transparent" />

            {/* Right blur */}
            <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-[#f3f4f6] via-[#f3f4f6]/80 to-transparent" />

            <motion.div
                className="flex gap-12 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {/* Repeat logos twice for smooth infinite loop */}
                {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                    <div key={idx} className="shrink-0 grayscale hover:grayscale-0 transition duration-300">
                        {logo}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
