import React from "react";
import Image from "next/image";
import {ImageBaseURL} from "../config";
import {useTranslation} from "next-i18next";


export default function Categorys({productCategories, description, title}) {
    const {t} = useTranslation("common")
    return (



            <div className="sm:pt-20 pt-14 bg-background-light ">

                <div className="mt-8 container mx-auto">
                    <h2 className="text-3xl tracking-tight font-extrabold text-on-background-light  sm:text-4xl ltr:sm:leading-[48px] rtl:sm:leading-[56px] tracking-[.1px]">
                        {title}
                    </h2>
                    <h3 className="text-2xl pb-10 tracking-tight font-bold text-on-surface-variant-light  sm:text-3xl sm:leading-[48px] tracking-[.1px]">
                        {description}
                    </h3>
                </div>


                <div
                    className="sm:grid  sm:container  sm:mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:overflow-visible overflow-scroll sm:whitespace-normal whitespace-nowrap sm:py-0 pt-0 pb-8 sm:px:0 pr-4 scrollbar-hidden">
                    {productCategories.data.map((callout, i) => callout?.thumbnail?.url && <div key={i}
                                                                     className={"group sm:w-full w-60 relative transition-all duration-300 hover:rounded-3xl bg-surface border border-outline-light  rounded-[32px] overflow-hidden sm:block inline-block sm:ml-0 ml-6 "}>
                        <div
                            className={"group-hover:rounded-3xl transition-all duration-300 rounded-[32px] relative overflow-hidden "}>
                            <div
                                className={"sm:w-full aspect-w-1 aspect-h-1 object-center object-cover"}>
                                <Image layout={'fill'} objectFit={'cover'}
                                       src={ImageBaseURL + callout.thumbnail.url}
                                       alt={callout.thumbnail.alt.value}/>
                            </div>
                            {/*<div className={"absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"}/>*/}

                        </div>
                        <h2 className={"font-bold px-4 py-4 sm:text-2xl text-xl text-on-surface-light "}>
                            {callout.title}
                        </h2>
                        <div className={"py-4 px-4 justify-end w-full flex "}>
                            <button
                                className={"text-primary-light  leading-[20px] text-sm font-medium border border-outline-light  rounded-full px-6 py-[10px]"}>
                                {t("Show More")}
                            </button>
                        </div>
                        {/*<div aria-current={false} aria-hidden={true}*/}
                        {/*    className={"absolute group-hover:block hidden inset-0 group-hover:bg-on-surface group-hover:bg-opacity-[8%]"}/>*/}


                        {/*<Link href={"/products/"+callout.slug}>*/}
                        {/*    <a className={"bg-white inline-flex items-center rounded-lg text-sm py-2 px-4 mt-3"}>*/}
                        {/*        نمایش بیشتر*/}
                        {/*        <ArrowLeftIcon className={"w-4 h-4 mr-2"}/>*/}
                        {/*    </a>*/}
                        {/*</Link>*/}

                        {/*<div className={"absolute right-0 bottom-0 sm:px-12 px-8 z-20 w-full pb-10"}>*/}
                        {/*    <h2 className={"font-bold sm:text-2xl text-xl text-white"}>*/}
                        {/*        {callout.title}*/}
                        {/*    </h2>*/}
                        {/*    */}
                        {/*</div>*/}
                    </div>)}


                </div>
            </div>


    );
}
