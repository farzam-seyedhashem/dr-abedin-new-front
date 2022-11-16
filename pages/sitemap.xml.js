import React from "react";
import {useRouter} from "next/router";

export const getServerSideProps = async ({req,res}) => {
    // const allPost = await allPosts()
    // const allCategory = await allCategories()
// const router = useRouter()
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
    <loc>https://${req.headers.host}/post-sitemap.xml</loc>
    </sitemap>
    <sitemap>
                    <loc>https://${req.headers.host}/pages-sitemap.xml</loc>
                </sitemap>
                <sitemap>
                    <loc>https://${req.headers.host}/post-category-sitemap.xml</loc>
                </sitemap>
     </sitemapindex>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};
export default function Home(props) {
    return (
        <div>
            <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            </sitemapindex>
        </div>
    )
}
