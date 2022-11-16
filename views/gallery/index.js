import {useState} from "react";
import Image from 'next/image'
import {useTranslation} from "next-i18next";
import {ImageBaseURL} from "../../config";
import Paination from "../../components/Pagination";
import GalleryDialog from "../../components/GalleryDialog";
import PageHeader from "../../components/common/PageHeader";

export default function Home({gallery, pageIndex}) {
    const [openDialog, setOpenDialog] = useState(false)
    const [gallerySelected, setGallerySelected] = useState()
    const {t} = useTranslation("gallery")

    const paginationHandler = (index) => {
        return (`?page=${index}`)
    }
    const handleOpenDialog = (v) => {
        if (!v) {
            setGallerySelected(null)
            setOpenDialog(false)
        }
    }
    const breadCrumbs = [
        {name:t("Page Title"),href:"/gallery",current:true},
    ]
    return (
        <div className={"lg:pt-16 pt-14 bg-background-light  "}>
            <GalleryDialog gallerySelected={gallerySelected} openDialog={openDialog} setOpenDialog={handleOpenDialog}/>
            <PageHeader breadcrumbs={breadCrumbs} title={t("Page Title")} shortDescription={""} imageAlt={"گالری صنایع سنگ چلیپا"}
                        imageUrl={"/slider/9.jpeg"}/>

            <div className={"container mx-auto pt-20"}>
                <div className={"grid gird-cols-1 sm:grid-cols-2 mb-8 md:grid-cols-3 lg:grid-cols-4 gap-8 "}>
                    {gallery.data.map((item, i) => <div onClick={() => {
                        setGallerySelected(item)
                        setOpenDialog(true)
                    }} key={i} className={"rounded-[32px] border border-outline-light  overflow-hidden"}>


                        <div className={" w-full relative"}>
                            <Image height={375} width={375} sizes={"50vw"} layout={"responsive"} className={"rounded-[32px]"} objectFit={"cover"} alt={item.title}
                                   src={ImageBaseURL + item.thumbnail.url}/>
                        </div>

                        <h2 className={"md:text-2xl h-[95px] text-xl text-on-secondary-container-light  font-bold p-4"}>{item.title}</h2>
                        <div className={"py-4 px-4 justify-end w-full flex mt-auto items-end "}>
                            <button
                                className={"text-primary-light  leading-[20px] text-sm font-medium border border-outline-light  rounded-full px-6 py-[10px]"}>
                               مشاهده بیشتر
                            </button>
                        </div>
                    </div>)}
                </div>
                <Paination value={pageIndex} id={'page'} handler={paginationHandler}
                           inventories={gallery}/>
            </div>
        </div>
    )
}
