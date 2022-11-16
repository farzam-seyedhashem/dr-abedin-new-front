import Layout from '../layouts/Main'
import PageHeader from "../components/common/PageHeader";
import {API, ImageBaseURL} from "../config";

// const faqs = [
//     {
//         question: "WHAT DO I DO WHEN I HAVE A FLAT TIRE DUE TO A ROAD HAZARD?",
//         answer: "Return to your selling Dealer and your tire will be repaired or replaced. Refer to your warranty for details."
//     },
//     // More questions...
// ]

export async function getStaticProps(context) {
    const getFaq = await fetch(`${API}/faq`);
    const faqs = await getFaq.json();

    return {
        props: {
            // posts,
            // services,
            // inventories,
            faqs,
            // locale: context.locale,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 3600, // In 60 seconds
    }
}

export default function FAQ({faqs}) {
    const breadCrumbs = [
        {name:"سوالات متداول",href:"/faq",current:true},

    ]
    return (
        <Layout>
            <div className={"lg:pt-16 pt-14 bg-background-light  pb-8"}>
                <PageHeader imageAlt={"عکس سوالات متداول"} imageUrl={"/bg-product.jpg"} title={"سوالات متداول"} breadcrumbs={breadCrumbs}/>
                <div className={"container mx-auto"}>
                    <h2 className="text-on-surface-light  font-bold text-[44px] mb-8 mt-[80px]">
                       لیست سوالات متداول
                    </h2>
                    {faqs.data.map((faq, i) => (<div key={i} className={"text-on-surface-light  flex mb-4 max-w-4xl"}>

                        <div
                            className={"flex items-center ml-4 justify-center text-sm font-medium w-[24px] h-[32px] text-inverse-on-surface-light bg-inverse-surface-light   rounded-[12px]"}>
                            {i + 1}
                        </div>
                        <div className={"w-[calc(100%_-_24px)]"}>
                            <h3 className={"rtl:ml-1.5 ltr:mr-1.5 bold inline"}>
                                {faq.title}
                            </h3>
                            <p className={"inline"}>
                            {faq.content}
                            </p>
                        </div>

                    </div>))}
                </div>
            </div>
        </Layout>
    )
}
