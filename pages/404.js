import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home(props) {
    return (
        <div className={"flex items-center justify-center h-screen w-full"}>
            <div>
                <div>
                    <Image height={570} width={815} layout={"responsive"} objectFit={"contain"} src={'/404.png'}/>
                </div>
                <div className={"bg-surface-variant-light text-center rounded-lg mt-8 px-4 py-4"}>
                    <h1 className={"font-bold text-on-surface-variant-light text-2xl"}>صفحه مورد نظر یافت نشد.</h1>
                    <p className={"text-on-surface-variant-light text-opacity-80"}>
                       آدرس دیگری را انتخاب کنید و یا به
                        <Link href={"/"} className={"text-primary-light hover:underline ml-1"}>
                        صفحه اصلی
                        </Link>
                        برگردید.
                    </p>
                </div>
            </div>
        </div>
    )
}
