export const skills: {
  title: string;
  value: string;
  content: React.ReactNode;
}[] = [
  {
    title: "Front End",
    value: "Front End",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-white">
        <h3 className="text-xl font-bold md:text-4xl">Front End</h3>
        <div className="py-10">
          <div className="max-w-min cursor-pointer rounded-3xl bg-black-300 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110 md:text-lg">
            Tailwind
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Back End",
    value: "Back End",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Back End</p>
      </div>
    ),
  },
];
