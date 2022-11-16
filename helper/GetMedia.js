export const getMedia = () => {
    return window.matchMedia("screen and (min-width: 540px) and (max-width: 719px)").matches ? "sm" : window.matchMedia("screen and (min-width: 720px) and (max-width: 959px)").matches ? "md" : window.matchMedia("screen and (min-width: 960px) and (max-width: 1199px)").matches ? "lg" : window.matchMedia("screen and (min-width: 1200px)").matches ? "xl" : "xs"
}
