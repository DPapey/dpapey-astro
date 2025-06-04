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
  		className="
    			text-5xl sm:text-5xl md:text-5xl lg:text-6xl
    			font-bold
    			text-gray-900 dark:text-neutral-200
    			text-center
    			mx-auto
   			max-w-full
   			px-4 sm:px-0
    			leading-tight
    			break-words
    			overflow-wrap-break-word
  			"
  		style={{ wordBreak: "break-word" }}
  		variants={containerVariants}
  		initial="hidden"
  		animate="visible"
	>
  	{title.split(" ").map((word, wordIndex) => (
    	<motion.span
    	  key={wordIndex}
      	className="inline-block"
      	style={{ whiteSpace: "normal", display: "inline-block" }}
    	>
      	{word.split("").map((char, charIndex) => (
        	<motion.span key={charIndex} variants={letterVariants} style={{ display: "inline-block" }}>
          	{char}
        	</motion.span>
      	))}
      	&nbsp;
    	</motion.span>
  	))}
	</motion.h1>
  );
};

export default MotionH1;
