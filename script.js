document.getElementById("btn").addEventListener("click",function(){
    let p1=Math.floor(Math.random()*6)+1;
    let p2=Math.floor(Math.random()*6)+1;
    document.getElementById("player1").src=`assets/${p1}.png`;
    document.getElementById("player2").src=`assets/${p2}.png`;
    if (p1>p2){
        document.querySelector("h1").textContent="Player 1 win"; }
    else if (p1<p2) document.querySelector("h1").textContent="Player 2 win";
    else document.querySelector("h1").textContent="game tie"
}) 