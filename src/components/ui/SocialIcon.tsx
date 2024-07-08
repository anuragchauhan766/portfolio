import { cn } from "@/lib/utils";
import React from "react";
import { LinkPreview } from "./LinkPreview";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const SocialIcon = ({
  icon,
  link,
  ClassName,
  isStatic,
  imageSrc = "",
}: {
  icon: React.ReactNode;
  link: string;
  ClassName?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
)) => {
  return (
    <LinkPreview
      url={link}
      target="_blank"
      className={cn(
        "relative inline-flex h-9 w-9 overflow-hidden rounded-full p-[2px] focus:outline-none md:h-10 md:w-10 lg:h-12 lg:w-12",
        ClassName
      )}
      isStatic={isStatic as any}
      imageSrc={imageSrc}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl`}
      >
        {icon}
      </span>
    </LinkPreview>
  );
};

export default SocialIcon;
