import {Fragment, useState} from "react";
import Breadcrumbs from "../components/common/BreadCrumbs";
import ProductCard from "../components/Cards/ProductCard";

const breadCrumbs = [
    {name: 'تماس با ما', href: "/contact-us", current: true},

]

import {Dialog, Transition} from '@headlessui/react'
import PageHeader from "../components/common/PageHeader";
import {useRouter} from "next/router";
import Link from "next/link";
import {ImageBaseURL} from "../config";
import Paination from "../components/Pagination";
import {useTranslation} from "next-i18next";
import {convertContentType} from "../helper/Helper";
import BreadCrumbs from "../components/common/BreadCrumbs";

export default function Home({category, productCategories, slug, products, pageIndex}) {
    const router = useRouter()
    const {t} = useTranslation("products");
    const [openShowMore, setOpenShowMore] = useState(false)
    const breadCrumbs = [
        {name:t("Product List"),href:"/product",current:true},

    ]
    const breadCrumbsCategory = [
        {name:t("Product List"),href:"/product",current:false},
        {name:category.title,href:"/product/"+category.slug,current:true},

    ]
    const paginationHandler = (index) => {
        return (`?page=${index}`)
    }
    return (
        <div className={"lg:pt-16 pt-14 bg-background-light "}>
            <PageHeader breadcrumbs={!category?breadCrumbs:breadCrumbsCategory} title={category ? category.title : t("Product List")} shortDescription={category?.shortDescription} imageAlt={category?category?.thumbnail?.alt.value:"صنایع سنگ چلیپا"} imageUrl={category?ImageBaseURL + category?.thumbnail?.url : "/bg-product.jpg"}/>
            <div
                className={"relative sticky lg:relative md:top-0 top-14 z-40 sm:container bg-background-light  mx-auto py-4 sm:py-6 lg:border-b border-surface-variant-light "}>
                <div
                    className={"whitespace-nowrap scrollbar-hidden text-sm overflow-x-scroll items-center flex   pr-4 pl-4"}>
                    <Link locale={false} href={"/products"}>
                        <a
                            className={`inline-block rounded-lg h-8 ltr:mr-2 font-medium rtl:ml-2 text-sm flex items-center tracking-[.1px] leading-[20px]  ${!category ? "bg-secondary-container-light bg-secondary-container-dark  text-on-secondary-container-light rtl:pr-2 ltr:pl-2 rtl:pl-4 ltr:pr-4 " : "px-4 border border-outline-light   text-on-surface-variant-light"}`}>
                            <div className={"flex items-center"}>
                                {slug === "" ?
                                    <svg className={"rtl:ml-2 ltr:mr-2"} xmlns="http://www.w3.org/2000/svg"
                                         height="18px" viewBox="0 0 24 24"
                                         width="18px" fill="currentColor">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                    </svg> : <div className={"h-[18px]"}/>}
                                {t("All Categories")}
                            </div>
                        </a>
                    </Link>
                    {productCategories?.data.map((item, i) =>
                        <Link locale={false} key={i} href={"/products/" + item.slug}>
                            <a
                                className={`inline-block rounded-lg h-8 ltr:mr-2 rtl:ml-2 flex items-center text-sm tracking-[.1px] leading-[20px] ${item.slug === category.slug ? "  bg-secondary-container-light text-on-secondary-container-light rtl:pr-2 ltr:pl-2 rtl:pl-4 ltr:pr-4 " : "px-4 font-medium border border-outline-light   text-on-surface-variant-light"}`}>
                                <div className={"flex items-center"}>
                                    {item.slug === category.slug ?
                                        <svg className={"rtl:ml-2 ltr:mr-2"} xmlns="http://www.w3.org/2000/svg"
                                             height="18px" viewBox="0 0 24 24"
                                             width="18px" fill="currentColor">
                                            <path d="M0 0h24v24H0V0z" fill="none"/>
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                        </svg> :
                                        <div className={"h-6"}/>}
                                    {item.title}
                                </div>
                            </a>
                        </Link>
                    )}
                </div>
            </div>
            <div className={"container pt-10 lg:pt-20  mx-auto"}>
                {products.data.length > 0 ?
                    <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 pb-16"}>
                        {products.data.map((item, i) =>
                            <ProductCard isPriority={i === 0} key={i} product={item}/>
                        )}
                    </div> : <div>
                        <div className={"text-4xl text-on-surface-variant-light  text-center py-24 pb-32 mx-auto w-full"}>
                            <div className={"text-6xl mb-4"}>
                                🙁
                            </div>
                            {t("Sorry, we can't find any product")}
                        </div>
                    </div>}
            </div>
            <Paination value={pageIndex} id={'page'} handler={paginationHandler}
                       inventories={products}/>



            <Transition.Root show={openShowMore} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-999 overflow-hidden" onClose={setOpenShowMore}>
                    <div className="absolute inset-0 flex overflow-hidden">
                        <Dialog.Overlay className="absolute bg-black bg-opacity-20 inset-0"/>

                        <div className="fixed  inset-x-0 bottom-0 w-full max-w-full  flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-y-full"
                                enterTo="translate-y-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-y-0"
                                leaveTo="translate-y-full"
                            >
                                <div className="w-full  h-screen max-h-screen">
                                    <div
                                        className="h-full bg-surface rounded-xl  overflow-y-scroll">
                                        <div
                                            className="bg-surface  sticky top-0 z-10">
                                            <div className="h-[56px] flex items-center container px-6 mx-auto">

                                                <button
                                                    type="button"
                                                    className="ml-4 text-on-surface"
                                                    onClick={() => setOpenShowMore(false)}
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
                                                    className="text-[22px] tracking-[0px] leading-[28px] text-on-surface relative">
                                                    {t("Description")}
                                                </Dialog.Title>

                                            </div>
                                        </div>
                                        <div className="pt-6 px-6 text-on-surface container mx-auto">
                                            {category?.description && JSON.parse(category?.description).blocks.map((item, i) => {
                                                return convertContentType(item)
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>
    )
}
