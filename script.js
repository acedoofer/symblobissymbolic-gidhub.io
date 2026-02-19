const logo = document.getElementById("logoImg");

function animateChange(newSrc){
    logo.style.transition = "0.4s ease";
    logo.style.transform = "scale(0.8) rotate(20deg)";
    logo.style.opacity = "0";

    setTimeout(()=>{
        logo.src = newSrc;
        logo.style.transform = "scale(1) rotate(0deg)";
        logo.style.opacity = "1";
    },300);
}

function setMan(){
    animateChange("ace.png");
}

function setWoman(){
    animateChange("heart.png");
}
