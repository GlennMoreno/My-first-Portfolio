import React from "react";
import { motion } from "framer-motion";

export const SocialMedia = () => {
  return (
    <section className="relative grid place-content-center gap-2 bg-black px-8 py-24 text-red-900">
      <FlipLink href="https://github.com/GlennMoreno">Github</FlipLink>
      <FlipLink href="https://www.google.com/search?sca_esv=d1cdb0fd9cb38009&sca_upv=1&sxsrf=ADLYWIJpN5XzWBCL9dETlqi8RrK8gjHyxw:1723600515021&q=nigga&udm=2&fbs=AEQNm0DYVld7NGDZ8Pi819Yg8r6em07j6rW9d2jUMtr8MB7htoxbI0iAKNRPykigVf3e9aputkbr8jzmN5LYbANOqrq5HYnx4MjtyMxZ94LvgeHWmGBcuWUoydKfNaoB5JMdZlMtXmg2De2y5O7nn-eTbNdYHsRiT1RQ-pB6qp3ejXJ5VpdCk5NA1Jug5hVR16L7F-A1C1p-4xpfp7qj2HsGNaipPZQOiw&sa=X&ved=2ahUKEwik17qjsPOHAxXb-jgGHU7KCIQQtKgLegQIERAB&biw=1536&bih=738&dpr=1.25">Facebook</FlipLink>
      <FlipLink href="https://www.instagram.com/glenn.guren?igsh=Z2Jxb2pjMmg3Mnc=">Instagram</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
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
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
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
        ))}
      </div>
    </motion.a>
  );
};

export default SocialMedia;