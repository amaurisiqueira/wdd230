document.addEventListener("DOMContentLoaded", function() {
    const messageContainer = document.getElementById("discover-message-container");
    const closeButton = document.getElementById("discover-close-btn");
  


    //1

    const  myMessage  = document.querySelector("#myUserMessage");

 
    



    const dateLastVisit = window.localStorage.getItem("myLastVisit-ls") ;
    if(dateLastVisit){
      

      const fecha = new Date(dateLastVisit);
 
      const ndays = Math.floor((new Date() - fecha) / (1000 * 60 * 60 * 24));
  
       if(ndays<1){
            myMessage.textContent = "Back so soon! Awesome!";
       }else{
         let mess = "You last visited";
             mess += ndays;
             mess += " days ago."
            myMessage.textContent = mess;

       }
      
     

    }else {
        myMessage.textContent = "Welcome! Let us know if you have any questions. 🥳"

    }


    const myNow = new Date();
    localStorage.setItem("myLastVisit-ls", myNow.toISOString());
       


    //2    
    // Mostrar el mensaje al cargar la página
    messageContainer.classList.remove("discover-hidden");
  




    // Cerrar el mensaje al hacer clic en el botón de cerrar
    closeButton.addEventListener("click", function() {




      messageContainer.classList.add("discover-hidden");
    });
  });