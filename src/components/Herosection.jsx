import React, { useState } from 'react'
import AnimatedBtn from './AnimatedBtn';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { AlignJustify, ArrowRight } from "lucide-react";
import bg from '../assets/Shape.png'
import LogoMarquee from './LogoMarquee';

function Herosection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [clipOrigin, setClipOrigin] = useState({ x: 50, y: 50 });
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll animation
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const handleMouseEnter = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setClipOrigin({ x, y });
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="h-screen w-full bg-contain bg-no-repeat bg-center relative overflow-hidden rounded-3xl pt-0" style={{ backgroundImage: `url(${bg})` }}>
      {/* Navbar */}
   <motion.nav
        className={`z-50 w-full ${isScrolled ? 'fixed top-4 md:top-8 left-0 right-0' : 'relative mt-6 md:mt-12'}`}
        initial={{
          height: typeof window !== 'undefined' && window.scrollY > 50 ? '60px' : '70px'
        }}
        animate={{
          height: isScrolled ? '60px' : '70px', 
        }}
        transition={{
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1]
        }}
      >
        <motion.div
          className={`flex items-center justify-between mx-auto ${isScrolled ? 'bg-white/90 backdrop-blur-md rounded-full shadow-xl' : ''}`}
          initial={{
            width: typeof window !== 'undefined' && window.scrollY > 50 ? '75%' : '100%',
            maxWidth: typeof window !== 'undefined' && window.scrollY > 50 ? '90%' : '100%',
            padding: typeof window !== 'undefined' && window.scrollY > 50 ? '0.3rem 0.2rem' : '0 1rem',
          }}
          animate={{
            width: isScrolled ? '75%' : '100%',
            maxWidth: isScrolled ? '90%' : '100%', 
            padding: isScrolled ? '0.3rem 0.2rem' : '0 1rem',
          }}
          transition={{
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1],
            width: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          {/* Logo */}
          <motion.div
            className="flex gap-1 items-center justify-center ml-4 md:ml-8" 
            initial={{
              scale: typeof window !== 'undefined' && window.scrollY > 50 ? 0.9 : 1,
            }}
            animate={{
              scale: isScrolled ? 0.9 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
              delay: isScrolled ? 0.1 : 0
            }}
          >
            <div className="flex flex-col leading-none">
              <span className="text-2xl sm:text-3xl md:text-[40px] cursor-pointer font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#a855f7] to-[#1F2937] drop-shadow-sm">
                Wisp.ai
              </span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className={`flex items-center ${isScrolled ? '' : 'bg-white px-1 py-1 rounded-full'} space-x-2 md:space-x-8`} 
            animate={{
              padding: isScrolled ? '0' : '0.25rem',
            }}
            transition={{
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1]
            }}
          >
            <div className="hidden md:flex gap-1">
              <AnimatedBtn
                BtnText="Pricing"
                className="relative z-10 block px-4 md:px-6 py-2 md:py-3 text-[#1F2937] group-hover:text-white font-semibold transition-colors duration-300 tracking-wider rounded-full"
              />
              <AnimatedBtn
                BtnText="Features"
                className="relative z-10 block px-4 md:px-6 py-2 md:py-3 text-[#1F2937] group-hover:text-white font-semibold transition-colors duration-100 tracking-wider rounded-full"
              />
              <AnimatedBtn
                BtnText="Mobile"
                className="relative z-10 block px-4 md:px-6 py-2 md:py-3 text-[#1F2937] group-hover:text-white font-semibold transition-colors duration-100 tracking-wider rounded-full"
              />
              <AnimatedBtn
                BtnText="Releases"
                className="relative z-10 block px-4 md:px-6 py-2 md:py-3 text-[#1F2937] group-hover:text-white font-semibold transition-colors duration-100 tracking-wider rounded-full"
              />
              <AnimatedBtn
                BtnText="Privacy"
                className="relative z-10 block px-4 md:px-6 py-2 md:py-3 text-[#1F2937] group-hover:text-white font-semibold transition-colors duration-100 tracking-wider rounded-full"
              />
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="flex items-center space-x-2 md:space-x-3 ml-2 md:ml-6"> {/* Reduced spacing on mobile */}
            <div
              className="relative h-10 w-10 md:h-[50px] md:w-[50px] cursor-pointer bg-[#f3f4f6] rounded-full overflow-hidden flex items-center justify-center"
              title='Login'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setIsHover(false)}
            >
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
              <svg
                className="relative z-10 h-4 w-4 md:h-[18px] md:w-[18px] text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15.75 5.974c0-1.315-.75-2.535-1.875-3.24-1.172-.657-2.625-.657-3.75 0C8.953 3.44 8.25 4.66 8.25 5.974c0 1.361.703 2.582 1.875 3.286 1.125.657 2.578.657 3.75 0C15 8.556 15.75 7.335 15.75 5.974Zm-9.75 0A5.956 5.956 0 0 1 9 .81c1.828-1.08 4.125-1.08 6 0 1.828 1.08 3 3.051 3 5.164 0 2.159-1.172 4.13-3 5.21-1.875 1.08-4.172 1.08-6 0a5.975 5.975 0 0 1-3-5.21ZM3.797 21.747h16.36c-.423-2.958-2.954-5.258-6.048-5.258H9.844c-3.094 0-5.625 2.3-6.047 5.258Zm-2.297.892c0-4.648 3.703-8.403 8.344-8.403h4.265a8.388 8.388 0 0 1 8.391 8.403c0 .75-.656 1.361-1.406 1.361H2.859A1.36 1.36 0 0 1 1.5 22.639Z" />
              </svg>
            </div>
            <AnimatedBtn
              buttonBg='bg-[#1F2937]'
              BtnText='Start free trial'
              className="relative z-10 block px-3 py-2 md:px-4 md:py-3 text-[#f3f4f6] hover:text-[#1F2937] group-hover:text-white font-semibold transition-colors tracking-wide duration-100 rounded-full text-sm md:text-base"
            />
            <button className="md:hidden">
              <AlignJustify size={20} />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pb-32 px-4 sm:px-6 md:px-16 text-center">
        {/* Content */}
        <p className='text-sm md:text-md font-semibold bg-gray-200 w-fit m-auto py-1 px-3 md:px-4 rounded-full text-[#1F2937] tracking-wide'>Backed by Y Combinator</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-black text-gray-800 leading-tight md:leading-snug lg:leading-tight mx-auto max-w-4xl md:max-w-5xl mt-4 md:mt-6 px-2">
          AI-Powered Email Replies {window.innerWidth >= 768 && <br />} That Sound Like You
        </h1>
        <p className='text-[#1f2937] mt-4 md:mt-6 text-base md:text-lg font-semibold tracking-wider px-2'>
          Let AI handle your inbox with replies in your voice.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center mx-auto py-1 gap-2 px-1 w-fit flex-wrap rounded-full">
          <motion.a
            href="https://app.zipchat.ai/users/sign_up"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-flex items-center justify-center border bg-[#C084FC] text-[#1F2937] font-semibold text-sm md:text-base py-2 md:py-3 rounded-full overflow-hidden relative transition-colors duration-300"
            style={{
              paddingLeft: '18px',
              paddingRight: isHovered ? '28px' : '18px',
              transition: 'padding 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
            }}
          >
            <span className="relative z-10 flex items-center gap-1">
              Get Started for Free
              <motion.span
                initial={{ opacity: 0, x: 4, width: 0 }}
                animate={
                  isHovered
                    ? { opacity: 1, x: 0, width: 'auto' }
                    : { opacity: 0, x: 4, width: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="inline-block overflow-hidden"
              >
                <ArrowRight size={20} className="ml-1" />
              </motion.span>
            </span>
          </motion.a>
          <AnimatedBtn 
            BtnText='Speak to Sales' 
            buttonBg = 'bg-white'
            className="relative z-10 block px-4 py-2 md:px-6 md:py-4 text-[#1F2937] group-hover:text-white font-semibold transition-colors duration-100 rounded-full text-sm md:text-base" 
          />
        </div>
        <div className='text-base md:text-lg tracking-wide text-[#1F2937] font-semibold mt-8 md:mt-12'>Loved by people at</div>

        <LogoMarquee />
      </section>
    </div>
  )
}

export default Herosection