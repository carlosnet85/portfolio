import { IconType } from "react-icons";

interface FooterButtonSocialProps {
  title: string;
  url: string;
  Icon: IconType;
}

export const FooterButtonSocial: React.FC<FooterButtonSocialProps> = ({
  title,
  url,
  Icon,
}) => {
  return (
    <a href={url} aria-label={title} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-md md:text-lg text-white hover:text-zinc-800 transition-colors duration-200">
  
        <Icon className="text-2xl md:text-3xl" />
        {title}
 
    </a>
  );
};
