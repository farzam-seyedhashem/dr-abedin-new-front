import MobileMenu from '../components/common/menu/Mobile'
import DesktopMenu from '../components/common/menu/Desktop'
import Footer from '../components/common/Footer'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import Head from "next/head";
import dynamic from 'next/dynamic'
import Image from "next/image";
import Script from "next/script";

const Dialog = dynamic(() => import('../components/Dialog'), {
    ssr: false,
})

export default function MainLayout({children, title, metaTitle, metaDescr, metaKeywords}, props) {

    const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false)
    const [isOpenLanguageDialog, setIsOpenLanguageDialog] = useState(false)
    const {t} = useTranslation("common")
    const router = useRouter()
    const {pathname, asPath, query, locale} = router
    const [languageCode, setLanguageCode] = useState(locale)
    const languageList = [
        {name: "فارسی", code: "fa", icon: "/flags/iran.png"},
        {name: "english", code: "en", icon: "/flags/england.png"},
        {name: "العربية", code: "ar", icon: "/flags/arabic.png"}
    ]

    const contact = [
        {
            name: t("Whatsapp"), href: "https://wa.me/989121353228", icon: ({className}) => {
                return (<svg fill="currentColor" width="24px" height="24px"
                             viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"></path>
                </svg>)
            }
        },
        {
            name: t("Call"), href: "tel:+982144011005", icon: ({className}) => {
                return (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                             fill="currentColor" className={className}>
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path
                        d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
                </svg>)
            }
        }
    ]

    const siteSetting = {
        title: "سنگ ساختمانی | خرید - فروش - صادرات سنگ ساختمانی | سنگ ساختمانی کاریزما",
        description: "خرید سنگ ساختمانی، فروش سنگ ساختمانی، صادرات سنگ ساختمانی مرمریت، تراورتن، گرانیت، مرمر، چینی، اسلب در سنگ ساختمانی کاریزما",
        websiteURL: "https://karizmastone.com",
        siteName: "سنگ ساختمانی کاریزما",
        robot: false,
        position: "35.71570726656777, 51.37135155531929",
        placename: "تهران",
        region: "ایران",
        themeColor: "#f5f7f6",
        keywords: "خرید سنگ ساختمانی | فروش سنگ ساختمانی | صادرات سنگ ساختمانی | سنگ ساختمانی"
    }
    return (


        <>
            <Script src={"/sw.js"} strategy={"worker"}/>
            {locale === "fa" && <Head>
                <meta charSet="utf-8"/>
                <meta name="google-site-verification" content="nt6y2MBEJ3jQm3cPRr6xOjjSE7BNfzhs6mTN6wGhUHo"/>


                <title>{metaTitle || siteSetting.title}</title>
                <meta name="title" content={metaTitle || siteSetting?.title}/>
                <meta name="description" content={metaDescr || siteSetting?.description}/>
                <meta name='viewport'
                      content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, maximum-scale=5'/>
                <meta name="keywords" content={metaKeywords || siteSetting.keywords}/>
                {/*og:meta*/}
                <meta property="og:url" content={siteSetting.websiteURL + router.pathname}/>
                <meta property="og:site_name" content={siteSetting.siteName}/>

                <meta property="og:type" content={props.ogType || "website"}/>
                <meta property="og:locale" content={locale}/>
                <meta property="og:title" content={metaTitle || siteSetting?.title}/>
                <meta property="og:description" content={metaDescr || siteSetting?.description}/>
                <meta property="og:image"
                      content={props.ogImage || siteSetting.websiteURL + '/sangchalipa-icon/icon-200x200.png'}/>
                <meta property="og:image:secure_url"
                      content={props.ogImage || siteSetting.websiteURL + '/sangchalipa-icon/icon-200x200.png'}/>

                {/*twitter meta*/}
                <meta name="twitter:domain" content={siteSetting.websiteURL}/>
                <meta name="twitter:site" content={siteSetting.websiteURL}/>
                <meta name="twitter:title" content={metaTitle || siteSetting?.title}/>
                <meta name="twitter:description" content={metaDescr || siteSetting.description}/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:image" content={siteSetting.websiteURL + "/sangchalipa-icon/icon-144x144.png"}/>
                <meta name="twitter:creator" content="@null_design"/>
                <meta name="twitter:author" content="nulldesign.co"/>

                {/*<link itemProp="url" href=""/>*/}
                <link rel="canonical" href={siteSetting.websiteURL + router.pathname}/>
                <meta itemProp="name" content={metaTitle || siteSetting.title}/>
                <meta itemProp="description" content={metaDescr || siteSetting.description}/>
                {/*<meta name="author" content="آکادمی باریستا ایران"/>*/}

                {siteSetting.robot && <meta name="robots" content="index, follow"/>}
                {siteSetting.robot && <meta name="googlebot"
                                            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>}
                {siteSetting.robot && <meta name="bingbot"
                                            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>}

                {siteSetting.placename && <meta name="geo.placename" content={siteSetting.placename}/>}
                {siteSetting.position && <meta name="geo.position" content={siteSetting.position}/>}
                {siteSetting.region && <meta name="geo.region" content={siteSetting.region}/>}

                <link rel='dns-prefetch' href='//s.w.org'/>


                {/*pwa*/}
                <meta name='application-name' content='Sang Chalipa'/>
                <meta name='apple-mobile-web-app-capable' content='yes'/>
                <meta name='apple-mobile-web-app-status-bar-style' content='default'/>
                <meta name='apple-mobile-web-app-title'
                      content='Sang Chalipa'/>
                <meta name='format-detection' content='telephone=yes'/>
                <meta name='mobile-web-app-capable' content='yes'/>
                <meta name='msapplication-config' content={siteSetting.websiteURL + '/icons/browserconfig.xml'}/>
                <meta name='msapplication-TileColor' content='#da532c'/>
                <meta name='msapplication-tap-highlight' content='no'/>
                <meta name="msapplication-TileImage"
                      content={siteSetting.websiteURL + "/sangchalipa-icon/mstile-144x144.png"}/>
                <meta name="msapplication-starturl" content="/"/>
                {siteSetting.themeColor && <meta name='theme-color' content={siteSetting.themeColor}/>}
                <link rel='apple-touch-icon' sizes='180x180'
                      href={siteSetting.websiteURL + '/sangchalipa-icon/apple-touch-icon.png'}/>
                <link rel='icon' type='image/png' sizes='32x32'
                      href={siteSetting.websiteURL + '/sangchalipa-icon/favicon-32x32.png'}/>
                <link rel='icon' type='image/png' sizes='16x16'
                      href={siteSetting.websiteURL + '/sangchalipa-icon/favicon-16x16.png'}/>
                {locale === "en" ? <link rel='manifest' href={siteSetting.websiteURL + '/en.manifest.json'}
                                         crossOrigin='use-credentials'/> :
                    <link rel='manifest' href={siteSetting.websiteURL + '/manifest.json'}
                          crossOrigin='use-credentials'/>}
                <link rel='mask-icon' href={siteSetting.websiteURL + '/safari-pinned-tab.svg'} color='#4f2c1d'/>
                <link rel='shortcut icon' href={siteSetting.websiteURL + '/sangchalipa-icon/icon.svg'}/>
                <script defer id={"MainLD"} key={`JSON-LD`} type='application/ld+json' dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@id": "https://karizmastone.com",
                        "@type": "HomeAndConstructionBusiness",
                        "image": [
                            "https://karizmastone.com/logo.png",
                            "https://karizmastone.com/slider/9.jpeg",
                            "https://karizmastone.com/slider/10.jpg",
                            "https://karizmastone.com/slider/11.JPEG",
                        ],
                        "name": "سنگ ساختمانی کاریزما",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "منطقه ۲، خیابان شهر آرا، ایران",
                            "addressLocality": "تهران",
                            "addressRegion": "تهران",
                            "addressCountry": "ایران"
                        },
                        "url": "https://karizmastone.com",
                        "logo": "https://karizmastone.com/logo.png",
                        "description": "خرید - فروش - صادرات سنگ ساختمانی مرمریت، تراورتن، گرانیت، مرمر، چینی، اسلب در سنگ ساختمانی کاریزما",
                        "currenciesAccepted": "IRR",
                        "priceRange": "$$$",
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "35.71570726656777",
                            "longitude": "51.37135155531929"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "08:00",
                            "closes": "19:00"
                        },
                        "hasMap": "https://goo.gl/maps/ynLQENbkgRN4bcnt9",
                        "telephone": "+982144011004",
                        "department": [{
                            "@type": "LocalBusiness",
                            "name": "دفتر فروش داخلی",
                            "telephone": "+982144011005"
                        }, {
                            "@type": "LocalBusiness",
                            "name": "دفتر بازرگانی و صادرات",
                            "telephone": "+982144011004"
                        }, {
                            "@type": "LocalBusiness",
                            "name": "واحد فروش داخلی",
                            "telephone": "+989201353229"
                        }, {
                            "@type": "LocalBusiness",
                            "name": "واحد بازارگانی و صادرات",
                            "telephone": "+989201353228"
                        }, {
                            "@type": "LocalBusiness",
                            "name": "مدیر عامل",
                            "telephone": "+989121353229"
                        }, {
                            "@type": "LocalBusiness",
                            "name": "قائم مقام مدیر عامل",
                            "telephone": "+989121353228"
                        }],
                    })
                }}>

                </script>

            </Head>}




            <MobileMenu languageList={languageList} setIsOpenLanguageDialog={setIsOpenLanguageDialog}
                        isPhonePopupOpen={isPhonePopupOpen}
                        setIsPhonePopupOpen={setIsPhonePopupOpen}/>
            <DesktopMenu languageList={languageList} setIsOpenLanguageDialog={setIsOpenLanguageDialog}
                         isPhonePopupOpen={isPhonePopupOpen}
                         setIsPhonePopupOpen={setIsPhonePopupOpen}/>
            {children}
            <Footer/>
            <Dialog description={t("Choose your language from bottom list and click on change button")}
                    title={t("Choose Website Language")} acceptButton={t("Change Language")}
                    acceptButtonAction={() => {
                        // document.body.dir = languageCode==="en"?"ltr":"rtl"
                        router.push({
                            pathname,
                            query
                        }, asPath, {locale: languageCode, shallow: true})

                    }} cancelButton={t("Cancel")} isOpen={isOpenLanguageDialog} setIsOpen={setIsOpenLanguageDialog}>
                {languageList.map((item, i) =>
                    <div
                        onClick={() => setLanguageCode(item.code)}
                        key={i} className="flex items-center mb-1 language-checks">
                        <input defaultChecked={item.code === locale} id={item.code + "-input"}
                               type="radio" name="language"
                               className="hidden"/>
                        <label htmlFor={item.code + "-input"}
                               className="flex rounded-lg items-center cursor-pointer font-normal w-full h-12 pr-2 pl-4 hover:bg-on-surface-variant-light hover:bg-opacity-[8%]">
                            <div
                                className={"h-10 relative w-10 items-center justify-center flex ltr:mr-4 rtl:ml-4"}>
                                <Image layout={"fill"} objectFit={"cover"} src={item.icon}/>
                            </div>
                            {item.name}
                            <svg className={"rtl:mr-auto ltr:ml-auto check"} xmlns="http://www.w3.org/2000/svg"
                                 height="24px" viewBox="0 0 24 24"
                                 width="24px" fill="currentColor">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                            </svg>
                        </label>
                    </div>)}
            </Dialog>
            <Dialog description={t("Contact Way Description")}
                    title={t("Contact Ways")} cancelButton={t("Cancel")} isOpen={isPhonePopupOpen}
                    setIsOpen={setIsPhonePopupOpen}>
                <ul className={"space-y-2"}>
                    {contact.map((item, i) =>
                        <li key={i}>
                            <a href={item.href}
                               className={"h-12 rounded-full text-on-surface-light  text-sm hover:bg-on-surface-variant-light  hover:bg-opacity-[8%] items-center px-4 flex"}>
                                <div
                                    className={"h-10 w-10 rounded-full items-center justify-center flex  text-on-surface-variant-light bg-surface-variant-light  mr-4 rtl:ml-4"}>
                                    <item.icon/>
                                </div>
                                {item.name}
                            </a>
                        </li>)}
                </ul>
            </Dialog>
            <button
                type="button"
                aria-label={"contact-with-us"}
                className="fixed px-4 text-sm shadow-[0_1px_3px_0px_rgba(0,0,0,.30)] z-[443] bottom-4 right-4 items-center h-14  rounded-[16px] flex items-center justify-center bg-secondary-container-light  text-on-secondary-container-light  shadow-2xl"
            >
                <div className={"absolute rounded-[16px] inset-0 shadow-[0_4px_8px_0px_rgba(0,0,0,.15)]"}/>
                <svg className={"rtl:ml-2 ltr:mr-2"} xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                    <path
                        d="M10.95 18.35 7.4 14.8l1.45-1.45 2.1 2.1 4.2-4.2 1.45 1.45ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10ZM5 8h14V6H5Zm0 0V6v2Z"/>
                </svg>
                نوبت دهی
            </button>

        </>


    )
}
