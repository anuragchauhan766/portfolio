import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import { HeroHighlight } from "@/components/ui/BackgroundHighlight";

import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden">
      <HeroHighlight>
        <div className="px-5 sm:px-10">
          <div className="w-full max-w-7xl">
            <FloatingNav
              navItems={[
                {
                  name: "Home",
                  link: "/#home",
                },
                {
                  name: "Projects",
                  link: "#projects",
                },
                {
                  name: "Contact",
                  link: "#contact",
                },
              ]}
            />
            <Hero />
            {/* <Skills /> */}
            <ProjectSection />
            <ContactUs />
          </div>
        </div>
      </HeroHighlight>
    </main>
  );
}
