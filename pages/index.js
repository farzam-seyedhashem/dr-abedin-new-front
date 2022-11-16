import MainLayout from '../layouts/Main'
import IndexView from '../views/Index'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {API} from "../config";
export async function getStaticProps({ locale }) {
    const getBlogs = await fetch(API + `/blog?per_page=4&lang=${locale}`);
    const posts = await getBlogs.json();
    return {
        props: {
            posts,
            ...await serverSideTranslations(locale, ['pages','common','index'])
        },
        revalidate: 3600,
    }
}
export default function Home({posts,productCategories,products}) {
    return (
        <MainLayout>
            <IndexView products={products} productCategories={productCategories} posts={posts}/>
        </MainLayout>
    )
}
