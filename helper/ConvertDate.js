import React from "react";
export default function Home(props) {
    const monthConvert = (monthNum) =>  {
        console.log('wjekf',monthNum)
        switch (monthNum) {
            case '۱':
                return 'فروردین'
            case '۲':
                return 'اردیبهشت'
            case '۳':
                return 'خرداد'
            case '۴':
                return 'تیر'
            case '۵':
                return 'مرداد'
            case '۶':
                return 'شهریور'
            case '۷':
                return 'مهر'
            case '۸':
                return 'ابان'
            case '۹':
                return 'آذر'
            case '۱۰':
                return 'دی'
            case '۱۱':
                return 'بهمن'
            case '۱۲':
                return 'اسفند'
        }
    }

    let persianDate = props.children.toString().split('/')
    console.log(persianDate)
    persianDate = persianDate[2] + ' ' + monthConvert(persianDate[1]) + ' ' + persianDate[0]

    return (
        <>
            {persianDate}
        </>
    )
}
