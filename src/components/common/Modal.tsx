import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const Modal = forwardRef((props: { text: string }, ref) => {
    const { text } = props;

    const dialogRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        dialogRef.current?.showModal();
    };

    useImperativeHandle(ref, () => ({
        openModal,
    }));
    const closeModal = () => {
        dialogRef.current?.close();
    };

    useEffect(() => {
        if (dialogRef.current) {
            const dialogEl = dialogRef.current as HTMLDialogElement;
            dialogEl.addEventListener('click', (e: MouseEvent) => {
                const dialogArea = dialogEl.getBoundingClientRect();
                if (
                    e.clientX < dialogArea.left ||
                    e.clientX > dialogArea.right ||
                    e.clientY < dialogArea.top ||
                    e.clientY > dialogArea.bottom
                ) {
                    dialogRef.current?.close();
                }
            });
        }
    }, []);
    return (
        <div>
            <dialog ref={dialogRef} className="px-4 py-6 text-center bg-white rounded-md">
                <p className="mb-2">{text}</p>
                <div>
                    <button
                        onClick={closeModal}
                        className="px-2 py-1 font-semibold text-white bg-black rounded-md"
                    >
                        <span>확인</span>
                    </button>
                </div>
            </dialog>
        </div>
    );
});

export default Modal;
