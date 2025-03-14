import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  priority?: boolean;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  speed = 0.5,
  className = "",
  priority = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  // Update measurements on resize
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updatePosition = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setClientHeight(window.innerHeight);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [ref]);

  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [`-${speed * 15}%`, `${speed * 15}%`],
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-full w-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
