import React from "react";
import MainLayout from "../layouts/Main";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Image from "next/image";
import {ImageBaseURL} from "../config";
import {convertContentType} from "../helper/Helper";
import Link from "next/link";
import ConvertDate from "../helper/ConvertDate";
import Breadcrumbs from "../components/common/BreadCrumbs";
import Script from "next/script";
import ReviewBar from "../components/reviews/ReviewBar";

export default function PostView({post}) {
    const breadCrumbs = [
        {name: ' مقالات', href: "/blog", current: false},
        {name: post?.title, href: "/" + encodeURI(post?.slug), current: true},
    ]
    const {content} = post
    let pContent = "";
    {
        JSON.parse(content).blocks.map((item, i) => {
            // console.log('l',`${convertContentType(item)}`)
            if (item?.data?.items) {
                item?.data?.items.map(item => {
                    pContent += item.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ')
                })
            }
            if (item?.data?.text) {
                pContent += item.data.text.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ')
            }
        })
    }
    return (
        <>
            <Script id={"article-ld"} key={`JSON-LD`} type='application/ld+json' dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": post?.title,
                        "image": ImageBaseURL+post?.thumbnail?.url,
                        "description": pContent.substring(0,109),
                        "author": {
                            "@type": "Organization",
                            "name": "سنگ ساختمانی کاریزما",
                            "url": "https://karizmastone.com"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "سنگ ساختمانی کاریزما",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://karizmastone.com/logo.png"
                            }
                        },
                        "datePublished": post.createdAt,
                        "dateModified": post.updatedAt
                    }
                )
            }}>

            </Script>
            <article className={"lg:pt-16 pt-14 pb-4 min-h-screen bg-background-light "}>
                <div className={"max-w-7xl mx-auto"}>
                    <div className={"max-w-4xl"}>

                        <h1 className="text-4xl mb-4 mt-20  font-black text-on-background-light  sm:text-5xl leading-[56px] sm:leading-[72px] tracking-[.1px]">
                          <b>
                            {post.title}
                          </b>
                        </h1>


                        <Breadcrumbs iconClass={"text-on-surface-variant-light  "}
                                     classNameActive={"text-on-surface-light  font-semibold leading-[24px]"}
                                     className={"text-on-surface-light  leading-[24px] font-semibold"}
                                     items={breadCrumbs}/>
                        <div
                            className={"flex items-center justify-between mt-3 mb-20"}>
                            <div className={"text-on-surface-variant-light "}>
                                دسته بندی :
                                <Link locale={false} href={'/blog/' + post.categories.slug}>
                                    <a className={"rtl:mr-2 ltr:ml-2 text-primary-light  hover:underline hover:text-on-primary-container-light"}>
                                        {post.categories.title}
                                    </a>
                                </Link>
                            </div>
                            <div className={"text-on-surface-variant-light "}>
                                <time dateTime={post.datetime}>
                                    <ConvertDate>
                                        {new Date(post.createdAt).toLocaleDateString('fa-IR')}
                                    </ConvertDate>
                                </time>
                            </div>
                        </div>
                        <Image className={"rounded-[64px]"} alt={post?.title} sizes={"80vw"} layout="responsive"
                               width={1080} height={720} objectFit="cover"
                               src={ImageBaseURL + post?.thumbnail.url}/>
                        <div className={"mt-16"}>
                            {JSON.parse(post?.content).blocks.map((item, i) => {
                                return convertContentType(item)
                            })}
                        </div>
                        <div className={"mt-16"}>
                            <ReviewBar/>
                        </div>

                    </div>

                </div>
            </article>
        </>
    )
}
