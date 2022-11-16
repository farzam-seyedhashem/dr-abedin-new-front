import React, {useState} from "react";
import Image from 'next/image'
import BreadCrumbs from "../../components/common/BreadCrumbs";
import {useTranslation} from "next-i18next";

export default function Home(props) {
    const [openDialog,setOpenDialog] = useState(false)
    const {t} = useTranslation("gallery")
    const breadCrumbs = [
        {name:  t("Page Title"), href: "/gallery", current: true},
    ]
    return (
        <div className={"bg-zinc-50"}>
            <div className={"container mx-auto"}>
                <div className="relative mt-16 container mx-auto py-24 sm:py-32">
                    <h1 className="text-4xl text-dark text-center font-extrabold mb-6 tracking-tight text-dark sm:text-5xl lg:text-6xl">
                        {t("Page Title")}
                    </h1>
                    <div className={"flex justify-center"}>
                        <BreadCrumbs items={breadCrumbs}/>
                    </div>
                </div>
                <div className={"grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"}>
                    {/*<a href={"/gallery/سنگ مرمریت"}*/}
                    {/*    className={"border-[0.5px]  rounded-3xl shadow-shadow-product bg-white border-black border-opacity-10 px-1 pt-1 pb-6"}>*/}
                    {/*    <div className={"grid grid-cols-12 rounded-3xl overflow-hidden grid-rows-3 gap-[2px]"}>*/}
                    {/*        <div className={"row-span-3 col-span-12"}>*/}
                    {/*            <div className={"h-[354px] sm:h-[276px] md:h-[390px] w-full relative"}>*/}
                    {/*                <Image layout={"fill"} objectFit={"cover"} src={"/g-1.jpg"}/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        /!*<div className={"row-span-1 col-span-4"}>*!/*/}
                    {/*        /!*    <div className={"h-[116px] sm:h-[90px] md:h-[128px] w-full relative overflow-hidden"}>*!/*/}
                    {/*        /!*        <Image layout={"fill"} objectFit={"cover"} src={"/g-3.jpg"}/>*!/*/}
                    {/*        /!*    </div>*!/*/}
                    {/*        /!*</div>*!/*/}
                    {/*        /!*<div className={"row-span-1 col-span-4"}>*!/*/}
                    {/*        /!*    <div className={"h-[116px] sm:h-[90px] md:h-[128px] w-full relative overflow-hidden"}>*!/*/}
                    {/*        /!*        <Image layout={"fill"} objectFit={"cover"} src={"/g-4.jpg"}/>*!/*/}
                    {/*        /!*    </div>*!/*/}
                    {/*        /!*</div>*!/*/}
                    {/*        /!*<div className={"row-span-1 col-span-4"}>*!/*/}
                    {/*        /!*    <div className={"h-[116px] sm:h-[90px] md:h-[128px] w-full relative overflow-hidden"}>*!/*/}
                    {/*        /!*        <Image layout={"fill"} objectFit={"cover"} src={"/g-2.jpg"}/>*!/*/}
                    {/*        /!*        <div className={"absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center sm:text-lg md:text-2xl"}>*!/*/}
                    {/*        /!*            +۲۵*!/*/}
                    {/*        /!*        </div>*!/*/}
                    {/*        /!*    </div>*!/*/}
                    {/*        /!*</div>*!/*/}
                    {/*    </div>*/}
                    {/*    <h2 className={"md:text-2xl text-xl font-bold mt-6 px-4 text-center"}>سنگ مرمریت</h2>*/}
                    {/*</a>*/}
                </div>
            </div>

        </div>
    )
}
