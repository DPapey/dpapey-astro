import { motion } from "motion/react";

interface MotionH1Props {
  title: string;
}

const MotionH1 = ({ title }: MotionH1Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.h1
      className="text-6xl md:text-6xl font-bold text-gray-900 leading-tight dark:text-neutral-200 text-center mx-auto w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {title.split(" ").map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-flex" // Ensures words stay together
        >
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
          &nbsp; {/* Adds proper spacing between words */}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default MotionH1;
