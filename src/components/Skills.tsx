import { skills } from "@/data/skills";
import { Tabs } from "./ui/Tabs";

function Skills() {
  return (
    <section className="relative mx-auto my-40 flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[30rem]">
      <h1 className="mb-4 w-full text-center text-3xl font-bold md:text-5xl lg:text-6xl">
        My Skills
      </h1>
      <Tabs tabs={skills} />
    </section>
  );
}
export default Skills;
