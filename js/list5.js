window.onload=function(){
    let go =document.querySelector(".go");
    let chose =document.querySelector(".chose");
    let yin =document.querySelector(".yin");
    let close =document.querySelector(".close");
    go.ontouchstart=function(){
        chose.style.display='block';
        yin.style.display="block";
    }
    close.ontouchstart=function(){
        chose.style.display="none"
        yin.style.display="none"
    }
}