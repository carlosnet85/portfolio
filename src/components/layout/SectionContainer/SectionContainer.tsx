


export const SectionContainer: React.FC<{ children: React.ReactNode, id?: string }> = ({ children, id }) => {

    return (
        <section id={id} className="relative mx-auto max-w-3xl flex flex-col pt-12 bg-white text-zinc-800 dark:bg-black dark:text-white">
            {children}
        </section>
    );
}