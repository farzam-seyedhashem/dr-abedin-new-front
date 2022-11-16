import React from "react";

export default function ReviewBar(props) {
    return (
        <div className={"grid grid-cols-12 gap-2 max-w-3xl"}>
            <div className={"col-span-3"}>
                <div className={"text-[3.5rem] font-normal text-on-surface-light "}>
                    ۴.۵
                </div>
                <div className={"flex items-center space-x-1 rtl:space-x-reverse"}>
                    <svg className={"w-4 h-4 text-primary-light "} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill={"currentColor"}
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className={"w-4 h-4 text-primary-light "} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill={"currentColor"}
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className={"w-4 h-4 text-primary-light "} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill={"currentColor"}
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className={"w-4 h-4 text-primary-light "} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill={"currentColor"}
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg fill="url(#c20)" className={"w-4 h-4"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="c20">
                                <stop stopOpacity="1" offset="50%" className="fill-primary-light"></stop>
                                <stop stopOpacity="1" offset="50%" className="fill-on-surface-variant-light"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>

                </div>
            </div>
        </div>
    )
}
