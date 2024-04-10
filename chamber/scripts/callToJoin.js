
const callToAction  = document.querySelector(".call-to-action ");


callToAction.addEventListener("click", redirigirAJoinPage);

  
function redirigirAJoinPage() {
    // console.log('Entra en redirigirAJoinPage');
     window.location.href = "join.html";
     // console.log('Sale de redirigirAJoinPage');
}