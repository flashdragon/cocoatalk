const im=document.querySelector(".js-imgform");
const btn=im.querySelectorAll("button");
const bim=document.querySelector(".bim");


function paintImage(sr){
    const image=new Image();
    image.src=`${sr}`;
    image.classList.add("big");
    bim.append(image);
    console.log(bim.childNodes);
    bim.removeChild(bim.childNodes[0]);
}

function handleSubmit(event){
    event.preventDefault();
    paintImage(event.target.src);
}


function init(){
    bim.removeChild(bim.childNodes[0]);
    bim.removeChild(bim.childNodes[1]);
    for(var i=0;i<16;i++){
        btn[i].addEventListener("click",handleSubmit);
    }
}






init();