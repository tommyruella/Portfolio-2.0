import React from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  text?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  text = "Scroll to explore",
}) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-sm font-light text-gray-500"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <span>{text}</span>
      <motion.div
        className="w-px h-10 bg-gray-300"
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default ScrollIndicator;
