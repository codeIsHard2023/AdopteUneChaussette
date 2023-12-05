// const card = document.getElementsByClassName("card")
// console.log(card)
// const slideRight = document.querySelector(".slide-right")
// console.log(slideRight)

// slideRight.addEventListener("click", function (event) {
//     card.classList.toggle() = ".animation-right"
//   });


// JS for login

    const usernames = ["user1", "user2", "user3"];
    const passwords = ["mdp1", "mdp2", "mdp3"];

    function login() {
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        const index = usernames.indexOf(usernameInput);
        if (index !== -1 && passwords[index] === passwordInput) {
            document.getElementById("errorMessage").innerText = "Connexion réussie!";
            window.location.href = "index.html";
        } else {
            document.getElementById("errorMessage").innerText = "Identifiants incorrects. Veuillez réessayer.";
        }
    }
