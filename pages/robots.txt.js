import React from "react";
import {useRouter} from "next/router";

export const getServerSideProps = async ({req, res, locale}) => {
    // const allPost = await allPosts()
    // const allCategory = await allCategories()
// const router = useRouter()

    const robots = locale==="fa"?`
User-agent: *
Allow: /
Sitemap: https://karizmastone.com/sitemap.xml
  `:`
User-agent: * 
Disallow:
`;

    res.setHeader("Content-Type", "text/plain");
    res.write(robots);
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
