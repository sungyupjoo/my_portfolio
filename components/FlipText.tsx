"use client";

import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipText = ({
  children,
  delay = 0,
}: {
  children: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative inline-block overflow-hidden whitespace-nowrap align-bottom"
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FlipText;
