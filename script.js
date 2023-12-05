// const card = document.getElementsByClassName("card")
// console.log(card)
// const slideLeft = document.querySelector(".btn-slide-left")
// console.log(slideLeft)

// slideLeft.addEventListener("click", () => {
//     card.classList.toggle("animation-left")
//   });

const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".carousel-container i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

//Add event listener for the arrow button left and right 
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn.id);
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});


// const carouselChildren = [...carousel.children]

// //Get the number of cards that can fit in the carousel at once
// let cardPerView = Math.round(carousel.offsetWidth /firstCardWidth)

// //Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildren.slice(-cardPerView).reverse().forEach( card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
// })

// //Insert copies of the first few cards to beginning of carousel for infinite scrolling
// carouselChildren.slice(0,cardPerView).forEach( card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML)
// })