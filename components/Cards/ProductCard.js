import React from "react";
import Image from 'next/image'
import {ImageBaseURL} from "../../config";
import Link from 'next/link';
import TruncText from "../../helper/TruncText";
import {useTranslation} from "next-i18next";

export default function ProductCard({product, isPriority}) {
    const {t} = useTranslation("common")
    return (
        <div className=" w-full h-full border border-outline-light  relative bg-surface rounded-[12px]">


            <Link locale={false} href={"/" + product.slug}>
                <a>
                    <div
                        className=" aspect-w-1 aspect-h-1  w-full relative rounded-[12px] overflow-hidden">

                        {product?.thumbnail?.url ? <Image
                            sizes={"40vw"}
                            priority={isPriority}
                            layout={"fill"}
                            objectFit={"cover"}
                            src={ImageBaseURL + product.thumbnail.url}
                            alt={product.thumbnail?.alt[0]?.value}

                        /> : <div className={"absolute inset-0 bg-surface-variant flex items-center justify-center"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 text-on-surface-variant-light  w-24"
                                 fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>}
                        {/*<div*/}
                        {/*    className={"group-hover:bg-black absolute top-0 left-0 w-full h-full group-hover:bg-opacity-30 transition duration-300"}/>*/}
                    </div>
                </a>
            </Link>


            <div className={"py-4 px-4 "}>
                <Link locale={false} href={"/" + product.slug}>
                    <a>
                        <h2 className="text-on-surface-light  sm:text-xl text-lg font-bold leading-[32px]">

                            {product.title}


                        </h2>
                    </a>
                </Link>
                <Link locale={false} href={"/products/" + product.categories.slug}>
                    <a className={"pt-2 pb-3 flex text-on-surface-variant-light  sm:text-base font-medium text-sm"}>
                        {product.categories.title}
                    </a>
                </Link>
            </div>

            {product?.description ?
                <p className={"text-sm pt-1 sm:text-base whitespace-normal px-4 leading-[20px] text-on-surface-variant-light "}>
                    <TruncText charNumber={135}>

                        {product.description}
                    </TruncText>
                </p> : <div className={"h-[132px]"}/>}


            <div className={"py-4 px-4 justify-end w-full flex "}>
                <Link locale={false} href={"/" + product.slug}>
                    <a aria-label={"مطالعه بیشتر"}
                       className={"text-primary-light  leading-[20px] text-sm font-medium border border-outline-light  rounded-full px-6 py-[10px]"}>
                        {t("Show More")}
                    </a>
                </Link>
            </div>


        </div>
    );
}
