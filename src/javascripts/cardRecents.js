const recents = [
  {
    title: "Toyota 4-Runner",
    imgsrc: "images/toyota_4runner.png",
    imagealt: "Toyota 4-Runner",
    year: "2001",
    mileage: "179,000 miles",
    price: "$6,500",
    bodystyle: "4dr SR5 3.4L Auto",
    condition: "4 stars",
    fueleconomy: "17mpg city, 20mpg hw",
    description:
      "I am the 2nd owner of this car just under 7 years ago. Original owner was a police officer who really maintained it well. Reason for selling just upgraded to a 2017 4X4 for future endeavors. If you're looking for a work horse, this is it.",
  },
  {
    title: "Ford Fusion",
    imgsrc: "images/ford_fusion.png",
    imagealt: "Ford Fusion",
    year: "2010",
    mileage: "59,000 miles",
    price: "$8,919",
    bodystyle: "4dr Sedan SE FWD",
    condition: "5 stars",
    fueleconomy: "22mpg city, 31mpg hw",
    description:
      "Vehicle is low miles and in excellent shape&hellip;has only been driven locally in the past 2 years. I was a former Ford employee and the vehicle has been taken care of great. It has tinted windows, interior is spotless. Great first car!",
  },
  {
    title: "Honda Civic",
    imgsrc: "images/honda_civic_sedan.png",
    imagealt: "Honda Civic",
    year: "2013",
    mileage: "131,092 miles",
    price: "$7,900",
    bodystyle: "4dr Sedan Auto LX FWD",
    condition: "3 stars",
    fueleconomy: "28mpg city, 39mpg hw",
    description:
      "Been my commuter since 2014, stereo replaced with a Boss unit with android auto and apple carplay along with speakers. Been very reliable but need larger vehicle for growing family.",
  },
  {
    title: "Ford F-150 Truck",
    imgsrc: "images/ford_f150_truck.png",
    imagealt: "Ford F-150 Truck",
    year: "2014",
    mileage: "140,000 miles",
    price: "$9,999",
    bodystyle: "2WD Reg Cab 145",
    condition: "5 stars",
    fueleconomy: "17mpg city, 23mpg hw",
    description:
      "Truck in good condition, no warning lights showing, great exhaust, 9/32 tire tread depth, full-size spare tire stored underbody.",
  },
  {
    title: "Hyundai Elantra",
    imgsrc: "images/hyundai_elantra.png",
    imagealt: "Hyundai Elantra",
    year: "2011",
    mileage: "113,325 miles",
    price: "$6,995",
    bodystyle: "4dr Sedan Auto GLS",
    condition: "4 stars",
    fueleconomy: "28mpg city, 38mpg hw",
    description:
      "Car is in great condition; runs smooth, clean inside and out. Recently completed a tune up, oil change, replaced all 4 tires.",
  },
]

const cardRecents = document.getElementById("cardRecents")

recents.forEach((recent) => {
  const cardItem = `
  <div class="col-md-4 d-flex align-items-stretch">
    <div class="card recent-card shadow-sm h-100 flex-fill">
      <img src="${recent.imgsrc}" class="card-img-top" alt="${recent.imagealt}">
      <h5 class="card-header bg-secondary">${recent.title}</h5>
      <div class="card-body">
        <p class="card-text>Image URL ${recent.imgsrc}</p>
        <p class="card-text>Image Alt ${recent.imagealt}</p>
        <p class="card-text text-center fw-bold">${recent.year} | ${recent.mileage} | ${recent.price}</p>
        <p class="card-text small-text mb-0"><strong>Style</strong>: ${recent.bodystyle}</p>
        <p class="card-text small-text mb-0"><strong>Condition</strong>: ${recent.condition}</p>
        <p class="card-text small-text"><strong>Fuel Economy</strong>: ${recent.fueleconomy}</p>        
        <p class="card-text small-text">${recent.description}</p>
         <a href="#" class="btn btn-primary mt-3">More Details</a> <!-- Added More Details button -->
      </div>
    </div>
  </div>
  `

  cardRecents.insertAdjacentHTML("beforeend", cardItem)
})
