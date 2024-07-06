import { imagesChartWorkHow } from "../assest/image";

const titleSec2 = [
    {
        id: 0,
        h2: 'TELL US ABOUT YOUR COMPANY',
        p: 'Link your financial accounts, share your ESG initiatives and get a tailored credit line. Gain insights about your company in less than 5 minutes.',
        p_title:"MORE ABOUT CONNECTING FINANCIAL ACCOUNTS",
        p_detail:"Our automated solution calculates your credit limit using your business's financial data from banking and accounting. We integrate with accounting software like Xero, Quickbooks, Clear Books, Free Agent, KashFlow, Oracle Netsuite, Sage, and can accommodate others upon request. If you don't use accounting software, you can manually upload your accounting documents to access our funding."

    },
    {
        id: 1,
        h2: 'UPLOAD YOUR SUPPLIER INVOICE',
        p: 'After you\'ve uploaded your supplier invoice, we ensure timely payment to your supplier in the currency of your choice.',
        p_title:"WHAT TYPES OF INVOICES CAN KIKIN FUND?",
        p_detail:"Kikin covers all types of supplier invoices except those excluded in our Terms of Service. We can make payments to suppliers in the UK, European Union countries, Albania, Bosnia and Herzegovina, China, India, Kosovo, Moldova, Monaco, Montenegro, North Macedonia, Serbia, Switzerland, Turkey, and Ukraine. If you're paying invoices in different currencies, a small exchange fee will apply."

    },
    {
        id: 2,
        h2: 'MAKE MONTHLY REPAYMENTS',
        p: 'As you repay, we automatically top up your available funding, allowing your business to maintain a healthy cash flow and freeing up capital for growth.',
    btn:"CACULATE YOUR FUNDING"

    }

]
const imageSec2 = titleSec2.map((title, index) => (
    {
        ...title,
        imgAnimate: imagesChartWorkHow[index]
    }
))
export {imageSec2,titleSec2}