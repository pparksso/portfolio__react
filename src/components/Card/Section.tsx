const Section = (props: { id: string; children: React.ReactNode }) => {
    return (
        <section id={props.id} className="py-[60px] border-b border-gray-200">
            {props.children}
        </section>
    );
};

export default Section;
