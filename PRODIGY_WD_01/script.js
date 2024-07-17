window.addEventListener("scroll",function(){
    const container = document.querySelector(".container");
    if(window.scrollY>0){
        container.style.background="black"
    }
    else{
         container.style.background="transparent"
    }
})