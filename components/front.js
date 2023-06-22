import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Front = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const animationControls = useAnimation();

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const bottom = ref.current.getBoundingClientRect().bottom;
        const isVisible = top < window.innerHeight && bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animationControls.start("visible");
    } else {
      animationControls.start("hidden");
    }
  }, [isVisible, animationControls]);

  return (
    <>
      <section className="bg-gradient-to-r lll from-teal-500 from-10% via-cyan-600 via-30% to-sky-500 to-90%  dark:from-slate-700 dark:via-gray-700 dark:to-zinc-700">
        <div className="space-x-10 lg:space-x-40 justify-center flex">
          <div className="m-auto mx-2 md:mx-0 md:w-1/2 lg:w-1/2 lg:h-1/2 xl:w-2/5">
            <div ref={ref}>
              <motion.h1
                className="flex justify-center items-center text-center flex-col md:block font-semibold tracking-wider brightness-105 text-gray-700 dark:text-gray-300 leading-relaxed lg:text-2xl md:text-lg"
                initial="hidden"
                animate={animationControls}
                variants={animationVariants}
                transition={{ duration: 0.5 }}
              >
                Transform ideas into reality: Hack your way to success at the
                <span className="text-blue-800 dark:text-blue-500 font-bold mx-2">
                  HACK-A-THON ...
                </span>
              </motion.h1>
              <motion.p
                className="text-zinc-100 my-2 lg:my-5 -mx-2 font-bold lg:text-xl italic flex justify-center"
                initial="hidden"
                animate={animationControls}
                variants={animationVariants}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Innovate solutions that make a difference.
              </motion.p>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-amber-300 hover:from-pink-500 hover:to-yellow-500 text-slate-700 dark:bg-white p-1 md:p-2 px-5  border-4 border-double dark:border-gray-300 dark:shadow-white text-base font-semibold flex justify-center text-center mx-auto rounded-lg"
                initial="hidden"
                animate={animationControls}
                variants={animationVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                REGISTER NOW
              </motion.button>
              <motion.div
                className="flex justify-center text-center mt-3 md:mt-7 md:text-lg lg:text-xl font-semibold text-slate-200"
                initial="hidden"
                animate={animationControls}
                variants={animationVariants}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Event Date: 28th July 2023
              </motion.div>
            </div>
          </div>
          <div className="my-10 md:mr-3 lg:mr-5 xl:mr-0 hidden md:block">
            <div>
              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={animationVariants}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://barakahit.net/html/techmax/assets/img/home-font.png"
                  className="h-auto w-auto md:h-72 md:72 lg:h-96 lg:w-96 xl:h-fit xl:w-fit"
                  width={1000}
                  height={1000}
                  alt="img"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Front;
