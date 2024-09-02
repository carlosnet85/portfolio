import { IoLogoGithub, IoLogoLinkedin, IoLogoDiscord } from "react-icons/io5";
import { FooterButtonSocial } from "./FooterButtonSocial";

export const Footer: React.FC = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto flex justify-around py-4 px-1 md:px-4 bg-blue-400 sticky bottom-0">
        <FooterButtonSocial
          title="Github"
          url="https://github.com/carlosnet85"
          Icon={IoLogoGithub}
        />

        <FooterButtonSocial
          title="Linkedin"
          url="https://www.linkedin.com/in/carlosvictor85/"
          Icon={IoLogoLinkedin}
        />

        <FooterButtonSocial
          title="Discord"
          url="https://discord.com/users/1090773079132749884"
          Icon={IoLogoDiscord}
        />
      </div>
      <footer>
        <div className="flex place-content-around place-items-start md:place-items-end max-w-3xl mx-auto p-4 bg-blue-400 gap-2">
          <p className="text-center text-sm text-white">
            © Developed by Carlos Victor - 2024 - All rights reserved
          </p>
          <div className="flex flex-col md:flex-row gap-4 text-white font-bold">
            <a href="#contact">
              Contact
            </a>
            <a href="#aboutme">
              About me
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#works">
              Works
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
