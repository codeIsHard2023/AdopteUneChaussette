// const card = document.getElementsByClassName("card")
// console.log(card)
// const slideRight = document.querySelector(".slide-right")
// console.log(slideRight)

// slideRight.addEventListener("click", function (event) {
//     card.classList.toggle() = ".animation-right"
//   });

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
  
  