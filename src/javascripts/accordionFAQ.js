//accordionFAQ.js
const faqs = [
  {
    question: "How is Cardeal different from other online car buyers?",
    answer: `Cardeal will buy "any" car even if it has a blown engine. At Cardeal, we want to offer the highest value, 
             quick payment for cars, convenience, and a secure transaction.`,
  },
  {
    question: "How is the price of my car calculated?",
    answer: "Prices are calculated based on the current market value of your car and its condition.",
  },
  {
    question: "What costs will I be responsible for?",
    answer: `Cardeal is a free service. There are no charges for evaluations and offers. If you sell a car with Cardeal, 
             we pay for pick up and towing. We have no hidden costs.`,
  },

  {
    question: "How quickly can you have my vehicle picked up?",
    answer: `Cardeal has a branch in every state. Therefore, we can usually pick up your vehicle within 24 to 48 hours after you accept our offer.`,
  },
  {
    question: "What type of documentation will I need to provide?",
    answer: `When filling out the online form, you will be asked to enter your Vehicle Identification Number (VIN). 
            A vehicle's VIN contains its year, make, model, trim information and other auto options and details. 
            Cardeal also requires a title in the seller's name. We cannot buy your vehicle without a valid, signed title from the registered vehicle owner.`,
  },
  {
    question: "Will you buy my car if I can't get it started?",
    answer: `If you have a damaged, wrecked or non-running car on your hands, Cardeal can help you get rid of it. 
            We'll give you a fair market offer for your car that's tailored to your vehicle's conditions and local market demands.`,
  },
]

const accordionFAQ = document.getElementById("accordionFAQ")

faqs.forEach((faq, index) => {
  const itemId = `collapse${index + 1}`
  const isOpen = ""
  const isExpanded = "false"

  const accordionItem = `
    <div class="accordion-item-wrapper">
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index + 1}">
                <button
                class="accordion-button ${isOpen ? "" : "collapsed"}"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#${itemId}"
                aria-expanded="${isExpanded}"
                aria-controls="${itemId}">
                ${faq.question}
                </button>
            </h2>
            <div id="${itemId}" class="accordion-collapse collapse ${isOpen}" aria-labelledby="heading${
    index + 1
  }" data-bs-parent="#accordionFAQ">
                <div class="accordion-body">
                ${faq.answer}
                </div>
            </div>
        </div>
    </div>
  `
  accordionFAQ.insertAdjacentHTML("beforeend", accordionItem)
})
