export const skills: {
  title: string;
  value: string;
  content: React.ReactNode;
}[] = [
  {
    title: "Front End",
    value: "Front End",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-black-100 to-black p-10 text-xl font-bold text-white md:text-4xl">
        <p>Front End</p>
      </div>
    ),
  },
  {
    title: "Back End",
    value: "Back End",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Back End</p>
      </div>
    ),
  },
];
