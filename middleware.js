import {NextResponse} from "next/server";

export function middleware(request) {
    if (request.nextUrl.host === "localhost:3000") {
        console.log(request.nextUrl)
        if (request.nextUrl.locale === "fa" && request.nextUrl.pathname.startsWith("/fa")) {
            return NextResponse.redirect(new URL(`/404`, request.url))
        }
        if (request.nextUrl.locale !== "fa") {
            if (request.nextUrl.locale === "en" && request.nextUrl.pathname.startsWith("/en")) {
                return NextResponse.redirect(new URL(`/404`, request.url))
            }
            if (request.nextUrl.locale === "ar" && request.nextUrl.pathname.startsWith("/ar")) {
                return NextResponse.redirect(new URL(`/404`, request.url))
            }
        }
    }
}
