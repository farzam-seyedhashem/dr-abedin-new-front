import MainLayout from "../../layouts/Main";
import React from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import BlogView from '../../views/BlogView'
import {useRouter} from "next/router";

export async function getStaticProps({locale}) {
    let postsArray = []

    return {
        props: {
            postsArray,
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
        <MainLayout metaDescr={"لیست مقالات دکتر بهزاد عابدین جراح زیبایی بینی در تهران، جراحی زیایی بینی، جراحی پلاستیک"} metaTitle={"مقالات | دکتر بهزاد عابدین"}>
          <BlogView category={false} slug={""} categories={categories} posts={posts} page={page} lastPosts={lastPosts}/>

        </MainLayout>
    )
}
