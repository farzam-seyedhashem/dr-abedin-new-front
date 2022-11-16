import Head from 'next/head'
import React from "react";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import Link from "next/link";

export default function TabletMenu({isPhonePopupOpen, setIsPhonePopupOpen}) {
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
            name: t("Products"), link: "/products", outlineIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} height="24px" viewBox="0 0 24 24"
                         width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"/>
                    </svg>
                )
            }, solidIcon: ({className}) => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} height="24px" viewBox="0 0 24 24"
                         width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/>
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
            name: t("Gallery"), link: "/gallery", outlineIcon: ({className}) => {
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
        <header>
            <nav
                className="md:block lg:hidden hidden max-w-[90px] fixed right-0 pt-14 top-0 px-3 bg-surface-light  z-999 h-screen">

                <button
                    type="button"
                    onClick={() => setIsPhonePopupOpen(true)}
                    className="relative shadow-[0_1px_3px_0px_rgba(0,0,0,.30)] mx-auto h-14 w-14 rounded-2xl flex items-center justify-center bg-secondary-container text-on-secondary-container-light "
                >
                    <div className={"absolute rounded-2xl inset-0 shadow-[0_4px_8px_0px_rgba(0,0,0,.15)]"}/>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                    </svg>
                </button>

                <div
                    className="h-full items-center flex -mt-14">


                    <ul>
                        {menu.map((item, i) =>
                            <Link locale={false} key={i} href={item.link}><a>
                                <li className={`h-[56px] text-[12px] font-medium text-center tracking-[0.5px] leading-[20px] items-center mb-3 rounded-full ${router.pathname === item.link ? "text-on-surface-light " : "text-on-surface-variant-light "}`}
                                    key={i}>
                                    <div
                                        className={`mb-1 flex justify-center items-center h-8 rounded-[16px] ${router.pathname === item.link ? "bg-secondary-container-light  text-on-secondary-container-light " : "text-on-surface-variant-light "}`}>
                                        <item.outlineIcon/>
                                    </div>

                                    {item.name}

                                </li>
                            </a>
                            </Link>
                        )}
                    </ul>

                </div>
            </nav>
        </header>
    )
}
