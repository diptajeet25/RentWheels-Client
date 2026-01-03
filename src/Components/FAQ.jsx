import React from "react"

const FAQ=()=>{
const faqs=[
{question:"What documents do I need to rent a car?",answer:"You need a valid driver’s license, a government-issued ID, and a payment method."},
{question:"How can I pay for my rental?",answer:"We accept credit/debit cards, mobile payments, and online banking transfers."},
{question:"Can I cancel or modify my booking?",answer:"Yes, you can cancel or modify your booking up to 24 hours before the rental date without any charges."},
{question:"Are the cars insured?",answer:"Yes, all our cars come with comprehensive insurance for your safety and peace of mind."},
{question:"Do you offer long-term rentals?",answer:"Yes, we offer weekly and monthly rental plans. Contact support for special deals."},
{question:"Can I pick up the car from a different location?",answer:"Yes, we offer flexible pick-up and drop-off options. Additional charges may apply."},
{question:"Are there age restrictions for renting?",answer:"Yes, drivers must be at least 21 years old and have a valid driving license."},
]
return(
<div className="w-[90%] lg:w-[80%] mx-auto mt-24">
<h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 text-base-content">
Frequently <span className="text-primary">Asked</span> Questions
</h2>
<div className="space-y-4">
{faqs.map((faq,index)=>(
<details key={index} className="bg-base-100 text-base-content p-6 rounded-xl shadow transition cursor-pointer">
<summary className="font-semibold text-lg">
{faq.question}
</summary>
<p className="mt-2 text-base-content/70">{faq.answer}</p>
</details>
))}
</div>
</div>
)
}
export default FAQ
