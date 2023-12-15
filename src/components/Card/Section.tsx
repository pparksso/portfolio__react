const Section = (props: { id: string; children: React.ReactNode }) => {
    const { id } = props;
    return (
        <section id={id} className={`py-[60px] ${id === 'project' ? '' : 'border-b'} border-gray-200`}>
            {props.children}
        </section>
    );
};

export default Section;
