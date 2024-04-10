const baseURL = "https://amaurisiqueira.github.io/wdd230/chamber/";
const linksURL = baseURL +"data/members.json";

const gridbutton = document.querySelector("#directory-grid");
const listbutton = document.querySelector("#directory-list");
const myDivContainer = document.querySelector(".myDivDirectoryContainer");


//
gridbutton.addEventListener("click", () => {
	// console.log("Enter in Grid");
	myDivContainer.classList.add("grid");
	myDivContainer.classList.remove("list");
});

listbutton.addEventListener("click", ()=>{
    // console.log("Enter in List");
    myDivContainer.classList.add("list");
	myDivContainer.classList.remove("grid");
 
}); 






async function getLinks() {


    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        // console.log(data);
        displayLinks(data); // Llama a la función para mostrar los enlaces
    } catch (error) {
        console.error('Error fetching links:', error);
    }


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
    for (let member of data.members) {



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
            card.appendChild(infoMember);
                                

 
        cardCentral.appendChild(card);
    }
}


getLinks();