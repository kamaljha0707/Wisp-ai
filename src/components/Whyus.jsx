import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedBtn from './AnimatedBtn';
import { ArrowRight } from "lucide-react";
import aiNotes from "../assets/ainotes.jpg"
import aiDraft from "../assets/aiDraft.jpg"
import aiNotion from '../assets/aiNotion.jpg'

const WhyChooseSection = () => {
    const containerRef = useRef(null);
    const rightSectionRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [scrollRange, setScrollRange] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isHover, setIsHover] = useState(false);

    // Check mobile view
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Calculate scroll range based on right section height
    useEffect(() => {
        if (rightSectionRef.current && !isMobile) {
            const rightHeight = rightSectionRef.current.scrollHeight;
            const viewportHeight = window.innerHeight;
            setScrollRange(rightHeight - viewportHeight);
        }
    }, [isMobile]);

    // Scroll animation setup
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["end end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    const cards = [
        {
            title: "Smart Meeting Notes, Done for You",
            description: "WispAI auto-joins meetings, transcribes in real time, and captures clear notes—so you can stay present and never miss details.",
            badge: "AI Notes",
            image: `${aiNotes}`
        },
        {
            title: "Write Emails in Your Own Voice",
            description: "WispAI learns your tone and style, generating instant replies that sound natural, personal, and just like you wrote them.",
            badge: "AI  Drafts",
            image: `${aiDraft}`
        },
        {
            title: "Smarter Inbox, Sorted Automatically",
            description: "WispAI organizes your emails into intelligent categories, helping you focus on what matters without the clutter or chaos.",
            badge: "AI Sorting",
            image: "https://cdn.dribbble.com/userupload/23081768/file/original-0ac053f999baefc0f28d5ce41e91bfcd.gif"
        },
        {
            title: "Capture Thoughts with Full Context",
            description: "WispAI records conversations, meetings, and ideas on the go—automatically understanding and organizing everything with the right context.",
            badge: "Context Aware",
            image:  `${aiNotion}`
        },
    ];

    return (
        <div
            ref={containerRef}
            className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 relative"
        >
            {isMobile ? (
                // Mobile layout (stacked)
                <div className="flex flex-col gap-12 text-[#1F2937]">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Why choose Wispai AI, why choose it today.
                        </h2>
                        <div className="mb-6">
                            <p className="text-lg text-gray-600">
                                Your day starts with a cluttered inbox and ends with missed follow-ups. WispAI brings clarity with organized emails, smart replies in your voice, and effortless note-taking—so you stay focused, not buried.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#C084FC] hover:bg-[#C084FC] text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 transition-colors"
                            >
                                Get Started for Free
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M3.469 12A8.525 8.525 0 0 0 12 20.531c.533 0 .984.451.984.985A.972.972 0 0 1 12 22.5C6.176 22.5 1.5 17.824 1.5 12 1.5 6.217 6.176 1.5 12 1.5c.533 0 .984.451.984.984A.972.972 0 0 1 12 3.47c-4.717 0-8.531 3.855-8.531 8.531Zm14.11-4.963 4.593 4.266A.939.939 0 0 1 22.5 12c0 .287-.123.574-.328.738l-4.594 4.266a1.016 1.016 0 0 1-1.394-.041 1.016 1.016 0 0 1 .04-1.395l2.749-2.584H9.047c-.574 0-.985-.41-.985-.984 0-.533.41-.984.985-.984h9.926l-2.748-2.543c-.41-.37-.41-.985-.041-1.395.369-.41.984-.41 1.394-.04Z" />
                                </svg>
                            </a>
                            <a
                                href="/demo"
                                className="border border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 font-medium py-3 px-6 rounded-full transition-colors"
                            >
                              Speak to Sales
                            </a>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {cards.map((card, index) => (
                            <div key={index} className="card bg-purple-100 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-6 right-6 bg-white rounded-full px-3 py-1 text-sm font-semibold">
                                    {card.badge}
                                </div>
                                <h3 className="text-2xl font-bold mt-12 mb-4">{card.title}</h3>
                                <p className="text-gray-600 mb-4">{card.description}</p>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // Desktop layout (side-by-side)
                <div className="flex gap-8 mt-24 text-[#1F2937]">
                    {/* Left content - normal flow */}
                    <div className="w-1/2 pr-6">
                        <div className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col justify-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                                Why choose Wisp AI, why choose it today.
                            </h2>
                            <div className="max-w-[80%] mb-6">
                                <p className="text-lg text-gray-600">
                                    Your day starts with a cluttered inbox and ends with missed follow-ups. WispAI brings clarity with organized emails, smart replies in your voice, and effortless note-taking—so you stay focused, not buried.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-3.5 ">
                                {/* Buttons */}
                                <div className="mt-8 flex justify-center py-1 gap-2 px-1 w-fit flex-wrap rounded-full">
                                    <motion.a href="https://app.zipchat.ai/users/sign_up"
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
                                        buttonBg='bg-white'
                                        className="relative z-10 block px-4 py-2 md:px-6 md:py-4 text-[#1F2937] group-hover:text-white font-semibold transition-colors duration-100 rounded-full text-sm md:text-base"
                                    />
                                </div>
                            </div>

                           
                        </div>
                    </div>

                    {/* Right content  */}
                    <div className="w-1/2 pl-28 mt-36">
                        <motion.div
                            ref={rightSectionRef}
                            className="space-y-6"
                            style={{ y }}
                        >
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="card bg-purple-100 rounded-3xl p-6 h-[80vh] min-h-[500px] flex flex-col relative overflow-hidden "
                                >
                                    <div className="absolute top-6 left-6 bg-white rounded-full px-3 py-1 text-lg font-semibold">
                                        {card.badge}
                                    </div>
                                    <h3 className="text-4xl tracking-wide leading-normal font-bold mt-16 mb-6">{card.title}</h3>
                                    <p className="text-[#1F2937] text-lg mb-6">{card.description}</p>
                                    <div
                                         className="bg-cover bg-no-repeat bg-bottom w-full h-80 rounded-xl"
                                        style={{ backgroundImage: `url(${card.image})` }}
                                    ></div>
                                    
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhyChooseSection;