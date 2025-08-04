"use client";
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import email from '../assets/asset 10.svg';
import slack from '../assets/asset 13.svg';
import notion from '../assets/asset 14.svg';
import hubspot from '../assets/asset 15.svg';
import outlook from '../assets/asset 11.svg';
import calendar from '../assets/asset 17.svg';
import teams from '../assets/asset 18.svg';
import linear from '../assets/asset 19.svg';

export default function IntegrationGrid() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const integrations = [
    {
      logo: email,
      alt: "Gmail",
      title: "Send notes to meeting invitees"
    },
    {
      logo: slack,
      alt: "Slack",
      title: "Send notes to Slack channels"
    },
    {
      logo: notion,
      alt: "Notion",
      title: "Update pages with notes"
    },
    {
      logo: hubspot,
      alt: "HubSpot",
      title: "Update deals automatically"
    },
    {
      logo: outlook,
      alt: "Outlook",
      title: "Connect your calendar"
    },
    {
      logo: calendar,
      alt: "Google Calendar",
      title: "Connect your calendar"
    },
    {
      logo: teams,
      alt: "Teams",
      title: "Join Microsoft Teams meetings"
    },
    {
      logo: linear,
      alt: "Linear",
      title: "Create tasks from meetings"
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="bg-[#f3f4f6] rounded-3xl my-10 py-24 px-4">
      <div className="container mx-auto text-center mb-16">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            Integrate with Anything
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with the tools you already use
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#C084FC] transition-colors duration-300 flex flex-col items-start"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={integration.logo}
                  alt={integration.alt}
                  className="h-10 w-10 object-contain mr-3"
                />
                <h3 className="text-lg font-semibold text-gray-900">{integration.alt}</h3>
              </div>
              <p className="text-gray-600 text-left">{integration.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}