import { ChangeEvent, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Title from '@/components/Card/Title';
import ContactInput from '@/components/ContactInput';
import { PEER_COMMON, TEXTAREA_LABEL_PEER } from '@/assets/styles/_var';
import '@/assets/styles/custom.css';
import img from '@/assets/images/img_original.jpg';

const Contact = () => {
    const [messageFocus, setMessageFocus] = useState(false);
    const [messageVal, setMessageVal] = useState('');
    console.log(messageVal);
    return (
        <MainLayout>
            <div className="relative w-3/5 py-12 text-black">
                <div className="absolute top-[3rem] -translate-x-1/2 bg-white left-1/2 px-2">
                    <Title>Contact me!</Title>
                </div>
                <div className="border mt-[1rem] shadow-lg rounded-md px-10 py-14 flex">
                    <div className="w-1/2 pr-3 overflow-hidden opacity-90">
                        <img src={img} alt="" className="rounded-md" />
                    </div>
                    <div className="flex flex-col w-1/2 pl-3">
                        <ContactInput type="text" id="name" label="Name" />
                        <ContactInput type="text" id="email" label="Email" />
                        <div
                            className={`relative flex-grow px-12 pt-6 pb-2 overflow-y-hidden rounded-md bg-emerald bg-opacity-10 ${
                                messageFocus && 'border-emerald border-2'
                            } `}
                        >
                            <textarea
                                id="message"
                                placeholder=""
                                className={`h-full resize-none w-full bg-transparent outline-none text-base peer hide-scrollbar`}
                                onFocus={() => setMessageFocus(true)}
                                onBlur={() => setMessageFocus(false)}
                                onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                    setMessageVal(e.target.value)
                                }
                            ></textarea>
                            <label
                                htmlFor="message"
                                className={`left-12 top-6 ${PEER_COMMON} ${TEXTAREA_LABEL_PEER}`}
                            >
                                Message
                            </label>
                        </div>
                        <div className="mt-3 text-center">
                            <button className="w-1/2 py-2 font-bold text-white transition-all duration-200 bg-black border-2 rounded-md hover:border-emerald hover:bg-opacity-10 hover:bg-emerald hover:text-black">
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Contact;
