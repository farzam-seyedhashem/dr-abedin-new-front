/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";


export default function Breadcrumbs({items,className,classNameActive,iconClass}) {
    const router = useRouter()
    const {t} = useTranslation("common")
    const BreadcrumbsJSON = (items) => {
        let JSON = "";
        for (let i = 0; i < items.length; i++) {
            if (i===items.length-1){
                JSON += `,{
            "@type": "ListItem",
            "position": ${i + 2},
            "name": "${items[i].name}",
            "item": "${router.locale==="en"?"https://en.karizmastone.com":"https://karizmastone.com"}${items[i].href}"
        }`
            }else {
                JSON += `,{
            "@type": "ListItem",
            "position": ${i + 2},
            "name": "${items[i].name}",
            "item": "${router.locale==="en"?"https://en.karizmastone.com":"https://karizmastone.com"}${items[i].href}"
        }`
            }

        }
        return JSON


    }
    return (
        <>

            <Head>
                <script key="breadcrumbs-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "${t("WebsiteName")}",
                    "item": "${router.locale==="en"?"https://en.karizmastone.com":"https://karizmastone.com"}"
                }` + BreadcrumbsJSON(items) + `]
                }`
                }}>

                </script>
            </Head>
            <nav className="flex overflow-hidden" aria-label="Breadcrumb">
                <ol className="flex overflow-scroll scrollbar-hidden whitespace-nowrap items-center">
                    <li>
                    <span property="itemListElement" typeof="ListItem">
                      <Link locale={false} href="/">
                        <a title={"Go to Bumble Auto."} property="item" typeof={"WebPage"}
                           className={`${className}`}>
                            {/*<HomeIcon className="flex-shrink-0 hidden md:block h-5 w-5 ml-2" aria-hidden="true"/>*/}
                            <span property="name">{t("WebsiteName")}</span>
                        </a>
                            </Link>
                        <meta property="position" content="1"/>
                    </span>
                    </li>
                    {items.map((page, i) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${iconClass} transform ltr:-scale-100`} fill={"currentColor"} height="24" width="24"><path d="M14 18.2 7.8 12 14 5.8l1.6 1.6L11 12l4.6 4.6Z"/></svg>
                                {!page.current ?
                                    <span property="itemListElement" typeof="ListItem">
                                    <Link locale={false} href={page.href}>
                                    <a
                                        title={`${page.name}`} property="item" typeof="WebPage"
                                        className={`${className}`}
                                    >
                                            <span
                                                property="name">
                                {page.name}
                                            </span>
                                      </a>
                                    </Link>
                                    <meta property="position" content={i + 2}/>
                                </span> :
                                    <span property="itemListElement" typeof="ListItem">
                                        <span property="name"
                                              className={`${classNameActive}`}>{page.name}</span>
                                        <meta property="position" content={i + 2}/>
                            </span>}
                            </div>

                        </li>
                    ))}
                </ol>
            </nav>
        </>
    )
}
