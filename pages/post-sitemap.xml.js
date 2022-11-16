import React from "react";
import {API} from "../config";
// const globby = require('globby')
// import {globby} from 'globby'
function addPage(route, lastMod, changeFreq, priority) {
    // const path = page.replace('pages', '').replace('.js', '').replace('.mdx', '')
    // const route = path === '/index' ? '' : path
    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://karizmastone.com",
    }[process.env.NODE_ENV];
    return `  <url>
    <loc>${`${baseUrl}${route}`}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

const getProduct = async (page, per_page, lang) => {
    const getProduct = await fetch(API + '/blog?per_page=' + per_page + '&page=' + page + '&lang=' + lang, {
        method: "GET",
        headers: {
            // update with your user-agent
            "User-Agent": "*",
            Accept: "application/json; charset=UTF-8",
        },
    });
    const products = await getProduct.json()
    return products
}

const getAllProducts = async (locale) => {
    const allProducts = {};
    const firstPosts = await getProduct(1, 100, locale)

    allProducts.data = firstPosts.data
    allProducts.currentPage = firstPosts.currentPage
    allProducts.lastPageIndex = firstPosts.lastPageIndex
    console.log(allProducts)
    if (allProducts.lastPageIndex !== allProducts.currentPage) {
        for (let i = 2; i <= allProducts.lastPageIndex; i++) {
            const newPostsl = await getProduct(i, 100)
            const newPosts = newPostsl.data
            const lastPosts = allProducts.data
            allProducts.data = [...lastPosts, ...newPosts]
            allProducts.currentPage = i
        }
    }
    return (allProducts.data)
    // Get the paths we want to pre-render based on posts
    // const paths = allPosts.data.map((post) => ({
    //     params: { slug: post.slug },
    // }))
}

export const getServerSideProps = async ({res, locale}) => {
    // const allPost = await allPosts()
    // const allCategory = await allCategories()
    const allProducts = await getAllProducts(locale)

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
     
    ${allProducts.map(item =>
        addPage('/' + item.slug, item.updatedAt, 'monthly', "0.8")
    )}
    
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap.replaceAll(",",""));
    res.end();

    return {
        props: {},
    };
};
const Sitemap = () => {
};

export default Sitemap;
