const containerr = document.getElementById("container");
const gioca = document.getElementById("play")
 
play.addEventListener("click", function() {
    containerr.innerHTML=""
    for (let i = 1; i < 101; i++) {
        containerr.innerHTML += `<div class="box">${i}</div>`;
    }
    this.classList.toggle("onclick");
    return
});
