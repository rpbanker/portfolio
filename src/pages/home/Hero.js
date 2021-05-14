import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("");

  const textsIn = {
    animate: {
      transition: {
        // delayChildren: 0.5,
        staggerChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };

  const textIn = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    exit: {
      opacity: 0,
    },
  };

  useEffect(() => {
    const texts = [
      "creating beautiful things",
      "solving problems with my own creation",
      "exploring interesting things",
    ];
    let index = 0;
    let letterIndex = 0;
    let currentText = "";

    const typing = () => {
      index %= texts.length;

      currentText = texts[index];

      setText(currentText.slice(0, ++letterIndex));

      if (currentText.slice(0, letterIndex).length === currentText.length) {
        index++;
        letterIndex = 0;
      }
    };

    const typewriter = setInterval(typing, 400);

    return () => {
      clearInterval(typewriter);
    };
  }, []);

  return (
    <section className="hero custom-container">
      <motion.div
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        variants={textsIn}
        className="text-wrapper"
      >
        <div className="overflow-wrapper">
          <motion.h1 variants={textIn} className="hero__title">
            Hello, I am andrew <br></br> a{" "}
            <span className="hero__highlighting">
              Computer&nbsp;
              <div className="hero__highlighter"></div>
            </span>
            <span className="hero__highlighting">
              Science&nbsp;
              <div className="hero__highlighter"></div>
            </span>
            <span className="hero__highlighting">
              student
              <div className="hero__highlighter"></div>
            </span>
          </motion.h1>
        </div>
        <div className="overflow-wrapper">
          <motion.p variants={textIn} className="hero__subtitle">
            I love {text}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
