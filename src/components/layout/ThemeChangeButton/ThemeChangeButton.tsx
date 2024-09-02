import { LuLamp } from "react-icons/lu";


export const ThemeChangeButton: React.FC = () => {
    return (
        <button
            className="fixed top-0 right-0 z-20 m-2 text-2xl text-zinc-100 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-100 rounded-full p-2"
            onClick={() => {
                localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
                document.documentElement.classList.toggle("dark", localStorage.theme === "dark");
            }}
        >
            <LuLamp />
        </button>
    );
};
            