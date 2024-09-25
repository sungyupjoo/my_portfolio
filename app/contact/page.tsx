"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MutableRefObject, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import emailJs from "@emailjs/browser";
const info = [
  {
    icon: FaEnvelope,
    title: "이메일",
    description: "chickenjuicyham@gmail.com",
  },
];

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailJs
        .sendForm(
          "service_2knm4qn",
          "template_my64nio",
          formRef.current,
          "zNNbN8bRZeaVnTESq"
        )
        .then((result) => {
          console.log(result);
          router.push("/thankyou");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.2, ease: "easeIn" },
      }}
      className="py-6 flex"
    >
      <div className="container mx-auto flex justify-center align-center">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form
              ref={formRef}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
            >
              <h3 className="text-3xl font-semibold text-accent">
                연락 주세요!
              </h3>
              <p className="text-white/60">
                업무 관련 연락을 남겨주시면, 확인하는대로 답신 드리겠습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="name" placeholder="조직명" name="name" required />
                <Input
                  type="email"
                  placeholder="이메일 주소"
                  name="email"
                  required
                />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="메시지를 입력해주세요"
                name="message"
                required
              />
              <Button size="md" className="max-w-40">
                전송
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                      <div>{<item.icon />}</div>
                    </div>
                    <div className="flex-1 order-1 xl:order-none mb-8 xl:mb-0">
                      <p className="text-white/60">{item.title}</p>
                      <p className="text-xl">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
