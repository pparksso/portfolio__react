import { INPUT_NOMAL, INPUT_LABEL_PEER, PEER_COMMON } from '@/assets/styles/_var';

const ContactInput = (props: { type: string; label: string; id: string }) => {
    const { label, type, id } = props;
    return (
        <div className="relative w-full mb-4">
            <input required id={id} type={type} className={`${INPUT_NOMAL}`} />
            <label
                htmlFor={id}
                className={`left-12 top-1/2 -translate-y-1/2 ${INPUT_LABEL_PEER} ${PEER_COMMON}`}
            >
                {label}
            </label>
        </div>
    );
};

export default ContactInput;
