import MainLayout from "../layouts/Main";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import Image from "next/image";
import PageHeader from "../components/common/PageHeader";
import Link from "next/link";

export async function getStaticProps({locale}) {
    return {
        props: {
            ...await serverSideTranslations(locale, ['pages', 'common', 'contact-us'])
        },
    }
}

export default function Example() {
    const {t} = useTranslation('contact-us')
    const router = useRouter()
    const breadCrumbs = [
        {name: t("Page Title"), href: "/contact-us", current: true},
    ]

    const contactDetails = [
        {
            name: t("Call To DR"),
            phone: {show: '26601967', link: 'tel:+982126601967'},
        },
        {
            name: "شبکه اجتماعی",
            phone: {show: 'صفحه اینستاگرام', link: '#'}
        },
        {
            name: "",
            phone: {show: 'ارتباط با واتس اپ', link: '#'}
        },
        {
            name: "",
            phone: {show: 'کانال تلگرام', link: '#'}
        },
    ]

    const locations = [
        {city: t("Sales Office"), address: t("address 1"), image: "/video-thumb.jpg"},
    ]

    return (
        <MainLayout metaDescr={"راه های ارتباطی با دکتر بهزاد عابدین"}
                    metaTitle={"تماس با ما | دکتر بهزاد عابدین"}>
            <div className={"p-2 bg-background-light  "}>
                <PageHeader breadcrumbs={breadCrumbs} title={t("Page Title")}
                            shortDescription={t("Ways of communication with Dr")}
                            imageAlt={"تماس با ما"} imageUrl={"/contact-us-top.jpg"}/>
                <div
                    className="container mx-auto md:max-w-7xl">
                    <div className={"mt-16"}>
                        <p className={"leading-6 text-on-surface-variant-light  "}>
                            <strong className={"font-medium"}>
                                {t("content")}
                            </strong>
                        </p>
                        <ul className={"mt-4 space-y-[0.5]"}>
                            <li>
                                <Link locale={false} href={"/contact-us#h1"}>
                                    <a className={"hover:underline hover:underline-offset-2 p-px text-primary-light  font-medium hover:text-on-primary-container"}>
                                        {t("Contact with Dr")}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link locale={false} href={"/contact-us#h2"}>
                                    <a className={"hover:underline hover:underline-offset-2 p-px text-primary-light  font-medium hover:text-on-primary-container"}>
                                        {t("Communication routes")}
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <h2 id={"h1"}
                        className="text-3xl -mt-8  pt-24 mb-10 font-black text-on-background-light  sm:text-4xl leading-[48px] sm:leading-[56px] tracking-[.1px]">
                        {t("Contact with Dr")}
                    </h2>
                    <div
                        className={"rounded-2xl max-w-3xl border border-surface-variant-light  overflow-x-auto"}>
                        <table className={"w-full"}>
                            <thead>
                            <tr className={`bg-surface-1  border-b border-surface-variant-light  text-on-surface-variant-light  `}>
                                <th className={" px-6 py-4   font-medium"}>
                                    {t("Contact with")}
                                </th>
                                <th className={"px-6 py-4 border-x border-surface-variant-light  font-medium"}>
                                    {t("Phone Number")}
                                </th>
                            </tr>
                            </thead>
                            <tbody
                                className={"bg-background-light     text-on-surface-variant-light   w-full ltr:text-left rtl:text-right"}>
                            {contactDetails.map((item, i) => <tr key={i}>
                                <th className={`px-6 ${contactDetails[i + 1]?.name === "" ? "" : (i === contactDetails.length - 1) ? "" : "border-b"} border-surface-variant-light  py-4 font-normal`}>
                                    {item.name}
                                </th>
                                <th
                                    className={`px-6 ${(i === contactDetails.length - 1) ? "" : "border-b"}  whitespace-nowrap py-4   border-surface-variant-light   border-x border-surface-variant-light  font-normal`}>
                                    <a href={`${item.phone.link}`}
                                       className={"text-right flex font-medium p-1 underline flex items-center text-primary-light  hover:text-on-primary-container-light"}>
                                        {item.phone.show}
                                    </a>
                                </th>
                            </tr>)}
                            </tbody>

                        </table>
                    </div>
                    <h2 id={"h2"}
                        className="text-3xl -mt-8  pt-24 mb-10 font-black text-on-background-light  sm:text-4xl leading-[48px] sm:leading-[56px] tracking-[.1px]">
                        {t("Communication routes")}
                    </h2>
                    <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"}>
                        {locations.map((location, i) =>
                            <div key={i}
                                 className={"group bg-surface-1 relative transition-all duration-300 hover:rounded-3xl rounded-[32px] overflow-hidden sm:block inline-block "}>
                                <div className={"py-8 px-8"}>
                                    <h2 className={"font-bold sm:text-2xl text-xl text-on-surface-variant-light  "}>
                                        {location.city}
                                    </h2>
                                    <div>
                                        <p className={"text-sm mt-2 sm:text-base whitespace-normal leading-[20px] text-on-surface-variant-light  "}>
                                            {location.address}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"group-hover:rounded-3xl transition-all duration-300 rounded-[32px] relative overflow-hidden "}>
                                    <div
                                        className={"sm:w-full aspect-w-16 aspect-h-9 object-center object-cover"}>
                                        <Image layout={'fill'} objectFit={'cover'}
                                               src={location.image}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </MainLayout>
    )
}
