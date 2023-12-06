const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".carousel-container i");
const firstCardWidth = carousel.querySelector("li").offsetWidth;
// const firstCardHeight = carousel.querySelector("a").offsetHeight;

//Add event listener for the arrow button left and right ==> working initial code
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn.id);
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});


// Add event listener for the arrow button left-up and right-down 

// function scroll (x) {
// if (x.matches){
// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {     
//      // console.log(btn.id);
//     carousel.scrollTop += btn.id === "left" ? -firstCardHeight : firstCardHeight;
//     })})}
// else {
//     arrowBtns.forEach(btn => {
//         btn.addEventListener("click", () => {     
//          // console.log(btn.id);
//      carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
//      })       
//  })};
// }
// let x = window.matchMedia("(max-width: 600px)")
// scroll(x)


// //Get the number of cards that can fit in the carousel at once
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)
const carouselChildren = [...carousel.children]
let cardPerView = carousel.offsetWidth / firstCardWidth


//Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildren.slice(-cardPerView).reverse().forEach( card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
})

//Insert copies of the first few cards to beginning of carousel for infinite scrolling
carouselChildren.slice(0,cardPerView).forEach( card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

const infiteScroll = () => {
    //If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    //If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
}
carousel.addEventListener("scroll", infiteScroll)