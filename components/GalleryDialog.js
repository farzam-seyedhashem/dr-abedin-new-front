import Head from 'next/head'
import React, {Fragment, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {API, ImageBaseURL} from "../config";
import useSWR from 'swr'
import Image from "next/image";
import GalleryStyle from '../styles/Gallery.module.css'

export default function GalleryDialog({openDialog, setOpenDialog, gallerySelected}) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const {
        data: galleryCategory,
        error: galleryCategoryErr,
        isValidating: isValidatingCategory,
        mutate: mutateCategory
    } = useSWR(gallerySelected ? `${API}/gallery-category?gallery=${gallerySelected._id}&per_page=1000` : null, fetcher)
    const [categorySelected, setCategorySelected] = useState(null)
    const {
        data: gallery,
        error,
        isValidating,
        mutate
    } = useSWR(gallerySelected ? `${API}/gallery-images?per_page=11${categorySelected ? '&category=' + categorySelected : ''}&lang=fa&&page=${1}` : null, fetcher)
    const [images, setImages] = useState([])
    useEffect(() => {
        if (categorySelected === null && galleryCategory?.data) {
            setCategorySelected(galleryCategory?.data[0]?._id)
        }
    }, [galleryCategory])
    useEffect(() => {
        let data = []
        gallery?.data.map(item =>
            data.push(...item.images)
        )
        setImages(data)


    }, [gallery])
    return (
        <div>
            <Transition.Root show={openDialog} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-999 overflow-hidden" onClose={setOpenDialog}>
                    <div className="absolute inset-0 flex overflow-hidden">
                        <div className="fixed   inset-x-0 bottom-0 w-full max-h-screen h-full mx-auto  flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-y-full"
                                enterTo="translate-y-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-y-0"
                                leaveTo="translate-y-full"
                            >

                                <div
                                    className="h-full w-full bg-surface-light  rounded-xl flex flex-col pb-2 overflow-y-scroll">
                                    <div
                                        className="bgSurface1 sticky top-0 z-10">
                                            <div className="h-[56px] flex items-center container px-6 mx-auto">

                                                <button
                                                    type="button"
                                                    className="ml-4 text-on-surface-light  "
                                                    onClick={() => {
                                                        setOpenDialog(false)
                                                        setCategorySelected(null)
                                                    }}
                                                >
                                                    {/*<span className="sr-only">Close panel</span>*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                         viewBox="0 0 24 24" width="24px" fill="currentColor">
                                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                                        <path
                                                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                                                    </svg>
                                                </button>


                                                <Dialog.Title
                                                    className="text-[22px] tracking-[0px] leading-[28px] text-on-surface-light   relative">
                                                    {gallerySelected?.title}
                                                </Dialog.Title>

                                            </div>
                                    </div>

                                    <div className={"container mx-auto"}>
                                        <div className={"pt-8 px-6"}>
                                            <label className={"flex mb-4 items-center"}>
                                                <div className={"text-primary-light "}>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         enableBackground="new 0 0 24 24" height="24px"
                                                         viewBox="0 0 24 24"
                                                         width="24px" fill="currentColor">
                                                        <g>
                                                            <path d="M0,0h24 M24,24H0" fill="none"/>
                                                            <path
                                                                d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/>
                                                            <path d="M0,0h24v24H0V0z" fill="none"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    className={"font-medium text-sm text-on-surface-light  -variant mr-2"}>فیلتر</span>
                                            </label>
                                            <div className={"gap-x-2 gap-y-4"}>
                                                {categorySelected && galleryCategory && galleryCategory.data.map((item, i) =>
                                                    <button onClick={() => {
                                                        setCategorySelected(item._id)
                                                        mutate()
                                                    }} key={i}
                                                            className={` rounded-lg h-8 ltr:mr-2 rtl:ml-2 inline-block text-sm tracking-[.1px] leading-[20px] ${categorySelected && categorySelected === item._id ? "  bg-secondary-container-light text-on-secondary-container-light rtl:pr-2 ltr:pl-2 rtl:pl-4 ltr:pr-4 " : "px-4 font-medium border border-outline-light  text-on-surface-variant-light  "}`}>
                                                        <div className={"flex items-center"}>

                                                            {categorySelected && categorySelected === item._id ?
                                                                <svg className={"rtl:ml-2 ltr:mr-2"}
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     height="18px" viewBox="0 0 24 24"
                                                                     width="18px" fill="currentColor">
                                                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                                                    <path
                                                                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                                                </svg> : <div className={"h-[18px]"}/>}

                                                            {item.title}
                                                        </div>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"container mx-auto pt-10 px-6"}>
                                        <div className={"grid md:grid-cols-3 grid-cols-1 gap-6"}>
                                            {gallery?.data ? images.map((item, i) =>
                                                <div key={i}
                                                     className={"rounded-[32px] aspect-w-1 aspect-h-1  overflow-hidden relative w-full"}>
                                                    <Image layout={"fill"} objectFit={"cover"}
                                                           src={ImageBaseURL + item.url}/>
                                                </div>
                                            ):[1,2,3,4,5,6,7,8,9,10,11,12].map((item, i) =><div key={item}
                                                   className={`rounded-[32px] w-full h-[400px] ${GalleryStyle.loading} overflow-hidden relative w-full`}>

                                            </div>)}
                                        </div>
                                    </div>


                                </div>

                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}
