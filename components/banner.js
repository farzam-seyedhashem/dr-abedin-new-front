/* This example requires Tailwind CSS v2.0+ */
import React from "react";

export default function Example() {
    const [open, setOpen] = React.useState(true)
    return (

        open ?
            <div className="fixed bottom-0  z-999 inset-x-0 pb-2 sm:pb-5">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="p-2 rounded-lg bg-white shaodw-custom-menu sm:p-3">
                        <div className="flex items-center justify-between flex-wrap">
                            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-red-50 ">
                {/*<SpeakerphoneIcon className="h-6 w-6 text-primary" aria-hidden="true"/>*/}
              </span>
                                <p className="mr-3 font-medium text-primary truncate">
                                    <span className="">سایت در حال بروزرسانی میباشد!</span>
                                    {/*<span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>*/}
                                </p>
                            </div>

                            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                                <button
                                    onClick={()=>setOpen(false)}
                                    type="button"
                                    className="-mr-1 flex p-2 rounded-md hover:bg-black hover:bg-opacity-4 focus:outline-none focus:ring-2 focus:ring-white"
                                >
                                    <span className="sr-only">Dismiss</span>
                                    {/*<XIcon className="h-6 w-6 text-black" aria-hidden="true"/>*/}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div></div>

    )
}
