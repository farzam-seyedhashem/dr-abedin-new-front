/* This example requires Tailwind CSS v2.0+ */
import {useEffect, useState} from "react";

export default function Paination({inventories,handler}) {
    console.log('fff',inventories)
    const [pages,setPages] = useState()
    const selectedPage = parseInt(inventories.currentPage)
    useEffect(()=>{
        let p = []
        for (let i = 1; i <= inventories.lastPageIndex ;i++){
            p.push(i)
        }
        setPages(p)
    },[inventories])
    return (
        <div className="bg-transparent px-4 py-3 flex items-center justify-between border-t border-surface-variant-light  sm:px-6">
            <div className="flex-1 flex justify-between lg:hidden">
                {selectedPage!==1?<a
                    rel="prev"
                    href={handler(selectedPage - 1)}
                    className="relative inline-flex items-center px-4 py-2 border border-outline-light  text-sm font-medium rounded-md text-gray-700  hover:bg-gray-50"
                >
                    Previous
                </a>:<div></div>}
                {inventories && inventories.lastPageIndex && inventories.lastPageIndex!==selectedPage ? <a
                    href={handler(selectedPage + 1)}
                    rel="next"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-outline-light  text-sm font-medium rounded-md text-gray-700  hover:bg-gray-50"
                >
                    Next
                </a>:<div></div>}
            </div>
            <div className="hidden lg:flex-1 lg:flex lg:items-center container mx-auto">
                <div>
                    {/*<p className="text-sm text-gray-700">*/}
                    {/*    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}*/}
                    {/*    <span className="font-medium">97</span> results*/}
                    {/*</p>*/}
                </div>
                <div>
                    <nav className="relative z-0 flex items-center rounded-md shadow-sm " aria-label="Pagination">
                        {/*<a*/}
                        {/*    href="#"*/}
                        {/*    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-outline-light   text-sm font-medium text-on-surface-variant-light   hover:bg-gray-50"*/}
                        {/*>*/}
                        {/*    <span className="sr-only">Previous</span>*/}
                        {/*    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />*/}
                        {/*</a>*/}
                        {/* Current: "z-10 bg-secondary-container  text-on-secondary-container", Default: " border-outline-light  text-on-surface-variant-light   hover:bg-gray-50" */}

                        {pages&&pages.map((item)=> item === selectedPage ?<a
                            aria-current="page"
                            className="ml-1 z-10 bg-secondary-container-light  rounded-md  text-on-secondary-container-light   flex items-center px-4 py-2 text-sm font-medium"
                        >
                            {item}
                        </a> : (item !== 0 && item === selectedPage - 1) ? <a rel="prev" href={handler(item)}
                            className="ml-1  border-outline-light  rounded-md text-on-surface-variant-light   hover:bg-gray-50  flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            {item}
                        </a>:(item !== pages.length && item === selectedPage + 1)?<a rel="next" href={handler(item)}
                                                                                     className="ml-1  border-outline-light  rounded-md text-on-surface-variant-light   hover:bg-gray-50  flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            {item}
                        </a>:<a href={handler(item)}
                                className="ml-1  border-outline-light  rounded-md text-on-surface-variant-light   hover:bg-gray-50  flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            {item}
                        </a>)}

                        {/*<a*/}
                        {/*    href="#"*/}
                        {/*    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-outline-light   text-sm font-medium text-on-surface-variant-light   hover:bg-gray-50"*/}
                        {/*>*/}
                        {/*    <span className="sr-only">Next</span>*/}
                        {/*    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />*/}
                        {/*</a>*/}
                    </nav>
                </div>
            </div>
        </div>
    )
}
