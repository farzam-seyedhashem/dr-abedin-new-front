import MainLayout from "../../layouts/Main";
import React from "react";
import {API} from "../../config";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import BlogView from "../../views/BlogView";
import {useRouter} from "next/router";


export async function getStaticProps(context) {
    let blogArray = []
    const {locale} = context;
    const getBlogCategories = await fetch(API + `/blog-category?per_page=1000&lang=${locale}`);
    const categories = await getBlogCategories.json();

    const getCategory = await fetch(API + `/blog-category/${context.params.slug}`);
    const category = await getCategory.json();

    const getBlogs = await fetch(API + `/blog?per_page=12&page=1&lang=${locale}&category=${category._id}`);
    const blogs = await getBlogs.json();
    blogArray.push(blogs)

    for (let i = 2; i <= blogs.lastPageIndex; i++) {
        const getBlogSub = await fetch(API + `/blog?per_page=12&page=${i}&lang=${locale}&category=${category._id}`);
        const blogsSub = await getBlogSub.json()
        blogArray.push(blogsSub)
    }
    if (!category) {
        return {
            redirect: {
                destination: '/',
                statusCode: 301
            },
        }
    }
    return {
        props: {
            blogArray,
            category,
            categories,
            ...await serverSideTranslations(locale, ['pages', 'common', 'blog'])
        },
        revalidate: 3600,
    }
}

export async function getStaticPaths() {
    const getProductCategories = await fetch(API + `/blog-category?per_page=1000`);
    const productCategories = await getProductCategories.json();

    const productPaths = productCategories.data.map((product) => ({
        params: {slug: product.slug},
        locale: product.lang.title,
    }))

    const paths = [...productPaths]

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return {paths, fallback: false}
}

export default function Example({blogArray, categories, lastPosts, slug, category}) {
    const router = useRouter()
    const page = parseInt(router.query.page || 1)
    const posts = blogArray[(page - 1)]
    return (
        <MainLayout metaTitle={category.metaTitle} metaDescr={category.metaDescription}>

            <BlogView slug={slug} category={category} categories={categories} posts={posts} page={page}
                      lastPosts={lastPosts}/>


        </MainLayout>
    )
}
