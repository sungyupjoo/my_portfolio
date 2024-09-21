"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.div className="w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden shadow-xl relative">
          <Image
            src="/static/assets/profilepicture.jpeg"
            alt="profile_image"
            priority
            quality={100}
            fill
            className="object-cover rounded-full shadow-xl mix-blend-lighten"
          />
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            fill="transparent"
            viewBox="0 0 450 450"
            xmlns="http://www.w3.org/2000/svg"
          ></motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
