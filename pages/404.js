import {useRouter} from "next/router";
import Link from "next/link";


export default function Example({locale}) {
    const router = useRouter()

    return (
        <>

            <div className={"lg:pt-16 pt-14 md:pt-0 bg-background-light  h-screen flex items-center justify-center"}>
                <div className={"text-center"}>
                    <h1 className={"font-black leading-[56px] sm:leading-[72px] text-on-surface sm:text-5xl text-4xl md:text-6xl "}>404</h1>
                    <p className={"font-extrabold leading-[56px] sm:leading-[72px] text-on-surface-variant sm:text-3xl text-2xl md:text-4xl "}>
                        {router.locale==="en"&&"Not Found"}
                        {router.locale==="fa"&&"صفحه مورد نظر یافت نشد"}
                    </p>
                    <div className={"justify-end w-full flex mt-4"}>
                        <Link locale={false} href={"/"}>
                            <a
                               className={"  text-on-secondary-container-light bg-secondary-container-light w-full leading-[20px] text-sm font-medium rounded-full px-6 py-[10px]"}>
                                {router.locale==="en"&&"Return to Main Page"}
                                {router.locale==="fa"&&"بازگشت به صفحه اصلی"}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
