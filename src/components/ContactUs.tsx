"use client";
import MagicButton from "./ui/MagicButton";
import SocialIcon from "./ui/SocialIcon";
import { SocialLinks } from "@/data/social";
import ContactUsForm from "./common/ContactUsForm";

import { MdContentCopy, MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);

    setCopied(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      <div className="mx-auto grid w-full grid-cols-2 place-items-center gap-10 md:w-[70vw]">
        <div>
          <div className="flex flex-col items-start justify-start text-left">
            <h1 className="text-left text-4xl font-bold md:text-5xl">
              Interested ? <br />
              <span className="text-purple">Let&apos;s Connect.</span>
            </h1>
            <p className="my-5 text-lg text-white-200 md:mt-8 lg:max-w-[26vw]">
              Got a project in mind or just want to say hi? Let&apos;s turn
              ideas into reality together!
            </p>

            <div className="flex w-full items-center justify-start gap-10 md:gap-10">
              {SocialLinks.map((link, index) => (
                <SocialIcon
                  key={index}
                  isStatic={link.isStatic as any}
                  imageSrc={link.imageSrc}
                  icon={<link.icon className="h-1/2 w-1/2" />}
                  link={link.link}
                />
              ))}
            </div>

            <MagicButton
              title="dev.anuragchauhan@gmail.com"
              icon={
                copied ? (
                  <MdCheck className="h-6 w-6" />
                ) : (
                  <MdContentCopy className="h-6 w-6" />
                )
              }
              handleClick={handleCopy}
              position="right"
              ClassName="md:w-80"
            />
          </div>
          <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm font-light md:text-base md:font-normal">
              Copyright © 2024 Anurag Singh Chauhan
            </p>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </footer>
  );
};

export default Footer;
