import {Fragment, useState} from "react";
import {Dialog, Transition} from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

export default function Home({setIsOpenLanguageDialog, setIsPhonePopupOpen, isPhonePopupOpen, languageList}) {
    const [open, setOpen] = useState(false)
    const {t} = useTranslation('common')
    const router = useRouter()
    const menu = [
        {
            name: t("Main Page"), link: "/", outlineIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                         fill={"currentColor"} className={className}>
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                    </svg>
                )
            }, solidIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                         fill={"currentColor"} className={className}>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                )
            }
        },
        {
            name: t("Services"), link: "/services", outlineIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} height="24px" viewBox="0 0 24 24"
                         width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
                    </svg>
                )
            }, solidIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                         fill="currentColor" className={className}>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
                    </svg>
                )
            }
        },
        {
            name: t("Blog"), link: "/blog", outlineIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} enableBackground="new 0 0 24 24"
                         height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                        <g>
                            <rect fill="none" height="24" width="24"/>
                            <g>
                                <path
                                    d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z"/>
                            </g>
                            <path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z"/>
                        </g>
                    </svg>
                )
            }, solidIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} height="24px" viewBox="0 0 24 24"
                         width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                )
            }
        },
        {
            name: t("About US"), link: "/about-us", outlineIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} height="24px" viewBox="0 0 24 24"
                         width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"/>
                    </svg>
                )
            }, solidIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} height="24px" viewBox="0 0 24 24"
                         width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                )
            }
        },
        {
            name: t("Contact US"), link: "/contact-us", outlineIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                         fill="currentColor" className={className}>
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
                    </svg>
                )
            }, solidIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                         fill={"currentColor"} className={className}>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                )
            }
        }
    ]

    return (
        <>
            <header
                className={"block md:hidden bg-surface-1 py-1 sticky top-0 left-0 w-full z-999"}>
                <nav className={"p-2 flex items-center"}>

                    <button aria-label={'menu'} onClick={() => setOpen(true)}
                            className={"text-on-surface-variant-light  flex items-center justify-center rounded-full w-12 h-12 hover:bg-on-surface-variant hover:bg-opacity-[8%]"}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                             fill="currentColor">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg>
                    </button>
                    <div className="mr-2 flex items-center">
                        <Image
                            priority={true}
                            width={104}
                            height={32}
                            layout={"fixed"}
                            className=""
                            src="/logo.png"
                            alt="Workflow"
                        />
                    </div>
                </nav>
            </header>

            <Transition.Root show={open} as={Fragment}>
                <Dialog onTouchMove={() => {
                    setOpen(false)
                }} as="div" className="fixed inset-0 z-999 overflow-hidden" onClose={setOpen}>
                    <div className="absolute inset-0 overflow-hidden">
                        <Dialog.Overlay className="absolute bg-black bg-opacity-30 inset-0"/>

                        <div className="fixed inset-y-0 rtl:right-0 ltr:left-0 max-w-full flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="rtl:translate-x-full ltr:-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="rtl:translate-x-full ltr:-translate-x-full"
                            >
                                <div className="w-screen max-w-[360px]  ">
                                    <div
                                        className="h-full flex flex-col rounded-l-2xl py-3 bg-surface-light  shadow-xl overflow-y-scroll">
                                        <div className={`relative flex-1 px-3`}>
                                            <h3 className={"px-4 py-[18px] text-on-surface-variant-light  font-medium leading-[24px]"}>
                                                منو
                                            </h3>
                                            {/*<p className={"px-4 py-4 text-on-surface-variant text-sm font-medium tracking-[0.1px] leading-[20px]"}>منو</p>*/}
                                            <ul>
                                                {menu.map((item, i) =>
                                                    <Link locale={false} key={i} href={item.link}><a>
                                                        <li className={`h-[56px] flex text-sm font-medium tracking-[0.1px] leading-[20px] items-center mb-4 px-4 rounded-full ${router.pathname === item.link ? "bg-secondary-container-light   text-on-secondary-container-light" : "text-on-surface-variant-light "}`}
                                                            key={i}>
                                                            <item.outlineIcon
                                                                className={`ml-3 ${router.pathname === item.link ? "text-on-secondary-container-light " : "text-on-surface-variant-light "}`}/>
                                                            {item.name}
                                                        </li>
                                                    </a>
                                                    </Link>
                                                )}
                                            </ul>
                                        </div>
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
