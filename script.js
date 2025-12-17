

const container = document.querySelector(".container");
const options = document.querySelectorAll(".option-image");
const userResult = document.querySelector(".user-result img");
const otherResult = document.querySelector(".ather-result img");
const result = document.querySelector(".result");



// Parcourt toutes les images/options
options.forEach((image,index) => {                                      
    image.addEventListener("click", (e) => {                      
        
        
        options.forEach(opt => opt.classList.remove("active"));
        
       
        image.classList.add("active");   
        
        
        options.forEach((images2, index2) => {
            // console.log(index, index2);
            index !== index2 && images2.classList.remove("active");
        });
        
    const chosenImg = image.querySelector("img"); 
        const userSrc = chosenImg.src;

        // Met à jour l'image du joueur 
       userResult.src = userSrc;

    let randomNumber = Math.floor(Math.random() * 3);
    let otherimg = ["images/rock.png", "images/paper.png", "images/scissors.png"];
    otherResult.src = otherimg[randomNumber];
    

    let cpuuser=["R","P","S"][randomNumber];
    let cpuvalue=["R","P","S"][index];
    let outcomes={
        "RS": "Tu gagnes ! 🎉", 
            "PR": "Tu gagnes ! 🎉",  
            "SP": "Tu gagnes ! 🎉", 

            "RR": "Égalité ! 🤝",
            "PP": "Égalité ! 🤝",
            "SS": "Égalité ! 🤝",

            "SR": "L'ordinateur gagne ! 😭",  
            "RP": "L'ordinateur gagne ! 😭",  
            "PS": "L'ordinateur gagne ! 😭"
    };
    let outcomesValue=outcomes[cpuuser+cpuvalue];
    const key = computerChoice + playerChoice;
        const message = outcomes[key];

        // Affiche le résultat
        result.textContent = message;
    console.log(cpuuser,cpuvalue);
        // console.log(imgSrc);
        // console.log(e.target);
    });
});

