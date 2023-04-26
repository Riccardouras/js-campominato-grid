const containerr = document.getElementById("container");
const gioca = document.getElementById("play");
const difficolta = document.getElementById("inputGroupSelect01").value;
play.addEventListener("click", function() {
    containerr.innerHTML="";
    if(difficolta=="noob"){
        for (let i = 1; i < 101; i++) {
            const x = document.createElement("div");
            x.classList.add("box");
            x.classList.add("onclick")
            x.innerHTML+=`${i}`
            x.addEventListener("click", function() {
                this.classList.toggle("onclick");
                console.log({i})
        });
      containerr.appendChild(x)
    }
    return
}else if(difficolta=="average"){
    for (let i = 1; i < 82; i++) {
        const x = document.createElement("div");
        x.classList.add("box1");
        x.classList.add("onclick")
        x.innerHTML+=`${i}`
        x.addEventListener("click", function() {
            this.classList.toggle("onclick");
            console.log({i})
    });
  containerr.appendChild(x)
}
}else if(difficolta=="pro"){
    for (let i = 1; i < 50; i++) {
        const x = document.createElement("div");
        x.classList.add("box2");
        x.classList.add("onclick")
        x.innerHTML+=`${i}`
        x.addEventListener("click", function() {
            this.classList.toggle("onclick");
            console.log({i})
    });
  containerr.appendChild(x)
}
}
});

