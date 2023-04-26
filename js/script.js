const containerr = document.getElementById("container");
const gioca = document.getElementById("play");
 
play.addEventListener("click", function() {
    containerr.innerHTML="";
    for (let i = 1; i < 101; i++) {
        const x = document.createElement("div");
        x.classList.add("box");
        x.classList.add("onclick")
        x.innerHTML+=`${i}`
        x.addEventListener("click", function() {
            this.classList.toggle("onclick");
            console.log(this)
      });
      containerr.appendChild(x)
    }
    return
});

