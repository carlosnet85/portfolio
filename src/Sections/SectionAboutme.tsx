import { SectionContainer } from "../components/layout/SectionContainer/SectionContainer";

export const SectionAboutme = () => {
  return ( 
    <SectionContainer id="aboutme">
      
      <div className="mx-auto max-w-2xl px-4 pb-8 flex flex-col place-items-center font-bold gap-4 ">
        <h1 className="text-[7vw] md:text-[3.5rem] text-blue-400 text-nowrap">Welcome to my portfolio!</h1>
        <p className="text-lg text-center">
          Please, free feel to explore some of my <a href="#works" className="text-blue-400">works</a>, or just download my CV
          for professional purposes. You can get the 
          <a href="https://github.com/carlosnet85/portfolio-react" className="text-blue-400"> source code of this page here</a>. Everything was made with React, Tailwind and Framer motion.
        </p>
      </div>
      <aside className="flex flex-col place-items-center gap-8 py-16 px-8 md:px-16 bg-zinc-800  dark:rounded-2xl">
        <img
          src="https://avatars.githubusercontent.com/u/54481508?u=d2c3fe23e301e0b837c086584ddac3711b612b7e&v=4"
          className="max-w-[8rem] max-h-[8rem] rounded-full border-zinc-200"
        />
        <p className="text-white text-justify">
          Hey there! I'm Carlos Victor, a full-stack developer (kinda). I started with
          Arduino boards and quickly got interested by diving into some
          SoloLearn C++/C# courses. My stupidity led me up further, where I
          ended up getting into on databases and web development. You'll mostly
          find me working with Java and JavaScript, but I also work with C++ —
          I've got about a year of experience with it, thanks to some cool
          Arduino projects. My lifetime of coding stands at two years (so far).
        </p>
      </aside>
    </SectionContainer>
  );
};
