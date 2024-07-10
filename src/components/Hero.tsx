import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import SocialIcon from "./ui/SocialIcon";
import { SocialLinks } from "@/data/social";
import { ThemeSwitcher } from "./common/ThemeSwitcher";

const Hero = () => {
  return (
    <div className="pb-20 pt-28">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex items-center justify-end gap-4">
        {SocialLinks.map((link, index) => (
          <SocialIcon
            key={index}
            isStatic={link.isStatic as any}
            imageSrc={link.imageSrc}
            icon={<link.icon className="h-1/2 w-1/2" />}
            link={link.link}
          />
        ))}
        <ThemeSwitcher />
      </div>
      <div className="relative my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[67vw]">
          <TextGenerateEffect
            words="Hii! I'm Anurag Singh Chauhan, a Full Stack Developer."
            className="text-center text-3xl md:text-5xl lg:text-6xl"
          />
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Building seamless, scalable, and stunning web applications.
          </p>
          {/** // TODO: use Link component
           *
           */}

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
