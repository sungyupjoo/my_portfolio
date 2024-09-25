"use client";

import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 flex"
    >
      <div className="container mx-auto flex flex-col justify-center align-center text-center min-h-[70vh]">
        <h3 className="text-8xl font-bold text-accent mb-8 break-keep">
          감사합니다!
        </h3>
        <p className="text-lg text-white/60 break-keep">
          보내주신 메일을 확인하는대로, 앞서 입력하신 이메일 주소로
          회신드리겠습니다.
        </p>
      </div>
    </motion.section>
  );
};

export default page;
