import MainLayout from "../../layouts/Main";
import React from "react";
import {API} from "../../config";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import BlogView from '../../views/BlogView'
import {useRouter} from "next/router";

export async function getStaticProps({locale}) {
    let postsArray = []

    const getCategories = await fetch(API + '/blog-category?per_page=10');
    const categories = await getCategories.json();

    const getBlogs = await fetch(API + `/blog?per_page=12&page=1&lang=${locale}`);
    const posts = await getBlogs.json();
    postsArray.push(posts)
    let lastPosts = posts;
    lastPosts.data = lastPosts.data.slice(0,4)

    for (let i = 2; i <= posts.lastPageIndex; i++) {
        const getBlogsSub = await fetch(API + `/product?per_page=12&page=${i}&lang=${locale}`);
        const postsSub = await getBlogsSub.json()
        postsArray.push(postsSub)
    }

    return {
        props: {
            postsArray,
            categories,
            lastPosts,
            ...await serverSideTranslations(locale, ['pages','common','blog'])
        },
        revalidate: 3600,
    }
}


export default function Example({categories,postsArray,lastPosts}) {
    const router = useRouter()
    const page = parseInt(router.query.page || 1)
    const posts = postsArray[(page - 1)]

    return (
        <MainLayout metaDescr={"لیست وبلاگ های سنگ ساختمانی کاریزما درباره ی صادرات سنگ ساختمانی، واردات سنگ ساختمانی، خرید سنگ ساختمانی، فروش سنگ ساختمانی و انواع سنگ ساختمانی"} metaTitle={"بلاگ | سنگ ساختمانی کاریزما"}>
          <BlogView category={false} slug={""} categories={categories} posts={posts} page={page} lastPosts={lastPosts}/>

        </MainLayout>
    )
}
