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
            ...await serverSideTranslations(locale, ['pages', 'common', 'services'])
        },
    }
}


export default function Example({locale}) {
    const [openVideo, setOpenVideo] = useState(false)
    const {t} = useTranslation('services')
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
        t("F1"),t("F2"),t("F3"),t("F4"),t("F5"),t("F6"),t("F7"),t("F8"),t("F9"),t("F10"),t("F11")
    ]

    return (
        <MainLayout metaDescr={"درباره دکتر بهزاد عابدین بیشتر بدانید."} metaTitle={"درباره ما | دکتر بهزاد عابدین"}>

            <div className={"p-2 bg-background-light  "}>
                <PageHeader breadcrumbs={breadCrumbs} title={t("Page Title")} shortDescription={t("support title text")}
                            imageAlt={t("support title text")} imageUrl={"/slider/s-1.jpg"}/>
                <div
                    className="container mx-auto">
                    <div className={"max-w-3xl"}>
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
                                        {t("T1")}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link locale={false} href={"/about-us#h2"}>
                                    <a className={"hover:underline hover:underline-offset-2 p-px text-primary-light  font-medium hover:text-on-primary-container"}>
                                        {t("T2")}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link locale={false} href={"/about-us#h3"}>
                                    <a className={"hover:underline hover:underline-offset-2 p-px text-primary-light  font-medium hover:text-on-primary-container"}>
                                        {t("T3")}
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <h2 id={"h1"}
                        className="text-3xl -mt-8  pt-24 mb-10 font-black text-on-background-light  sm:text-4xl leading-[48px] sm:leading-[56px] tracking-[.1px]">
                        {t("T1")}
                    </h2>
                    <ul className={"list-star-rtl mr-[22px]"}>
                        {drFeatures.map((item,i) => i<=3 && <li key={i} className={"mb-4 relative text-on-surface-variant-light"}>
                            <h6>
                                {item}
                            </h6>
                        </li>)}
                    </ul>
                    <h2 id={"h2"}
                        className="text-3xl -mt-8  pt-24 mb-10 font-black text-on-background-light  sm:text-4xl leading-[48px] sm:leading-[56px] tracking-[.1px]">
                        {t("T2")}
                    </h2>
                    <ul className={"list-star-rtl mr-[22px]"}>
                        {drFeatures.map((item,i) =>  (i>3 && i<=7) && <li key={i} className={"mb-4 relative text-on-surface-variant-light"}>
                            <h6>
                                {item}
                            </h6>
                        </li>)}
                    </ul>
                    <h2 id={"h3"}
                        className="text-3xl -mt-8  pt-24 mb-10 font-black text-on-background-light  sm:text-4xl leading-[48px] sm:leading-[56px] tracking-[.1px]">
                        {t("T3")}
                    </h2>
                    <ul className={"list-star-rtl mr-[22px]"}>
                        {drFeatures.map((item,i) => i>7 && <li key={i} className={"mb-4 relative text-on-surface-variant-light"}>
                            <h6>
                                {item}
                            </h6>
                        </li>)}
                    </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
