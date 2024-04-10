


const myBannerMessageContainer = document.querySelector("#banner-message-container");
const myBannerCloseBtn = document.querySelector("#banner-close-btn");



const myNow = new Date();
// localStorage.setItem("myLastVisit-ls", myNow.toISOString());
// This banner should only appear on Mondays, Tuesdays, and Wednesdays.
 
const dayOfWeek = myNow.getDay(); // Retorna un número del 0 (domingo) al 6 (sábado)
/*
0 domingo
1 lunes
2 martes
3 miercoles
4 jueves
5 viernes
6 sabado
*/
// console.log('dayOfWeek:',dayOfWeek);
if( dayOfWeek>= 1  &&  dayOfWeek <= 3 ){
        // Mostrar el banner
        myBannerMessageContainer.classList.remove("banner-hidden");

}
   
    

myBannerCloseBtn.addEventListener("click", ()=>{

    myBannerMessageContainer.classList.add("banner-hidden");

});




 
