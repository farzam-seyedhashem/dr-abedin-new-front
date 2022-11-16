import React from "react";
import {ImageBaseURL} from "../../config";
import Image from 'next/image'
import TruncText from '../../helper/TruncText'
import Link from 'next/link'
import ConvertDate from "../../helper/ConvertDate";
import {useTranslation} from "next-i18next";

export default function BlogCard({post}) {
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
    const {t} = useTranslation("common")

    return (


        <div
            className="flex flex-col border  border-outline-light rounded-[32px] overflow-hidden">
            <Link locale={false} href={'/' + post.slug}>
                <a className="">
                    <Image layout={'responsive'} className={"rounded-[32px]"} objectFit={'cover'} width={1920}
                           height={1280} alt={post.title} src={ImageBaseURL + post.thumbnail.url}/>
                </a>
            </Link>
            <div className="flex-1 flex flex-col p-4 pb-0  justify-between">
                <div className="flex-1">
                    <div className={"pb-4"}>
                    <Link locale={false} href={'/' + post.slug}>
                        <a className="block">
                            <h2 className="text-on-surface-light mb-1  text-[28px] font-bold">{post.title}</h2>
                        </a>
                    </Link>
                    <Link locale={false} href={'/blog/' + post.categories.slug}>
                        <a className="text-primary-light text-sm  hover:underline hover:text-on-primary-container-light">
                            {post.categories.title}
                        </a>
                    </Link>
                    </div>
                    <p className="py-4 text-base text-on-surface-variant-light ">
                        <TruncText charNumber={360}>
                            {pContent}
                        </TruncText>
                    </p>
                </div>
                <div className="mt-6 text-on-surface-variant-light  flex items-center">
                    <time dateTime={post.datetime}>
                        <ConvertDate>
                            {new Date(post.createdAt).toLocaleDateString('fa-IR')}
                        </ConvertDate>
                    </time>
                </div>
                <div className={"py-4 justify-end w-full flex "}>
                    <Link locale={false} href={"/" + post.slug}>
                        <a aria-label={"مطالعه بیشتر"}
                           className={"text-primary-light  leading-[20px] text-sm font-medium border border-outline-light  rounded-full px-6 py-[10px]"}>
                            {t("Show More")}
                        </a>
                    </Link>
                </div>
            </div>
        </div>

    );
}
