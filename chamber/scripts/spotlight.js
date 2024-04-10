const baseURL = "https://amaurisiqueira.github.io/wdd230/chamber/";
const linksURL = baseURL +"data/members.json";

 const myDivContainer = document.querySelector(".myDivDirectoryContainer");



//
function filtrarMiembros(ParameterData) {

    // console.log('filtro.' , ParameterData);
    return ParameterData.members.filter(member => ( member.membershipLevel==='Silver' || member.membershipLevel==='Gold') );
}


async function getLinks() {

    // console.log(linksURL);
    const response = await fetch(linksURL)
         .then(response => response.json())
       .then(eachOne => {
             return filtrarMiembros(eachOne ) ;
        })

        //// console.log('Filtrado');
       // // console.log(response);
        displayLinks(response) ;

  }
  

 
  function displayLinks(data) {
    let cardCentral = document.querySelector(".myDivDirectoryContainer");
    /*let h3 = document.createElement("h3");
    h3.textContent = "Learning Activities";
    card.appendChild(h3);*/



    /*
{
    "names":"Sociedad 0306",
    "addresses":"Av. Santa Isabel 0306",
    "phoneNumbers":"98663-1234",
    "website":"https://www.instagram.com/sociedad0306/",
    "imageName": "bar-sociedad-4-small.webp",
    "membershipLevel":"NP Membership",
    "information":"An old vulcanization of Av. Santa Isabel became one of the favorite bars of many in the Italia neighborhood, Sociedad 0306. One of the currently fashionable establishments in this sector of Providencia and which boasts two floors and a terrace lit all year round, which is open in summer and closed and well heated in winter."
    }


    */
    
    const arrayLength = data.length; // Corregir aquí


    

    let  maxIteration=3;
    //let lastRandom=[99,99,99];
    let lastRandom=99;
    for (let i=0; i<arrayLength;i++) {
      
           if(maxIteration--<1) break;
 
            let  randomIndex = Math.floor(Math.random() * arrayLength); // Número aleatorio entre 0 y arrayLength - 1
           
/*
||
            lastRandom[1]===randomIndex ||
            lastRandom[2]===randomIndex  
            */
           while(
            lastRandom===randomIndex 
            ){
        

                 randomIndex = Math.floor(Math.random() * arrayLength); // Número aleatorio entre 0 y arrayLength - 1

           }
           lastRandom=randomIndex;


           // console.log('Índice aleatorio:', randomIndex);
    
           const selectedMember = data[randomIndex]; // Selecciona el miembro aleatorio
           // console.log('Miembro seleccionado:', selectedMember);

                   
            let member =data[randomIndex]; 
            // console.log('Miembro seleccionado:', member);
            // console.log(member);

            let card = document.createElement('section');//--- section

           
         
            let nameMember = document.createElement('h2');
            let addressMember = document.createElement('p');
            let phoneMember = document.createElement('p');
            let websiteMemberParagraph = document.createElement('p');
            let websiteMember = document.createElement('a');
            let imageMember = document.createElement('img');
            let levelMember = document.createElement('p');
            let infoMember = document.createElement('p');
     
            // console.log(member.names);

            nameMember.textContent = `${member.names}`;
            // console.log(member.addresses);
            addressMember.textContent = `${member.addresses}`;
            // console.log(member.phoneNumbers);
            phoneMember.textContent = `${member.phoneNumbers}`;

            // console.log(member.website);
            websiteMember.textContent = `Website`;
            websiteMember.setAttribute('href', `${member.website}` );

            
            // console.log(member.imageName);
            imageMember.setAttribute('src' ,   `${baseURL}/images/${member.imageName}`);
            // console.log(member.names);
            imageMember.setAttribute('alt' ,   `Image of ${member.names}`);
            imageMember.setAttribute('loading' , 'lazy');
            
            // console.log(member.membershipLevel);
            levelMember.textContent = `Member Level ${member.membershipLevel}`;
            // console.log(member.information);
            infoMember.textContent = `Member Level ${member.information}`;
            infoMember.setAttribute('class','memberInfo')
        
          

        
            card.setAttribute('class','myDivDirectoryContainer mysesion')

            websiteMemberParagraph.appendChild(websiteMember);
        
        
        


            card.appendChild(nameMember);
            card.appendChild(addressMember);
            card.appendChild(phoneMember);
            card.appendChild(websiteMemberParagraph);
            card.appendChild(imageMember);
            card.appendChild(levelMember);
            //card.appendChild(infoMember);
            card.style.gridColumn = `${i+1}`;
              

 
        cardCentral.appendChild(card);
    }
}


getLinks();