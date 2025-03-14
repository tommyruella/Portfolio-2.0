import React, { useState, useEffect } from "react";

interface CustomCursorProps {
  color?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ color = "#3b82f6" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const computedStyle = hoveredElement
        ? window.getComputedStyle(hoveredElement).cursor
        : "";
      setIsPointer(
        computedStyle === "pointer" ||
          hoveredElement?.tagName === "A" ||
          hoveredElement?.tagName === "BUTTON" ||
          hoveredElement?.closest("a") !== null ||
          hoveredElement?.closest("button") !== null,
      );
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousemove", updateCursorType);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousemove", updateCursorType);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [position.x, position.y]);

  if (typeof window === "undefined") return null;

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity ${isHidden ? "opacity-0" : "opacity-100"}`}
      style={{ mixBlendMode: "difference" }}
    >
      {/* Main cursor dot */}
      <div
        className={`absolute rounded-full transition-transform duration-100 ${isPointer ? "scale-150" : "scale-100"}`}
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: color,
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
          boxShadow: `0 0 20px ${color}80`,
        }}
      />

      {/* Blur gradient that follows cursor */}
      <div
        className="absolute rounded-full blur-[40px] opacity-30 transition-transform duration-300"
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: color,
          transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
