import { motion } from "motion/react";

interface MotionH3Props {
  title: string;
}

const MotionH3 = ({ title }: MotionH3Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.h2
      className="text-4xl pb-5 font-semibold text-gray-800 dark:text-neutral-100 text-center mb-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {title.split(" ").map((word, wordIndex) => (
        <motion.span key={wordIndex} className="inline-flex">
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
          &nbsp;
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default MotionH3;
