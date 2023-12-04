// const card = document.getElementsByClassName("card")
// console.log(card)
// const slideLeft = document.querySelector(".btn-slide-left")
// console.log(slideLeft)

// slideLeft.addEventListener("click", () => {
//     card.classList.toggle("animation-left")
//   });

const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".carousel-container i");
// console.log(arrowBtns)
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn.id);
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});