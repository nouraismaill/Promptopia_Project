"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function TypingAnimation({ text, duration = 200, className }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false); // New state to control pause

  useEffect(() => {
    if (pause) return; // Skip interval updates during pause

    const typingEffect = setInterval(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText(text.substring(0, index - 1));
        setIndex((prev) => prev - 1);
      } else {
        // Toggle `isDeleting` and add a brief pause when switching directions
        setPause(true); // Pause animation
        setTimeout(() => {
          setIsDeleting((prev) => !prev); // Toggle direction after pause
          setPause(false); // Resume animation
        }, 500); // Adjust this delay as needed
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [index, isDeleting, duration, text, pause]);

  return (
    <h1
      className={cn(
        "font-display head_text text-left blue_gradient text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText || text}
    </h1>
  );
}
