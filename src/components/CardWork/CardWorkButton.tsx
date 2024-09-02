import { IconType } from "react-icons";

interface CardWorkButtonProps {
  buttonTitle: string;
  url: string;
  Icon: IconType;
}

export const CardWorkButton: React.FC<CardWorkButtonProps> = ({ buttonTitle, url,  Icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex place-items-center gap-0.5 text-sm text-zinc-800 rounded-md bg-white hover:bg-zinc-200 p-2 transition-colors duration-300"
    >
       <Icon className="text-sm" /> {buttonTitle}
    </a>
  );
};
