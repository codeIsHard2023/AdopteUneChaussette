
// slideRight.addEventListener("click", function (event) {
//     card.classList.toggle() = ".animation-right"
//   });


function openModal(clickedElement) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
  
    modal.style.display = "flex";
  
    // Récupère le style de fond directement depuis le CSS de l'élément cliqué
    const backgroundImage = getComputedStyle(clickedElement).backgroundImage;
    modalImg.style.backgroundImage = backgroundImage;
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
  
    modal.style.display = "none";
  }
  
  
  
  
  
  
//Development of the carousel for index.html : Start
const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".carousel-container i");
const firstCardWidth = carousel.querySelector("li").offsetWidth;

//Add event listener for the arrow button left and right ==> working initial code
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

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

//Development of the carousel for index.html : End



//Development of like feature with maintain of it into cookies : Start
// Set the initial color
// const initialColor = "#ffffff55";
// const heart = document.getElementById("heart");
// console.log(heart)
// heart.style.fill = initialColor;
    
// // Add a click event listener to toggle between initial color and a new color
// heart.addEventListener("click", function () {
  
//   console.log(heart)
//   const newColor = "#d11414cc";
//   console.log(newColor)
//   const currentColor = heart.style.fill;
//   console.log(currentColor)
// // If the current color is the initial color, change to ##d11414cc
//     if (currentColor === initialColor) {
//         heart.style.fill = "newColor";
//         console.log(newColor)
//     }
//     else{
//         heart.style.fill = initialColor;
//     }
// });

  //Development of like feature and keeping it into cookies : End

