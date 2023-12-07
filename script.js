

const usernames = ["user1", "user2", "user3"];
const passwords = ["mdp1", "mdp2", "mdp3"];


document.addEventListener('DOMContentLoaded', () => {
    const userGalleryPictures = document.querySelectorAll('.myPic');
  
    userGalleryPictures.forEach((pic) => {
      pic.addEventListener('click', () => {
        userGalleryPictures.forEach((p) => p.classList.remove('selected'));
        pic.classList.add('selected');
        document.getElementById('fileInput').click();
      });
    });
  
    document.getElementById('fileInput').addEventListener('change', handleFileChange);
  });
  
  function handleFileChange() {
    const fileInput = document.getElementById('fileInput');
    const userGalleryPictures = document.querySelectorAll('.myPic');
  
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        userGalleryPictures.forEach((pic) => {
          if (pic.classList.contains('selected')) {
            pic.style.backgroundImage = `url('${e.target.result}')`;
            pic.classList.remove('selected');
          }
        });
      };
  
      reader.readAsDataURL(fileInput.files[0]);
    }
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



/*Login script*/ 
function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const index = usernames.indexOf(usernameInput);
    if (index !== -1 && passwords[index] === passwordInput) {
        document.getElementById("errorMessage").style.display = "flex";
        document.getElementById("errorMessage").innerText = "Connexion réussie!";
        window.location.href = "welcome.html";
    } else {
        document.getElementById("errorMessage").style.display = "flex";
        document.getElementById("errorMessage").innerText = "Identifiants incorrects. Veuillez réessayer.";
    }
}


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

