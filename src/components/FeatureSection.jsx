import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedBtn from './AnimatedBtn';
import { motion, useScroll } from "framer-motion";
import { useState } from 'react';

const FeatureCard = ({ title, steps, iconColor }) => {
  return (
    <div className="bg-[#f3f4f6] rounded-xl shadow-sm p-6 flex flex-col min-h-72 h-full relative overflow-hidden">
      {/* Smooth cut effect pseudo-element */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white transform rotate-45 origin-center opacity-20"></div>

      <h3 className="text-4xl font-bold text-gray-800 mb-4 relative z-10">{title}</h3>
      <ul className="space-y-3 flex-grow relative z-10">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className={`flex-shrink-0 mt-1 mr-3 ${iconColor}`} size={18} />
            <span className="text-gray-600 text-lg">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ActionButton = ({ children, variant = 'primary' }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-200";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
      {variant === 'primary' && <ArrowRight className="ml-2" size={16} />}
    </button>
  );
};

const FeatureSection = () => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <section className="py-16 px-4 md:px-12 bg-white h-full">

      <div className="relative h-full grid grid-cols  md:grid-cols-3 gap-4  py-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-start w-full h-full relative">
          <div className="flex justify-center items-center w-[80%] mr-auto relative">
            <div className="w-full h-10  bg-[#f3f4f6] rounded-tl-[40px] rounded-tr-[16px]  relative overflow-visible transform translate-z-0" />
          </div>

          <div className="bg-[#f3f4f6] px-6 pt-0 pb-6 w-full rounded-tr-[20px] rounded-b-[24px]">
            <div className="flex items-center justify-start  p-2 ">
              {/* Outer circle */}
              <div className="relative h-14 w-14 bg-[#DDD6FE] rounded-full flex items-center justify-center">
                {/* SVG icon inside */}
                <svg
                  className="absolute -bottom-3 left-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
            </div>

            <div className="h-10" />

            <h4 className="font-bold text-2xl">Link Gmail</h4>

            <ul className="list-none p-0 m-0 space-y-2 mt-6">
              <li><p className="text-md font-semibold text-[#1f2937d6]">Link your inbox in 30 seconds. </p></li>
              {/* <li><p className="text-md font-semibold text-[#1F2937]"><span className='mr-1'>−</span> Takes just 30 seconds.</p></li> */}
            </ul>
            <div className="h-20" />

            <div className="h-16 md:hidden" />
          </div>
        </div>
        {/* Card 2  */}
        <div className="flex flex-col items-center justify-start w-full h-full relative">
          <div className="flex justify-center items-center w-[80%] mr-auto relative">
            <div className="w-full h-10  bg-[#f3f4f6] rounded-tl-[40px] rounded-tr-[16px] relative overflow-visible transform translate-z-0" />
          </div>

          <div className="bg-[#f3f4f6] px-6 pt-0 pb-6 w-full rounded-tr-[20px] rounded-b-[24px]">
            <div className="flex items-center justify-start  p-2 ">
              {/* Outer circle */}
              <div className="relative h-14 w-14 bg-[#DDD6FE] rounded-full flex items-center justify-center">
                {/* SVG icon inside */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-3 left-6"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
                </svg>
              </div>
            </div>

            <div className="h-10" />
            <h4 className="font-extrabold text-2xl">Wisp onboards itself</h4>

            <ul className="list-none p-0 m-0 space-y-2 mt-6">
              <li><p className="text-md font-semibold text-[#1f2937d6]">Wisp knows your style and context instantly.</p></li>
              {/* <li><p className="text-md font-semibold text-[#1F2937]"><span className='mr-1'>−</span> Adapts to your context seamlessly.</p></li> */}
            </ul>
            <div className="h-20" />

            <div className="h-16 md:hidden" />
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center justify-start w-full h-full relative">
          <div className="flex justify-center items-center w-[80%] mr-auto relative">
            <div className="w-full h-10  bg-[#f3f4f6] rounded-tl-[40px] rounded-tr-[16px] relative overflow-visible transform translate-z-0" />
          </div>

          <div className="bg-[#f3f4f6] px-6 pt-0 pb-6 w-full rounded-tr-[20px] rounded-b-[24px]">
            <div className="flex items-center justify-start  p-2 ">
              {/* Outer circle */}
              <div className="relative h-14 w-14 bg-[#DDD6FE] rounded-full flex items-center justify-center">
                {/* SVG icon inside */}
                <svg
                  className="absolute -bottom-3 left-6 lucide lucide-forward-icon lucide-forward"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 17 5-5-5-5" />
                  <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
                </svg>
              </div>
            </div>

            <div className="h-10" />
            <h4 className="font-extrabold text-2xl">Check and send</h4>

            <ul className="list-none p-0 m-0 space-y-2 mt-6">
              <li><p className="text-md font-semibold text-[#1f2937d6]">Review and send drafts instantly. </p></li>
              {/* <li><p className="text-md font-semibold text-[#1F2937]"><span className='mr-1'>−</span> Send with a single click. </p></li> */}
            </ul>
            <div className="h-20" />

            <div className="h-16 md:hidden" />
          </div>
        </div>


        {/* CTA Section */}
        <div className="absolute sm:block hidden top-80 w-full overflow-hidden pb-20">
          <div className="relative z-10  bg-[#DDD6FE] text-[#1F2937] px-6 pt-12 rounded-[40px] w-[80%] m-auto border-white border-t-4 border-r-4 border-l-4 rounded-bl-[20px] rounded-br-[20px]">
            <h2 className="text-2xl md:text-5xl font-semibold leading-loose tracking-wide text-center mb-8">
              Reclaim your time and boost <br /> daily productivity!
            </h2>
            {/* Buttons */}
            <div className=" flex justify-center mx-auto  gap-2 px-1 w-fit flex-wrap rounded-full">
              <motion.a
                href="https://app.zipchat.ai/users/sign_up"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="inline-flex items-center justify-center border bg-[#C084FC] text-[#1F2937] font-semibold text-sm md:text-base py-2 md:py-3 rounded-full overflow-hidden relative transition-colors duration-300"
                style={{
                  paddingLeft: '20px',
                  paddingRight: isHovered ? '28px' : '20px',
                  transition: 'padding 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                }}
              >
                <span className="relative z-10 flex items-center gap-1">
                  Start free trial
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
            {/* title */}
            <p className='w-full text-center font-semibold text-sm text-[#1F2937] mt-3'>7-Day trial + 30-Day money back guarantee.</p>

          </div>

          {/* Decorative curved bottom */}
          <div className="flex justify-center w-full items-center relative">
            <div className="w-[70%] h-16  bg-[#DDD6FE] rounded-bl-[32px] rounded-br-[32px]   relative overflow-visible transform m-auto" />
          </div>
        </div>

      </div>


    </section>
  );
};

export default FeatureSection;