import Image from "next/image";
import {ImageBaseURL} from "../config";
import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import GalleryStyle from "../styles/Gallery.module.css";
import Breadcrumbs from "../components/common/BreadCrumbs";
import {useTranslation} from "next-i18next";
import {convertContentType, convertHeaders} from "../helper/Helper";
import Script from "next/script";

export default function ProductView(props) {
    const {product} = props
    const {t} = useTranslation('slug-page')
    const images = product?.thumbnail ? [product.thumbnail, ...product.images] : [...product.images]
    const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const breadCrumbs = [
        {name: t("Product List"), href: "/products", current: false},
        {name: product.title, href: "/" + product.slug, current: true},
    ]
    return (
        <>

            <Script defer id={"product-ld"} key={`JSON-LD`} type='application/ld+json' dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                    {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": product.title,
                        "image": product?.thumbnail?.url,
                        "sku": product._id,
                        "description": product.description,
                        "brand": {
                            "@type": "Brand",
                            "name": "صنایع سنگ ساخاتمانی چلیپا"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://karizmastone.com/"+product.slug,
                            "priceCurrency": "IRR",
                            "price": "0",
                            // "priceValidUntil": "2022-09-11",
                            "availability": "https://schema.org/InStoreOnly",
                            "itemCondition": "https://schema.org/NewCondition",
                            "seller":{"@type":"Organization","name":"سنگ ساختمانی کاریزما"}
                        },
                    }
                )
            }}>

            </Script>
           <div className={"lg:pt-16 pt-14 pb-4 min-h-screen bg-background-light "}>
                <div className={"container mt-6 mx-auto"}>
                    <div className={"grid grid-cols-12 md:gap-8"}>
                        <div className={"lg:col-span-4 md:col-span-5 col-span-12 relative"}>
                            <div className={"aspect-w-1 aspect-h-1 relative"}>
                                {product?.thumbnail ?
                                    <Image layout={"fill"} className={"rounded-[64px]"} objectFit={"cover"}
                                           src={ImageBaseURL + product.thumbnail.url}/> : <div
                                        className={"absolute rounded-[64px] inset-0 bg-surface-variant flex items-center justify-center"}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-24 text-on-surface-variant-light  w-24"
                                             fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                    </div>}
                            </div>
                            {images.length !== 0 && <button onClick={() => setOpenDialog(true)}
                                                            className={"absolute bottom-8 rtl:pr-4 ltr:pl-4 rtl:pl-6 ltr:pr-6 right-8 bg-secondary-container-light   text-on-secondary-container-light h-10 flex items-center justify-center rounded-full "}>
                                <svg className={"ml-2"} xmlns="http://www.w3.org/2000/svg" height="24px"
                                     viewBox="0 0 24 24" width="24px"
                                     fill="currentColor">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path
                                        d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
                                </svg>
                                نمایش عکس ها
                            </button>}
                        </div>


                        <div className={"lg:col-span-8 md:col-span-7 col-span-12"}>
                            <div className={"mt-10"}>
                                <Breadcrumbs
                                    iconClass={"text-on-surface-variant-light "}
                                    classNameActive={"text-on-surface-light  font-semibold leading-[24px]"}
                                    className={"text-on-surface-light  leading-[24px] font-semibold"}
                                    items={breadCrumbs}/>
                            </div>
                            <h1 className="text-4xl mb-4 mt-6  font-black text-on-background-light  sm:text-5xl leading-[56px] sm:leading-[72px] tracking-[.1px]">

                                {product.title}

                            </h1>
                            <div>
                                <p className={`text-on-surface-variant-light  leading-8 mb-4`}>
                                    {product.description}
                                </p>
                            </div>
                            <div className={"flex items-center justify-end"}>
                                <button onClick={() => setIsPhonePopupOpen(true)}
                                        className="border border-outline-light  pl-6 pr-4 h-10 ml-2 rounded-full text-primary-light  text-sm font-medium tracking-[.1px] leading-[24px] flex items-center"
                                >
                                    <svg className={"ml-2"} xmlns="http://www.w3.org/2000/svg"
                                         enableBackground="new 0 0 24 24"
                                         height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor">
                                        <g>
                                            <rect fill="none" height="24" width="24" y="0"/>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M19.05,4.91C17.18,3.03,14.69,2,12.04,2c-5.46,0-9.91,4.45-9.91,9.91c0,1.75,0.46,3.45,1.32,4.95L2.05,22l5.25-1.38 c1.45,0.79,3.08,1.21,4.74,1.21h0c0,0,0,0,0,0c5.46,0,9.91-4.45,9.91-9.91C21.95,9.27,20.92,6.78,19.05,4.91z M12.04,20.15 L12.04,20.15c-1.48,0-2.93-0.4-4.2-1.15l-0.3-0.18l-3.12,0.82l0.83-3.04l-0.2-0.31c-0.82-1.31-1.26-2.83-1.26-4.38 c0-4.54,3.7-8.24,8.24-8.24c2.2,0,4.27,0.86,5.82,2.42c1.56,1.56,2.41,3.63,2.41,5.83C20.28,16.46,16.58,20.15,12.04,20.15z M16.56,13.99c-0.25-0.12-1.47-0.72-1.69-0.81c-0.23-0.08-0.39-0.12-0.56,0.12c-0.17,0.25-0.64,0.81-0.78,0.97 c-0.14,0.17-0.29,0.19-0.54,0.06c-0.25-0.12-1.05-0.39-1.99-1.23c-0.74-0.66-1.23-1.47-1.38-1.72c-0.14-0.25-0.02-0.38,0.11-0.51 c0.11-0.11,0.25-0.29,0.37-0.43c0.12-0.14,0.17-0.25,0.25-0.41c0.08-0.17,0.04-0.31-0.02-0.43c-0.06-0.12-0.56-1.34-0.76-1.84 c-0.2-0.48-0.41-0.42-0.56-0.43C8.86,7.33,8.7,7.33,8.53,7.33c-0.17,0-0.43,0.06-0.66,0.31C7.65,7.89,7.01,8.49,7.01,9.71 c0,1.22,0.89,2.4,1.01,2.56c0.12,0.17,1.75,2.67,4.23,3.74c0.59,0.26,1.05,0.41,1.41,0.52c0.59,0.19,1.13,0.16,1.56,0.1 c0.48-0.07,1.47-0.6,1.67-1.18c0.21-0.58,0.21-1.07,0.14-1.18S16.81,14.11,16.56,13.99z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    واتس اپ
                                </button>
                                <button onClick={() => setIsPhonePopupOpen(true)}
                                        className="bg-primary-light pl-6 pr-4 h-10 rounded-full text-on-primary text-sm font-medium tracking-[.1px] leading-[24px] flex items-center"
                                >
                                    <svg className={"ml-2"} xmlns="http://www.w3.org/2000/svg" height="18px"
                                         viewBox="0 0 24 24"
                                         width="18px" fill="currentColor">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path
                                            d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
                                    </svg>
                                    تماس با ما
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {product?.longDescription && <div className={"container content-p mx-auto mt-[64px]"}>
                    <p className="leading-6 text-on-surface-variant-light "><strong
                        className="font-medium">محتوا</strong>
                    </p>
                    <ul className={"mt-4 space-y-[0.5] mb-[64px]"}>
                        {JSON.parse(product?.longDescription).blocks.map((item, i) => {

                            return convertHeaders(item)

                        })}
                    </ul>
                    {JSON.parse(product?.longDescription).blocks.map((item, i) => {
                        return convertContentType(item)
                    })}
                </div>}
                <Transition.Root show={isPhonePopupOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-999 overflow-hidden"
                            onClose={setIsPhonePopupOpen}>
                        <div className="absolute inset-0 flex overflow-hidden">
                            <Dialog.Overlay className="absolute bg-black bg-opacity-20 inset-0"/>

                            <div className="fixed   inset-x-0 bottom-0 w-full max-w-2xl mx-auto  flex">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-y-full"
                                    enterTo="translate-y-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-y-0"
                                    leaveTo="translate-y-full"
                                >
                                    <div className="w-full md:px-0 px-2 h-auto max-h-[200px]">
                                        <div
                                            className="h-full rounded-xl flex flex-col pb-2  shadow-xl overflow-y-scroll">
                                            <div
                                                className="px-4 md:py-3 py-2 bg-white border-b border-black border-opacity-10 border-b border-black border-opacity-10 sm:px-6 sticky top-0 z-10 bg-white">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title
                                                        className="md:text-base text-sm relative w-full text-center text-zinc-500">
                                                        تماس با چلیپا ( ساعت ۸ الی ۱۹ )
                                                    </Dialog.Title>
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-b-xl">
                                                <ul>
                                                    <li className={"border-b border-black border-opacity-10"}>
                                                        <a href={"+982144011005"}
                                                           className={"md:py-2 py-3  w-full font-medium text-dark text-center inline-block md:text-lg text-base"}>

                                                            <span dir={"ltr"} className={"mr-1.5"}>
                                                            021 440 11005
                                                                </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={"+982144011004"}
                                                           className={"md:py-2 py-3 w-full font-medium text-dark  text-center inline-block md:text-lg text-base"}>

                                                            <span dir={"ltr"} className={"mr-1.5"}>
                                                            021 440 11004
                                                                </span>

                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <button onClick={() => setIsPhonePopupOpen(false)}
                                                    className="mt-1 text-red-500 bg-white md:text-lg text-base  text-center md:py-2 py-3 rounded-xl">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>
            {openDialog && <>
                <Transition.Root show={openDialog} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-999 overflow-hidden" onClose={setOpenDialog}>
                        <div className="absolute inset-0 flex overflow-hidden">
                            <div className="fixed   inset-x-0 bottom-0 w-full max-h-screen h-full mx-auto  flex">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-y-full"
                                    enterTo="translate-y-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-y-0"
                                    leaveTo="translate-y-full"
                                >

                                    <div
                                        className="h-full w-full bg-surface rounded-xl flex flex-col pb-2  shadow-xl overflow-y-scroll">
                                        <div
                                            className="bg-surface shadow-[0_4px_8px_0_rgba(0,0,0,.15)]  sticky top-0 z-10">
                                            <div className={"shadow-[0_1px_3px_0_rgba(0,0,0,.30)]"}>
                                                <div className="h-[56px] flex items-center container px-6 mx-auto">

                                                    <button
                                                        type="button"
                                                        className="ml-4 text-on-surface"
                                                        onClick={() => {
                                                            setOpenDialog(false)
                                                        }}
                                                    >
                                                        {/*<span className="sr-only">Close panel</span>*/}
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                             viewBox="0 0 24 24" width="24px" fill="currentColor">
                                                            <path d="M0 0h24v24H0V0z" fill="none"/>
                                                            <path
                                                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                                                        </svg>
                                                    </button>


                                                    <Dialog.Title
                                                        className="text-[22px] tracking-[0px] leading-[28px] text-on-surface-light  relative">
                                                        لیست عکس ها
                                                    </Dialog.Title>


                                                </div>
                                            </div>
                                        </div>
                                        <div className={"container mx-auto pt-10 px-6"}>
                                            <div className={"grid md:grid-cols-3 grid-cols-1 gap-6"}>
                                                {images ? images.map((item, i) =>
                                                    <div key={i}
                                                         className={"rounded-[32px] aspect-w-1 aspect-h-1  overflow-hidden relative w-full"}>
                                                        <Image layout={"fill"} objectFit={"cover"}
                                                               src={ImageBaseURL + item.url}/>
                                                    </div>
                                                ) : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => <div
                                                    key={item}
                                                    className={`rounded-[32px] w-full h-[400px] ${GalleryStyle.loading} overflow-hidden relative w-full`}>

                                                </div>)}
                                            </div>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </>}
        </>
    )
}
