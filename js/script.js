const containerr = document.getElementById("container");
const gioca = document.getElementById("play");
 
play.addEventListener("click", function() {
    containerr.innerHTML="";
    for (let i = 1; i < 101; i++) {
       const x = `<div class="box">${i}</div>`;
        x.addEventListener("click", function() {
            x.classList.add("onclick")
            this.classList.toggle("onclick");
            console.log(this)
      });
      containerr.innerHTML += x;
    }
    return
});

