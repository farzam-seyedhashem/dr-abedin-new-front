import {useState} from "react";
import {useTranslation} from "next-i18next"
import Image from "next/image";
import {useRouter} from "next/router";
import VideoThumb from '../public/video-thumb.jpg'

export default function About(props) {
    const {t} = useTranslation("index");
    const features = [
        {
            name: t("The best quality in the world"),
            description: t("The best quality in the world description"),
            icon: ({className}) => {
                return <svg className={className} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                            height="24px"
                            viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <g>
                        <rect fill="none" height="24" width="24"/>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z"/>
                            <polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87"/>
                        </g>
                    </g>
                </svg>
            },
        },
        {
            name: t("The fastest providing of production"),
            description: t("The fastest providing of production description"),
            icon: ({className}) => {
                return <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                            width="24px"
                            fill="currentColor">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"/>
                </svg>
            },
        },
        {
            name: t("Direct providing"),
            description: t("Direct providing description"),
            icon: ({className}) => {
                return <svg className={className} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                            height="24px"
                            viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <g>
                        <rect fill="none" height="24" width="24"/>
                        <path
                            d="M9.78,11.16l-1.42,1.42c-0.68-0.69-1.34-1.58-1.79-2.94l1.94-0.49C8.83,10.04,9.28,10.65,9.78,11.16z M11,6L7,2L3,6h3.02 C6.04,6.81,6.1,7.54,6.21,8.17l1.94-0.49C8.08,7.2,8.03,6.63,8.02,6H11z M21,6l-4-4l-4,4h2.99c-0.1,3.68-1.28,4.75-2.54,5.88 c-0.5,0.44-1.01,0.92-1.45,1.55c-0.34-0.49-0.73-0.88-1.13-1.24L9.46,13.6C10.39,14.45,11,15.14,11,17c0,0,0,0,0,0h0v5h2v-5 c0,0,0,0,0,0c0-2.02,0.71-2.66,1.79-3.63c1.38-1.24,3.08-2.78,3.2-7.37H21z"/>
                    </g>
                </svg>
            },
        },
    ];
    const Links = [
        {title: t("Services"), link: "/services"},
        {title: t("Reserve"), link: "/services"},
        {title: t("Blogs"), link: "/products"},
        {title: t("Learn More About Dr Abedin"), link: "/about-us"},
        {title: t("Ways of communication"), link: "/contact-us"},
    ]
    const [openVideo, setOpenVideo] = useState(false)
    const router = useRouter()

    return (
        <>
            <div className="relative bg-background-light  overflow-hidden">
                <div className="container mx-auto sm:pt-20 pt-16">
                    <div
                        className={"border border-primary-container-light  rounded-[64px] grid md:grid-cols-2 grid-cols-1"}>
                        <div
                            className={"aspect-h-9 aspect-w-16 md:aspect-h-14 md:aspect-w-9 lg:aspect-h-6 lg:aspect-w-8 h-fit rounded-[32px] md:rounded-[64px] overflow-hidden relative"}>
                            <Image priority={true} sizes={"50vw"} objectFit={"cover"} className={"z-10"} layout={"fill"}
                                   src={VideoThumb}/>
                            <div
                                className={"absolute z-20 inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-25"}>
                                <button onClick={() => setOpenVideo(true)}
                                        aria-label={"video-play"}
                                        className={"relative  hover:bg-white hover:bg-opacity-[12%] transition duration-300 outline-none focus:border-2 focus:border-white rounded-3xl w-[92px] h-[92px] flex items-center justify-center"}>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M77.1461 39.9994C83.6068 52.0411 78.7255 62.9426 66.2666 66.2653C62.9426 78.7255 52.0411 83.6055 39.9994 77.1461C27.9577 83.6068 17.0561 78.7255 13.7334 66.2666C1.27453 62.9426 -3.60675 52.0411 2.85391 39.9994C-3.60675 27.9577 1.27453 17.0561 13.7334 13.7334C17.0561 1.27453 27.9577 -3.60675 39.9994 2.85391C52.0411 -3.60675 62.9426 1.27453 66.2653 13.7334C78.7255 17.0561 83.6055 27.9577 77.1461 39.9994Z"
                                            fill="white"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={"absolute"} height="40px"
                                         viewBox="0 0 24 24" width="40px" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            className="rtl:text-right ltr:text-left md:pt-10 pt-8 pb-8 ltr:pl-8 ltr:pr-10 rtl:pr-8 rtl:pl-10">

                            <h1 className="text-4xl  font-black text-on-background-light  sm:text-5xl leading-[56px] ltr:sm:leading-[56px] rtl:sm:leading-[72px] tracking-[.1px]">
                                {/*<span className="inline">{t("Sale of different types of stones")}</span>{" "}*/}
                                {/*<span className="inline">{t("Chalipa")}</span>*/}
                                {t("Dr Behzad Abedin")}
                            </h1>
                            <p className="text-2xl my-4   font-bold text-on-background-light  text-opacity-60 sm:text-3xl leading-[40px] ltr:leading-[40px] rtl:sm:leading-[48px] tracking-[.1px]">
                                {t("Cover Title")}
                            </p>
                            <ul className={"text-primary-light "}>
                                {Links.map((item, i) => <li key={i}>
                                    <a href={item.url}
                                       className={"py-3 hover:underline underline-offset-4 w-fit flex px-[2px] cursor-pointer font-medium hover:text-on-primary-container-light group"}>

                                        {item.title}


                                    </a>
                                </li>)}

                            </ul>
                        </div>

                    </div>


                    <div className="mt-20">
                        <h2 className="text-3xl  font-black text-on-background-light  sm:text-4xl leading-[56px] sm:leading-[72px] tracking-[.1px]">
                            {/*<span className="inline">{t("Sale of different types of stones")}</span>{" "}*/}
                            {/*<span className="inline">{t("Chalipa")}</span>*/}
                            دریافت نوبت مشاوره جراحی زیبایی بینی در تهران
                        </h2>
                        <h3 className="text-2xl mb-10   font-bold text-on-surface-variant-light  sm:text-3xl leading-[40px] sm:leading-[48px] tracking-[.1px]">
                            دریافت نوبت از جراح زیبایی بینی در تهران، دکتر بهزاد عابدین
                        </h3>
                        <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                            <div
                                className="rounded-[24px] cursor-pointer w-full pt-20 pb-6 px-6  bg-surface-1 hover:bg-secondary-container-light transition duration-300 ">
                                <div>
                                    <p className="text-[24px] mb-2 leading-[32px] font-medium text-on-secondary-container-light">
                                        نوبت دهی
                                    </p>
                                    <p className="leading-[24px] text-on-secondary-container-light">
                                        با کلیک بر روی این قسمت میتوانید زمانی را برای دریافت نوبت و مراجعه به مطب
                                        انتخاب نمایید.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="rounded-[24px] cursor-pointer w-full pt-20 pb-6 px-6  bg-surface-1 hover:bg-secondary-container-light transition duration-300 ">
                                <div>
                                    <p className="text-[24px] mb-2 leading-[32px] font-medium text-on-secondary-container-light">
                                        گالری تصاویر
                                    </p>
                                    <p className="leading-[24px] text-on-secondary-container-light">
                                        با کلیک بر روی این قسمت میتوانید تصاویر قبل و بعد جراحی های دکتر بهزاد عابدین را
                                        مشاهده نمایید
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openVideo && <div
                className={"fixed inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur md:px-32 sm:px-8 px-4 z-1001 flex items-center justify-center"}>
                <div
                    className={"bg-black relative rounded-xl h-auto w-full md:w-8/12 rounded-xl overflow-hidden"}>
                    {/*<video controls autoPlay className={""} src={"/pr-v.mp4"}/>*/}
                    <div className={" w-full h-[250px]  md:h-[400px] xl:h-[600px] overflow-hidden"}>
                        {router.locale === "fa" ?

                            <div className="relative aspect-video w-full h-full"><span className={"w-full"}
                                                                                       style={{display: "block",}}></span>
                                <iframe className={"absolute inset-0 w-full rounded-xl overflow-hidden"}
                                        src="https://www.aparat.com/video/video/embed/videohash/JFtON/vt/frame"
                                        width="100%" height="100%"
                                        allowFullScreen={true} webkitallowfullscreen={true}
                                        mozallowfullscreen={true}></iframe>
                            </div> :
                            <iframe width="100%" height="100%"
                                    src="https://www.youtube.com/embed/yrMaXZ-4STE"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>}
                    </div>
                    <button onClick={() => setOpenVideo(false)}
                            className={"bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl text-white md:h-12 md:w-12 h-10 w-10 flex items-center justify-center md:top-5 ltr:md:left-5 ltr:left-2 rtl:md:right-5 rtl:right-2 top-2  rounded-full absolute"}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                             fill="currentColor">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                        </svg>
                    </button>
                </div>

            </div>}
        </>
    );
}
