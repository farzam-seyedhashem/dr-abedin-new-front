import Head from 'next/head'
import React from "react";
import PageHeader from "../components/common/PageHeader";
import Link from "next/link";
import BlogCard from "../components/Cards/BlogCard";
import Image from "next/image";
import {ImageBaseURL} from "../config";
import {useTranslation} from "next-i18next";

export default function BlogView({categories,category,slug,posts,lastPosts}) {
    const {t} = useTranslation("blog");

    const breadCrumbs = [
        {name:t("Blog Title"),href:"/blog",current:true},
    ]
    const breadCrumbsWithCategory = [
        {name:t("Blog Title"),href:"/product",current:false},
        {name:category.title,href:`/blog/${category.slug}`,current:true},
    ]

    return (
        <div className={"p-2 bg-background-light"}>

            <PageHeader breadcrumbs={category?breadCrumbsWithCategory:breadCrumbs} title={category?category.title:t("Blog Title")} shortDescription={""}
                        imageAlt={"بلاگ دکتر بهزاد عابدین"} imageUrl={"/slider/s-1.jpg"}/>

            <div
                className={"relative sticky lg:relative md:top-0 top-14 z-40 sm:container bg-background-light  mx-auto py-4 sm:py-6 lg:border-b border-surface-variant-light "}>
                <div
                    className={"whitespace-nowrap scrollbar-hidden text-sm overflow-x-scroll items-center flex   pr-4 pl-4"}>
                    <Link locale={false} href={"/blog"}>
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
                    {/*{categories?.data.map((item, i) =>*/}
                    {/*    <Link locale={false} key={i} href={"/blog/" + item.slug}>*/}
                    {/*        <a*/}
                    {/*            className={`inline-block rounded-lg h-8 ltr:mr-2 rtl:ml-2 flex items-center text-sm tracking-[.1px] leading-[20px] ${item.slug === category.slug ? "  bg-secondary-container-light text-on-secondary-container-light rtl:pr-2 ltr:pl-2 rtl:pl-4 ltr:pr-4 " : "px-4 font-medium border border-outline-light   text-on-surface-variant-light"}`}>*/}
                    {/*            <div className={"flex items-center"}>*/}

                    {/*                {item.slug === category.slug ?*/}
                    {/*                    <svg className={"rtl:ml-2 ltr:mr-2"} xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                         height="18px" viewBox="0 0 24 24"*/}
                    {/*                         width="18px" fill="currentColor">*/}
                    {/*                        <path d="M0 0h24v24H0V0z" fill="none"/>*/}
                    {/*                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>*/}
                    {/*                    </svg> :*/}
                    {/*                    <div className={"h-6"}/>}*/}
                    {/*                {item.title}*/}
                    {/*            </div>*/}
                    {/*        </a>*/}
                    {/*    </Link>*/}
                    {/*)}*/}
                </div>

            </div>
            <div
                className="container mt-10 mx-auto grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {/*{posts.data.map((post, i) =>*/}
                {/*    <BlogCard key={i} post={post}/>*/}
                {/*)}*/}
            </div>
        </div>
    )
}
