import React from "react";
import Image from "next/image";
import Breadcrumbs from "./BreadCrumbs";

export default function PageHeader({imageUrl, imageAlt, title, shortDescription, breadcrumbs}) {
    return (

        <header className={"relative grid grid-cols-2 gap-2 "}>
            <div className={"w-full relative flex items-center p-[56px] bg-surface-1 rounded-[24px] h-[544px]"}>
                <div className={"w-full "}>
                    <div
                        className={"md:absolute max-w-full  mb-1 sm:mb-0 sm:top-[56px] sm:rtl:left-[56px] sm:ltr:right-[56px] z-999"}>
                        <Breadcrumbs iconClass={"text-on-surface-variant-light  "}
                                     classNameActive={"text-on-surface-light  font-semibold leading-[24px]"}
                                     className={"text-on-surface-light  leading-[24px] font-semibold"}
                                     items={breadcrumbs}/>
                    </div>
                    <h1 className={`text-on-surface-light  text-4xl leading-[56px] sm:leading-[72px]  sm:text-5xl rtl:text-right ltr:text-left lg:text-6xl font-extrabold mb-4 tracking-tight `}>
                        {title}
                    </h1>
                    <p className={"rtl:text-right ltr:text-left max-w-xl leading-[28px] font-normal sm:leading-[32px] text-on-surface-light  text-xl sm:text-2xl"}>
                        {shortDescription}
                    </p>
                </div>
            </div>
            <div className={"relative border border-surface-variant-light h-[544px] overflow-hidden rounded-[24px]"}>
                <Image
                    priority={true}
                    layout={"responsive"}
                    width={1080}
                    height={720}
                    objectFit={"cover"}
                    src={imageUrl}
                    alt={imageAlt}
                />
            </div>

        </header>

    )
}
