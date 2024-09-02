import React from "react";

import { SectionAboutme } from "./Sections/SectionAboutme";
import { SectionWorks } from "./Sections/SectionWorks";
import { SectionKnowledge } from "./Sections/SectionKnowledge";
import { SectionContact } from "./Sections/SectionContact";
import { Footer } from "./components/layout/Footer/Footer";

import { ThemeChangeButton } from "./components/layout/ThemeChangeButton/ThemeChangeButton";

import "./App.css";

export const App: React.FC = () => {
  document.documentElement.classList.toggle("dark", localStorage.theme === "dark");

  return (
    <> 
      <ThemeChangeButton />
      <SectionAboutme />
      <SectionKnowledge />
      <SectionWorks />
      <SectionContact />
      <Footer />
    </>
  );
};

export default App;
