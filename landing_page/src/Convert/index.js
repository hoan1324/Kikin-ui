import { step } from "@material-tailwind/react"
const convert = [
    "Poor",
    "Average",
    "Good",
]
const convertPercentFee = [
    {
        id: 0,
        init: 3.292 / 100,
        step: 1.646 / 100
    },
    {
        id: 1,
        init: 1.979 / 100,
        step: 0.99 / 100
    },
    {
        id: 2,
        init: 1.25 / 100,
        step: 0.625 / 100
    }
]
const convertDis = [
    {
        id: [0, 3],
        step: 2.5 / 100
    },
    {
        id: [1, 2],
        step: 5 / 100
    }

]

const yourCondition = [
    {
        id: 0,
        change: convert[0]
    },
    {
        id: 1,
        change: convert[1]
    },
    {
        id: 2,
        change: convert[2]
    },
]
const formatMoney = (value) => {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}
export { yourCondition, convertDis, convertPercentFee, formatMoney }