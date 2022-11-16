import Document, {Html, Head , Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang={this.props.locale}>
                <Head>
                    {this.props.locale==="fa"&&<script id={"g-tag-manager"} dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBTVH6T');`
                    }}></script>}
                </Head>
                <body dir={`${this.props.locale==="en"?"ltr":"rtl"}`}>
                <Main/>
                <NextScript/>
                {this.props.locale==="fa"&&<noscript><iframe className={"invisible hidden"} src="https://www.googletagmanager.com/ns.html?id=GTM-MBTVH6T"
                                                             height="0" width="0"></iframe></noscript>}
                </body>
            </Html>
        )
    }
}

export default MyDocument
