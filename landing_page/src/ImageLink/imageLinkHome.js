import { faArrowRotateRight, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import {imagesChartHome} from "../assest/image";
import { yourCondition } from "../Convert";
//CACS ANH TRONG SECTION2 PHAN HOME

const imageSection2 = [
    {
        id: 0,
        linkImgae: "/assest/pictures/pic_home_1.png",
        top: 12,
        left: 0,
        bottom: null,
        right: null,
        type: "circle"
    },
    {
        id: 1,
        linkImgae: "/assest/pictures/pic_home_2.png",
        top: null,
        left: 6,
        bottom: 5,
        right: null,
        type: "circle"
    },
    {
        id: 2,
        linkImgae: "/assest/pictures/pic_home_3.png",
        top: null,
        left: null,
        bottom: 45,
        right: -2,
        type: "circle"
    },
    {
        id: 3,
        linkImgae: "/assest/pictures/pic_home_4.png",
        top: 3,
        left: null,
        bottom: null,
        right: 5,
        type: "circle"
    },
    {
        id: 4,
        linkImgae: "/assest/pictures/pic_home_5.png",
        top: null,
        left: null,
        bottom: 7,
        right: 11,
        type: "circle"
    }
]
const titleSec3 = [
    {
        id: 0,
        h2: 'GROW WITH THE FLOW',
        p: 'We help you preserve your cash, so that you can focus on growing your business and improve cash flow.',

    },
    {
        id: 1,
        h2: 'ADAPTABLE FUNDING. ENDLESS POSSIBILITIES.',
        p: 'Our AI-driven funding automatically updates as you grow, so you can always get the right amount of funds.',


    },
    {
        id: 2,
        h2: 'FAST FUNDS.FULL EQUITY.',
        p: 'Build your cash instantly without the need for dilution, and own more of your business for longer.',


    }

]
const imageSec3 = titleSec3.map((title, index) => (
    {
        ...title,
        imgAnimate: imagesChartHome[index]
    }
))

//cAC ANH TRONG SECTION 7 PHAN HOME
const imageSection7 = [
    {
        imgAbove: "/assest/pictures/casourelPic1.png",
        title: "DOING GOOD, \nTOGETHER.",
        content: "\"Kikin is amazing, I couldn't recommend them more. The team  are super easy to work with and the impact for us managing our  cashflow has been immense\"",
        imgBelow: "/assest/pictures/casourleLogo1.png",
        content_logo: "Paddy Cavanagh-Butler, Founder at Punchy Drinks"
    },
    {
        imgAbove: "/assest/pictures/casourelPic2.png",
        title: "DOING GOOD, \nTOGETHER.",
        content: "\"There are plenty of businesses offering invoice financing, but I've never come across one that has been so supportive and transparent in everything they do as Kikin. We were immediately drawn to their focus on impact-based businesses and the incentives they provide for startups putting the planet first have the potential to drive meaningful change in the funding landscape. We see Kikin as long-term partners who give us the capacity to grow faster and we can't wait to see what we can achieve together\".",
        imgBelow: "/assest/pictures/casourleLogo2.png",
        content_logo: "Michael Vachon, Founder at Citizens of Soil"
    },
    {
        imgAbove: "/assest/pictures/casourelPic3.png",
        title: "DOING GOOD, \nTOGETHER.",
        content: "\"Kikin has given us the flexibility to extend invoice payments for new product development for up to 6 months. This has enabled us to start selling our products before we have to pay our suppliers which is a great for our cash flow management. What I like most is that we get discounted fees for being a B Corp. It's great to work with a partner that shares our values\"",
        imgBelow: "/assest/pictures/casourleLogo3.png",
        content_logo: "Sue Aksaz, Head of Finance at The Nue Co"
    },
    {
        imgAbove: "/assest/pictures/casourelPic4.png",
        title: "DOING GOOD, \nTOGETHER.",
        content: "\"Running a startup apparel business can be difficult; and managing cashflow has always been one of our most important challenges. Kikin helped us navigate this with their quick and easy application process and rapid turn around time. I've already recommended them to a number of other businesses we know!\"",
        imgBelow: "/assest/pictures/casourleLogo4.png",
        content_logo: "Jojo Regan, Founder at Manors Golfx"
    }
]

const imageSection4 = {
    title: "CALCULATE YOUR FUNDING",
    img_family: [
        {
            id: 0,
            img: "/assest/pictures/pic_home_6.png",
            top: null,
            bottom: null,
            right: null,
            left: null
        },
        {
            id: 1,
            img: "/assest/pictures/pic_home_7.png",
            top: -23,
            bottom: null,
            right: 42,
            left: null
        },
        {
            id: 2,
            img: "/assest/pictures/pic_home_8.png",
            top: null,
            bottom: null,
            right: 18,
            left: null
        },
    ],
    param: "Your funding – and your fee – is based on how financially healthy and ESG aware your company is. The more ESG accreditations you have, the lower your fee.",
    choiceRange: [
        {
            icon: faRectangleList,
            label: "Invoice amount",
            max: 100000,
            min: 1000,
            step: 1000,
            transform(value){
                return `$${value/1000}K`;
            }
            
        },
        {
            icon: faArrowRotateRight,
            label: "Months to pay back",
            max: 6,
            min: 1,
            step: 1
        },
        {
            icon: faChartSimple,
            label: "Credit rating",
            max: 2,
            min: 0,
            step: 1,
            transform(value){
                let text="";
                yourCondition.forEach(element => {
                    if(value==element.id){
                        text=element.change
                    }
                });
                return text;
            }
        },
    ],
    choiceImage: {
        title: "Claim your discounts",
        choice: [
            "/assest/pictures/choiceImage1.png",
            "/assest/pictures/choiceImage2.png",
            "/assest/pictures/choiceImage3.png",
            "/assest/pictures/choiceImage4.png"
        ]
    },
    result: {
        title: "MONTHLY REPAYMENTS",
        fee: "Fee",
        discount: "Discount",
        total: "Total"
    }
}
const imageSection5 = [
    {
        id: 0,
        linkImgae: "/assest/pictures/pic_home_9.png",
        top: null,
        left: null,
        right: 26,
        bottom: 4,
        type: "square"
    },
    {
        id: 1,
        linkImgae: "/assest/pictures/pic_home_10.png",
        top: 3,
        left: 35,
        bottom: null,
        right: null,
        type: "circle"
    },
    {
        id: 2,
        linkImgae: "/assest/pictures/pic_home_11.png",
        top: 19,
        left: 5,
        bottom: null,
        right: null,
        type: "circle"
    },
    {
        id: 3,
        linkImgae: "/assest/pictures/pic_home_12.png",
        top: 10,
        left: null,
        bottom: null,
        right: 12,
        type: "square"
    },
    {
        id: 4,
        linkImgae: "/assest/pictures/pic_home_13.png",
        top: null,
        left: 25,
        bottom: 4,
        right: null,
        type: "circle"
    },
    {
        id: 5,
        linkImgae: "/assest/pictures/pic_home_14.png",
        top: null,
        left: 10,
        bottom: 14,
        right: null,
        type: "circle"
    },
    {
        id: 6,
        linkImgae: "/assest/pictures/pic_home_15.png",
        top: null,
        left: null,
        right: 10,
        bottom: 8,
        type: "circle"
    },
    {
        id: 7,
        linkImgae: "/assest/pictures/pic_home_16.png",
        top: null,
        left: -1,
        bottom: 38,
        right: null,
        type: "square"
    },
    {
        id: 8,
        linkImgae: "/assest/pictures/pic_home_17.png",
        top: null,
        left: null,
        right: -1,
        bottom: 35,
        type: "circle"
    },

]

export { imageSection2, imageSection7, imageSection5, imageSec3,imageSection4 }