import React from "react";
import {API} from "../config";
import MainLayout from "../layouts/Main";
import ProductView from "../views/ProductView";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import PostView from "../views/PostView";
import {redirect} from "next/dist/server/api-utils";

export async function getStaticProps(context) {
    const getPost = await fetch(API + '/blog/' + encodeURI(context.params.slug), {
        method: "GET",
        headers: {
            // update with your user-agent
            "User-Agent": "*",
            Accept: "application/json; charset=UTF-8",
        },
    });
    const getProduct = await fetch(API + '/product/' + encodeURI(context.params.slug), {
        method: "GET",
        headers: {
            // update with your user-agent
            "User-Agent": "*",
            Accept: "application/json; charset=UTF-8",
        },
    });

    let product;
    let post;
    if (await getProduct.status !== 404) {
        product = await getProduct.json();
    }
    if (await getPost.status !== 404) {
        post = await getPost.json();
    }

    let type;
    let data;
    // const errorCode = getPost.ok ? false : getPost.statusCode
    if (post === null && product === null) return {
        notFound: true,
    }
    if (!post) {
        data = product
        type = "product"
    }
    if (!product) {
        data = post
        type = "post"
    }
    if(!product && !post){
        return {
            redirect: {
                destination: '/',
                statusCode: 301
            },
        }
    }

    return {
        props: {
            data,
            type,
            ...await serverSideTranslations(context.locale, ['pages','common','slug-page'])
        },
        revalidate: 3600,

    }

}

const getPosts = async (page, per_page) => {
    const getPost = await fetch(API + '/blog?per_page=' + per_page + '&page=' + page, {
        method: "GET",
        headers: {
            // update with your user-agent
            "User-Agent": "*",
            Accept: "application/json; charset=UTF-8",
        },
    });
    const posts = await getPost.json()
    return posts
}
const getProducts = async (page, per_page) => {
    const getProducts = await fetch(API + '/product?per_page=' + per_page + '&page=' + page, {
        method: "GET",
        headers: {
            // update with your user-agent
            "User-Agent": "*",
            Accept: "application/json; charset=UTF-8",
        },
    });
    const products = await getProducts.json()
    return products
}

export async function getStaticPaths() {
    const current = 0;
    const allPosts = {};
    const allProducts = {};
    const firstPosts = await getPosts(1, 100)
    const firstProducts = await getProducts(1, 100)
    allPosts.data = firstPosts.data
    allPosts.currentPage = firstPosts.currentPage
    allPosts.lastPageIndex = firstPosts.lastPageIndex
    allProducts.data = firstProducts.data
    allProducts.currentPage = firstProducts.currentPage
    allProducts.lastPageIndex = firstProducts.lastPageIndex

    if (allPosts.lastPageIndex !== allPosts.currentPage) {
        for (let i = 2; i <= allPosts.lastPageIndex; i++) {
            const newPostsl = await getPosts(i, 100)
            const newPosts = newPostsl.data
            const lastPosts = allPosts.data
            allPosts.data = [...lastPosts, ...newPosts]
            allPosts.currentPage = i
        }
    }
    if (allProducts.lastPageIndex !== allProducts.currentPage) {
        for (let i = 2; i <= allProducts.lastPageIndex; i++) {
            const newProductsl = await getProducts(i, 100)
            const newProducts = newProductsl.data
            const lastProducts = allProducts.data
            allProducts.data = [...lastProducts, ...newProducts]
            allProducts.currentPage = i
        }
    }

    const postPaths = allPosts.data.map((post) => ({
        params: {slug: post.slug},
        locale: post.lang.title,
    }))

    // const postPaths=[]
    const productPaths = allProducts.data.map((product) => ({
        params: {slug: product.slug},
        locale: product.lang.title,
    }))
    console.log(allPosts)
    // console.log(productPaths)
    // Get the paths we want to pre-render based on posts
    const paths = [...productPaths,...postPaths]

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return {paths, fallback: false}
}

export default function Home({data,type}) {

    return (
        <MainLayout ogType={type==="product"?"":"article"} metaKeywords={data?.metaKeywords} metaDescr={data?.metaDescription} title={data?.title} metaTitle={data?.metaTitle}>
            {type==="product"&&<ProductView product={data}/>}
            {type==="post"&&<PostView post={data}/>}
        </MainLayout>
    )
}
