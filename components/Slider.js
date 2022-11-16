import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {useTranslation} from "next-i18next";
import slide1 from '../public/slider/s-1.jpg'
import slide2 from '../public/slider/s-2.jpeg'

import {useRouter} from "next/router";


export default function Example() {
    const {t} = useTranslation("index")
    const router = useRouter()

    const slides = {
        data: [
            {
                img: slide1,
                disableDescription: true,
                title: t("First Slide Title"),
                description: t("First Slide Descr")
            },
            {
                img: slide2,
                disableDescription: true,
                title: t("Second Slide Title"),
                description: t("Second Slide Descr")
            },

        ]
    }
    const [currentStep, setCurrentStep] = useState(0)
    const [steps, setSteps] = useState(slides.data);
    const [currentTimeOut, setCurrentTimeOut] = useState(null)

    const getMedia = () => {
        return window.matchMedia("screen and (min-width: 600px) and (max-width: 904px)").matches ? "sm" : window.matchMedia("screen and (min-width: 905px) and (max-width: 1239px)").matches ? "md" : window.matchMedia("screen and (min-width: 1240px) and (max-width: 1439px)").matches ? "lg" : window.matchMedia("screen and (min-width: 1440px)").matches ? "xl" : "xs"
    }
    const [media, setMedia] = useState()
    useEffect(() => {
        setMedia(getMedia())
    }, [])
    const nextStep = async () => {
        setCurrentStep(currentStep + 1);
    };

    useEffect(() => {
        if (currentTimeOut) {
            clearTimeout(currentTimeOut);
        }
        console.log(1)
        let i = setTimeout(async function () {
            if (currentStep === steps.length - 1) {
                setCurrentStep(0)
            } else {
                await nextStep()
            }

        }, 5000)
        setCurrentTimeOut(i)

    }, [currentStep]);
    return (
        <div className={"bg-background-light "}>
            <div className={"relative  h-[calc(60vh)] sm:h-screen bg-background-light  w-full"}>
                <div
                    className={"absolute z-[444] bg-black rounded-2xl overflow-hidden  flex items-center inset-0  lg:h-[calc(100vh_-_64px)] sm:h-[calc(100vh_-_56px)] h-[calc(60vh_-_56px)] overflow-hidden"}>

                    {/*</div>*/}
                    {slides.data.map((item, i) => <div key={i}
                                                                            className={`transition-all flex items-center top-0  absolute bg-background-light  inset-0 ${currentStep === i ? "block" : "hidden"}`}>
                        <div
                            className={`relative w-full h-[calc(100%_-_8px)] w-[calc(100%_-_8px)] md:h-[calc(100%_-_8px)] md:w-[calc(100%_-_8px)] mx-auto rounded-[24px] bg-black z-10 overflow-hidden relative `}>
                            {item.disableDescription && <div
                                className={`md:bottom-4 bottom-0 w-full md:w-full md:max-w-md ltr:md:left-4 rtl:md:right-4 md:rounded-[16px] py-5 px-6 sm:px-6 sm:py-6 bg-surface-1 absolute z-10`}>

                                <h2 className={"text-xl sm:text-3xl text-primary-light  font-bold"}>
                                    {item.title}
                                </h2>
                                <p className={"text-on-surface-light   z-20 sm:text-lg mt-2 "}>
                                    {item.description}
                                </p>

                                {/*<div*/}
                                {/*    className={" absolute inset-0 bg-secondary-container  bg-opacity-30 absolute bottom-0 z-10"}/>*/}

                            </div>}

                            <Image quality={100} priority={i === 0} sizes={"98vw"}
                                   className={`${i === 0 ? "" : "slider-animation"}  rounded-2xl z-0`}
                                   layout={"fill"}
                                   width={1280}
                                   height={720}
                                   objectFit={"cover"}
                                   src={item.img}/>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
