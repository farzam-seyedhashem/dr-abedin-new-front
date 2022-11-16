import React,{Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";

export default function Home({title,description,isOpen,setIsOpen,children,cancelButton,acceptButton,acceptButtonAction}) {
    return (
        <>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-999 overflow-hidden" onClose={setIsOpen}>
                    <div className="absolute inset-0 flex overflow-hidden">
                        <Dialog.Overlay className="absolute bg-[#000000] bg-opacity-80 inset-0"/>
                        <div
                            className="fixed inset-0 items-center justify-center transform h-fit -translate-y-1/2 top-1/2  w-full lg:max-w-[510px] sm:max-w-[410px] max-w-[315px] mx-auto  flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition duration-200 opacity-0"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition opacity-0 duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className={"w-full p-6 bg-surface-light  rounded-[28px]"}>

                                    <svg className={"mx-auto text-secondary-light "} xmlns="http://www.w3.org/2000/svg"
                                         height="24px" viewBox="0 0 24 24"
                                         width="24px" fill="currentColor">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path
                                            d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                                    </svg>
                                    <h1 className={"my-4 text-center text-on-surface-light  text-2xl leading-[40px]"}>
                                        {title}
                                    </h1>
                                    <p className={"text-on-surface-variant-light  mb-4 tracking-[0.25px] leading-[24px] text-sm"}>
                                        {description}
                                    </p>
                                    <div className={"border-b py-2 border-t border-surface-variant-light  mb-6"}>
                                        <div className={"radio-button-group"}>
                                            {children}
                                        </div>
                                    </div>
                                    <div className={"flex justify-end"}>
                                        {cancelButton&&<button
                                            onClick={() => setIsOpen(false)}
                                            className="hover:bg-primary-light rtl:ml-2 ltr:mr-2  outline-none rounded-full hover:bg-opacity-[8%] h-10 px-6 flex items-center min-w-[48px] text-primary-light  text-sm font-medium tracking-[.1px] leading-[24px] flex items-center"
                                        >
                                            {cancelButton}
                                        </button>}
                                        {acceptButton&&<button
                                            onClick={()=> {
                                                acceptButtonAction()
                                                setIsOpen(false)
                                            }}
                                            className="border border-outline-light  hover:bg-primary-light   outline-none rounded-full hover:bg-opacity-[8%] h-10 px-6 flex items-center min-w-[48px] text-primary-light  text-sm font-medium tracking-[.1px] leading-[24px] flex items-center"
                                        >
                                            {acceptButton}
                                        </button>}
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
