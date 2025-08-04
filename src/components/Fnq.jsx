import React, { useState } from 'react'
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Fnq() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeButton, setActiveButton] = useState("trial");
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to set up Wispai?',
      answer: "It takes less than 2 minutes to set up Wispai—just connect your calendar and you're ready to go.",
      checked: false
    },
    {
      question: 'How does it work?',
      answer: 'Wispai connects to your calendar and inbox, captures meetings, and uses AI to transcribe, summarize, and draft replies in your voice.',
      checked: true
    },
    {
      question: 'Can Wispai integrate with any platform or tool?',
      answer: 'Yes, Wispai works seamlessly with most calendars, email providers, and meeting platforms like Zoom, Google Meet, and Microsoft Teams.',
      checked: true
    },
    {
      question: 'Which languages does Wispai understand?',
      answer: 'Wispai transcribes and understands multiple languages with high accuracy.',
      checked: true
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-blue-950'>
      <div className='relative flex justify-center h-full min-h-[70vh] w-full bg-white text-black rounded-b-3xl  px-4 md:px-10'>
        <div className='h-screen w-full flex justify-between items-center px-4 bg-white'>
          <div className="flex flex-col w-full justify-center items-start md:flex-row gap-6 lg:gap-12 h-[190vh] md:h-[100vh]  pt-20">
            {/* Left side - FAQ list */}
            <div className="w-full md:w-1/2 lg:pl-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug mb-6 text-[#1F2937]">
                Frequently <br className="hidden sm:block" /> asked questions
              </h1>
              {/* btn  */}
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="inline-flex items-center justify-center border bg-[#C084FC] text-[#1F2937] font-semibold text-sm md:text-base py-2 md:py-3 mt-3 rounded-full overflow-hidden relative transition-colors duration-300"
                style={{
                  paddingLeft: '18px',
                  paddingRight: isHovered ? '28px' : '18px',
                  transition: 'padding 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                }}
              >
                <span className="relative z-10 flex items-center gap-1">
                  View All
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
            </div>

            {/* Right side - Accordion */}
            <div className="w-full md:w-1/2 md:mr-4 mt-8 md:mt-0">
              <div className="rounded-lg overflow-hidden">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-2 last:mb-0">
                    <button
                      className={`w-full text-left p-4 font-medium text-xl sm:text-2xl flex gap-4 sm:gap-6 items-center hover:text-[#A78BFA] transition-colors duration-200 ${
                        activeIndex === index ? 'bg-[#f3f4f6] rounded-t-2xl' : ''
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className={`p-2 sm:p-3 rounded-full transition-colors duration-200 ${
                        activeIndex === index ? 'bg-gray-300' : 'bg-[#f3f4f6] hover:bg-gray-300'
                      }`}>
                        <svg
                          className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-all duration-300 ease-in-out ${
                            activeIndex === index ? 'rotate-180 text-[#A78BFA]' : 'text-gray-600'
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 3.46875C7.2832 3.46875 3.46875 7.32422 3.46875 12C3.46875 12.5742 3.01758 12.9844 2.48438 12.9844C1.91016 12.9844 1.5 12.5742 1.5 12C1.5 6.2168 6.17578 1.5 12 1.5C17.7832 1.5 22.5 6.2168 22.5 12C22.5 12.5742 22.0488 12.9844 21.5156 12.9844C20.9414 12.9844 20.5312 12.5742 20.5312 12C20.5312 7.32422 16.6758 3.46875 12 3.46875ZM6.99609 17.6191C6.62695 17.209 6.62695 16.5938 7.03711 16.2246C7.44727 15.8555 8.0625 15.8555 8.43164 16.2656L11.0156 19.0137V9.04688C11.0156 8.51367 11.4258 8.0625 12 8.0625C12.5332 8.0625 12.9844 8.51367 12.9844 9.04688V19.0137L15.5273 16.2656C15.8965 15.8555 16.5117 15.8555 16.9219 16.2246C17.332 16.5938 17.332 17.209 16.9629 17.6191L12.6973 22.2129C12.5332 22.418 12.2461 22.5 12 22.5C11.7129 22.5 11.4668 22.418 11.2617 22.2129L6.99609 17.6191Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="transition-colors duration-200">{faq.question}</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-4 sm:p-6 bg-[#f3f4f6] rounded-b-2xl text-gray-700 text-base sm:text-lg">
                        {faq.answer || <span className="text-gray-400">Answer not available</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='absolute flex flex-col justify-evenly items-center -bottom-60 bg-[#A78BFA] h-[50vh] sm:h-[60vh] rounded-3xl w-[90vw] md:w-[93vw] m-auto overflow-hidden'>
          <div className="text-center px-4">
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-slug tracking-wider text-white font-black'>
              Try WispAi <br className="hidden sm:block" />
              For Free
            </h1>
          </div>
          <div className="relative bg-white overflow-hidden h-fit w-fit rounded-full border-2 border-white px-1 py-3 flex items-center">
            <motion.div
              className="absolute bg-[#C084FC] rounded-full top-1 bottom-1 transition-all duration-500"
              style={{ right: 1 }}
              initial={{ left: 4, right: "50%" }}
              animate={
                activeButton === "trial"
                  ? { left: 4, right: "50%" }
                  : { left: "50%", right: 4 }
              }
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            />

            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveButton("trial")}
              className={`relative z-10 inline-flex items-center justify-center font-semibold text-sm md:text-base py-2 px-6 rounded-full transition-colors duration-500 ${
                activeButton === "trial" ? "text-[#1F2937]" : "text-[#1F2937]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-1">
                Start free trial
              </span>
            </motion.a>

            <motion.a
              href=""
              onMouseEnter={() => setActiveButton("demo")}
              className={`relative z-10 inline-flex items-center justify-center font-semibold text-sm md:text-base py-2 px-6 rounded-full transition-colors duration-500 ${
                activeButton === "demo" ? "text-[#1F2937]" : "text-[#1F2937]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-1">
                Book a demo
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fnq