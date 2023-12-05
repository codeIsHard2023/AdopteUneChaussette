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
