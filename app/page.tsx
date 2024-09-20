import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import FlipText from "@/components/FlipText";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left xl:order-none order-2">
            <h3 className="h3 font-medium mb-4">
              <br />
              반갑습니다,{" "}
              <span className="text-accent">
                <FlipText>프론트엔드</FlipText>
              </span>{" "}
              개발자
            </h3>
            <h1 className="h1">
              <span className="text-accent">
                <FlipText>주성엽</FlipText>
              </span>
              입니다
            </h1>
            <p className="mt-4 mb-8 text-[1rem]">
              어제보다 나은 세상과 제 자신을 만드는 개발자가 되고 싶습니다.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/static/assets/cv.pdf" download="sungyupjoo.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span className="font-bold text-[1rem]">이력서</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none  mb-8 xl:mb-0 rounded-full">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
