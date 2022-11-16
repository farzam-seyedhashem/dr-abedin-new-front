/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/
import MainLayout from "../layouts/Main";
import Image from 'next/image'
import {useState} from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import PageHeader from "../components/common/PageHeader";
import Link from "next/link";


export async function getStaticProps({locale}) {
    return {
        props: {
            locale,
            ...await serverSideTranslations(locale, ['pages', 'common', 'aboutus'])
        },
    }
}


export default function Example({locale}) {
    const [openVideo, setOpenVideo] = useState(false)
    const {t} = useTranslation('aboutus')
    const breadCrumbs = [
        {name: t("Page Title"), href: "/about-us", current: true},
    ]

    function ParagraphNormal({children, color}) {
        return (
            <p className={`${color ? color : "text-on-surface-variant-light  "} leading-8 mb-4`}>
                {children}
            </p>
        )
    }

    const drFeatures = [
        t("F1"), t("F2"), t("F3"), t("F4"), t("F5")
    ]

    return (
        <MainLayout metaDescr={"درباره دکتر بهزاد عابدین بیشتر بدانید."} metaTitle={"درباره ما | دکتر بهزاد عابدین"}>

            <div className={"p-2 bg-background-light  "}>
                <PageHeader breadcrumbs={breadCrumbs} title={t("Page Title")} shortDescription={t("support title text")}
                            imageAlt={t("support title text")} imageUrl={"/slider/s-1.jpg"}/>
                <div
                    className="container mx-auto lg:max-w-7xl">
                    <div className={"mt-16"}>
                        <p className={"leading-6 text-on-surface-variant-light  "}>
                            <strong className={"font-medium"}>
                                {t("content")}
                            </strong>
                        </p>
                        <ul className={"mt-4 space-y-[0.5]"}>
                            <li>
                                <Link locale={false} href={"/about-us#h1"}>
                                    <a className={"hover:underline hover:underline-offset-2 p-px text-primary-light  font-medium hover:text-on-primary-container"}>
                                        {t("About Dr Abedin")}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link locale={false} href={"/about-us#h2"}>
                                    <a className={"hover:underline hover:underline-offset-2 p-px text-primary-light  font-medium hover:text-on-primary-container"}>
                                        {t("Subtitle Second")}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link locale={false} href={"/about-us#h3"}>
                                    <a className={"hover:underline hover:underline-offset-2 p-px text-primary-light  font-medium hover:text-on-primary-container"}>
                                        {t("Subtitle Third")}
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <h2 id={"h1"}
                        className="text-3xl -mt-8  pt-24 mb-10 font-black text-on-background-light  sm:text-4xl leading-[48px] sm:leading-[56px] tracking-[.1px]">
                        {t("About Dr Abedin")}
                    </h2>
                    <div className={"grid grid-cols-12 md:gap-8 mb-12"}>
                        <div className={"md:col-span-4 col-span-12"}>
                            <ParagraphNormal>
                                {t("abedin-about")}
                            </ParagraphNormal>
                            <ul className={"list-star-rtl mr-[22px]"}>
                                {drFeatures.map(item => <li className={"mb-4 relative text-on-surface-variant-light"}>
                                    <h6>
                                        {item}
                                    </h6>
                                </li>)}
                            </ul>
                        </div>
                        <div
                            className={"md:col-span-8 col-span-12"}>
                            <div className={"overflow-hidden rounded-[24px] "}>
                                <Image objectFit={"cover"} width={1080} height={720}
                                       src={"/about-us/1.jpeg"} layout={"responsive"}/>
                            </div>
                        </div>
                    </div>
                    <h2 id={"h2"}
                        className="text-3xl -mt-8  pt-24 mb-10 font-black text-on-background-light  sm:text-4xl leading-[48px] sm:leading-[56px] tracking-[.1px]">
                        {t("Subtitle Second")}
                    </h2>
                    <ParagraphNormal>
                        {t("First P")}
                    </ParagraphNormal>
                    <ParagraphNormal color={"text-on-secondary-container-light "}>
                        {t("Second P")}
                    </ParagraphNormal>
                    <h2 id={"h5"}
                        className="text-3xl mb-10 -mt-8  pt-24 font-black text-on-background-light  sm:text-4xl leading-[48px] sm:leading-[56px] tracking-[.1px]">
                        {t("Subtitle Third")}
                    </h2>
                    <div
                        className={"relative mt-10 w-full h-full relative rounded-[32px] overflow-hidden md:rounded-[64px]"}>
                        <div className={"aspect-w-16 aspect-h-10 relative"}>
                            <Image objectFit={"cover"} className={"z-10"} width={1135} height={768} layout={"fill"}
                                   src={"/video-thumb.png"}/>
                        </div>
                        <div
                            className={"absolute z-20 inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-25"}>
                            <button onClick={() => setOpenVideo(true)}
                                    aria-label={"video-play"}
                                    className={"relative  hover:bg-white hover:bg-opacity-[12%] transition duration-300 outline-none focus:border-2 focus:border-white rounded-3xl w-[92px] h-[92px] flex items-center justify-center"}>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M77.1461 39.9994C83.6068 52.0411 78.7255 62.9426 66.2666 66.2653C62.9426 78.7255 52.0411 83.6055 39.9994 77.1461C27.9577 83.6068 17.0561 78.7255 13.7334 66.2666C1.27453 62.9426 -3.60675 52.0411 2.85391 39.9994C-3.60675 27.9577 1.27453 17.0561 13.7334 13.7334C17.0561 1.27453 27.9577 -3.60675 39.9994 2.85391C52.0411 -3.60675 62.9426 1.27453 66.2653 13.7334C78.7255 17.0561 83.6055 27.9577 77.1461 39.9994Z"
                                        fill="white"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className={"absolute"} height="40px"
                                     viewBox="0 0 24 24" width="40px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
                                </svg>
                            </button>
                        </div>
                    </div>


                    {openVideo && <div
                        className={"fixed inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur md:px-32 sm:px-8 px-4 z-1001 flex items-center justify-center"}>
                        <div
                            className={"bg-black relative rounded-[16px] overflow-hidden h-auto w-full md:w-8/12 overflow-hidden"}>
                            {/*<video controls autoPlay className={""} src={"/pr-v.mp4"}/>*/}
                            <div className={" w-full overflow-hidden overflow-hidden"}>
                                <div className="relative overflow-hidden aspect-video w-full h-full">
                                    <video controls className={"rounded-[16px]"}>
                                        <source src={"/about-us-video.MP4"}/>
                                    </video>
                                </div>
                            </div>
                            <button onClick={() => setOpenVideo(false)}
                                    className={"bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl text-white md:h-12 md:w-12 h-10 w-10 flex items-center justify-center md:top-5 ltr:md:left-5 ltr:left-2 rtl:md:right-5 rtl:right-2 top-2  rounded-full absolute"}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                     fill="currentColor">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path
                                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                                </svg>
                            </button>
                        </div>

                    </div>}


                </div>
            </div>
        </MainLayout>
    )
}
