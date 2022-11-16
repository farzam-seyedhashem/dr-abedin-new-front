import React from "react";
import BlogCard from "../Cards/BlogCard";

export default function Blog({posts, title,description}) {
    return (
        <div className="bg-background-light  pt-16 sm:pt-24">
            <div className="container mx-auto">
                <h2 className="text-3xl tracking-tight font-extrabold text-on-background-light  sm:text-4xl sm:leading-[56px] tracking-[.1px]">
                    {title}
                </h2>
                <h3 className="text-2xl  mb-10 tracking-tight font-bold text-on-surface-variant-light  sm:text-3xl sm:leading-[48px] tracking-[.1px]">
                    {description}
                </h3>
            </div>
            <div className="container mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {/*{posts.data.map((post, i) =>*/}
                {/*    <BlogCard key={i} post={post}/>*/}
                {/*)}*/}
            </div>
        </div>
    );
}
