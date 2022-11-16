import React from "react";
import {useTranslation} from "next-i18next";
import Slider from "../components/Slider";
import BlogList from "../components/index/BlogList";
import ProductList from "../components/index/ProductList";
import About from "../components/About";
import Category from "../components/Categorys";

export default function HomeView(props) {
    const {t} = useTranslation("index");
    const {posts, productCategories, products} = props
    return (
        <>
            <Slider/>
            <About/>
            <BlogList description={t("Last Post Descr")} title={t("Last Posts")} posts={posts}/>
        </>
    );
}
