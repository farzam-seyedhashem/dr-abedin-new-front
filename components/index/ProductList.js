import React from "react";
import ProductCard from "../Cards/ProductCard";

export default function Blog({products, title, description, showMoreButtonText, showMoreButtonLink}) {

    return (

        <div className="bg-background-light  sm:pt-20 pt-14 pb-16 sm:pb-24">

            <div className="mt-8 container  mx-auto">
                <h2 className="text-3xl tracking-tight font-extrabold text-on-background-light  sm:text-4xl sm:leading-[56px] tracking-[.1px]">
                    {title}
                </h2>
                <h3 className="text-2xl  mb-10 tracking-tight font-bold text-on-surface-variant-light  sm:text-3xl sm:leading-[48px] tracking-[.1px]">
                    {description}
                </h3>
            </div>
            <div
                className="sm:grid  sm:container scrollbar-hidden  sm:mx-auto grid-cols-2 lg:grid-cols-4 gap-6 sm:whitespace-normal whitespace-nowrap sm:overflow-visible overflow-scroll   pr-4 sm:pb-0 pb-8">
                {products.data.sort((a, b) => a.sortInMainPage - b.sortInMainPage).map((item, i) =>
                    <div key={i}
                         className={"sm:block flex-col  inline-flex sm:w-full w-64 rtl:sm:ml-0 ltr:sm:mr-0 ltr:mr-6 rtl:ml-6"}>
                        <ProductCard key={i} product={item}/>
                    </div>
                )}

            </div>
        </div>

    );
}
