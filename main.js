const buttons = Array.from(document.querySelectorAll(".btn"));
const thankYouCard = document.querySelector(".thank-you-card");
const ratingCard = document.querySelector(".rating-card");
const rating = document.querySelector(".rate");
const buttonSubmit = document.querySelector(".submit-rating");

buttonSubmit.addEventListener("click", showThanksPage)

buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });



function handleClick(event) {
    console.log(event);
  rating.innerHTML = event.target.innerHTML;

}

function showThanksPage() {
  ratingCard.classList.add("inactive");
  thankYouCard.classList.remove("inactive");
}



