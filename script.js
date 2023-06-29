function makeSound() {
    let audio = new Audio("assets/sound.mp3"); //for sound                                                  
    audio.play();
  }

document.getElementById("start").addEventListener("click", function () {
    makeSound();
    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("p1").src = `assets/${p1}.png`;
    document.getElementById("p2").src = `assets/${p2}.png`;
    if (p1>p2){
        document.querySelector("h1").textContent="🥳 Player 1 win 👑"; 
        let win = new Audio("assets/win.mp3").play();
    }
    else if (p1<p2) document.querySelector("h1").textContent="👑 Player 2 win 🥳";
    else document.querySelector("h1").textContent="🤹 game tie 🤹‍♀️"
}) 


