// const card = document.getElementsByClassName("card")
// console.log(card)
// const slideRight = document.querySelector(".slide-right")
// console.log(slideRight)

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
  
  
  
  
  
  