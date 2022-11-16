import React from "react";

export default function Home(props) {

    return (

        props.children.replace(/<(.|\n)*?>/g, '')

    )
}
