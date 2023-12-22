const Section = (props: { id: string; children: React.ReactNode }) => {
    const { id } = props;
    return (
        <section
            id={id}
            className={`py-[60px] ${
                id === 'project' ? '' : 'border-b'
            } border-gray-200 scroll-m-16 break-keep`}
        >
            {props.children}
        </section>
    );
};

export default Section;
