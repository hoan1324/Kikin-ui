import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faRectangleList, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
let TitleQuestion=[
  {
title:"FUNDING",
  icon:faRectangleList
},
{
  title:"REPAYMENT",
    icon:faArrowRotateRight
  },
  {
    title:"GENERALS",
      icon:faCircleQuestion
    }
]
let question_detail=[
    {
        Topic:"funding",
        detail:[
            {
      
                title:"How quickly can I access the funds?",
                answer:"Once you've completed a brief questionnaire about your business and connected your financial accounts, you'll have immediate access to a portion of your funds. The full amount will be available within 72 hours after our team manually checks your company details."  
              },
              {title:"What can I use the funding for?",
                answer:"We offer financing for your supplier invoices. Simply upload your supplier's invoice to our system, and we'll handle the full payment to them. For a list of goods we don't cover, please refer to our Terms of Service: https://www.kikin.io/terms-of-service."  
              },
              {
                  title:"How do I know that my company is a good match?",
                  answer:"We love supporting UK-based businesses that need to pay their suppliers, whether they're local or abroad. Just share your financial history with us so we can figure out your credit line. Additionally, if you’re committed to sustainability, we appreciate that and offer special discounts on our fees."
              },
              {
                  title:"Can I pay to suppliers abroad?",
                  answer:"Certainly! In addition to our local UK suppliers, we also facilitate international payments to a range of countries. This includes member states within the European Union, as well as Albania, Bosnia and Herzegovina, China, India, Kosovo, Moldova, Monaco, Montenegro, North Macedonia, Serbia, Switzerland, Turkey, and Ukraine. If you're paying invoices in different currencies, a small exchange fee will apply."
              }
        ]
    },
    { Topic:"repayment",
    detail:[
        {
           title:"How long can I extend my loan for?",
            answer:"Typically, you can extend your loan anywhere from 1 to 6 months. Our repayment periods are based to your company's financial well-being. We'll assess this when you sign up and then give it a check-up every 30 days to keep things up-to-date."  
          },
          {title:"How much does it cost to use Kikin?",
            answer:"There's no charge to establish your credit limit with us. For every invoice we pay on your behalf, a flat fee is applied. This fee is determined by your credit rating and your chosen repayment term, which can range from 1 to 6 months. To better understand the fee structure, you can use Our Calculator."  
          },
          {
              title:"How will the repayments be deducted from my account?",
              answer:"When you add your first invoice, you'll link your account to the Direct Debit system. This system will automatically deduct payments each month until the full amount is repaid. For these transactions, we partner with GoCardless."
          }
          
    ]},
    {
        Topic:"generals",
        detail:[
            {
               title:"How is my financial data used?",
                answer:"We utilize your financial data exclusively to accurately assess your credit line. We only collaborate with FCA-regulated Open Banking providers to ensure the security of your information. For further details, please see our Privacy Policy and Terms of Service."  
              },
              {title:"Should I inform my suppliers that I’m using Kikin?",
                answer:"No need. We'll mention the invoice when we send the payment, so they'll know where it's coming from."  
              },
              {
                  title:"Do you need personal guarantees?",
                  answer:"We don’t take personal guarantees, never ask for equity and you don’t need to give up any security to secure funding."
              }
             
        ]
    }
]
export {TitleQuestion,question_detail};