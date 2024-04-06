

async function getLinks() {

    const baseURL = "https://amaurisiqueira.github.io/wdd230/";
    const linksURL = baseURL +"data/links.json";
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data); // Llama a la función para mostrar los enlaces
    } catch (error) {
        console.error('Error fetching links:', error);
    }


  }
  
  getLinks();
 
  function displayLinks(data) {
    let card = document.querySelector("#learning-activity");
    /*let h3 = document.createElement("h3");
    h3.textContent = "Learning Activities";
    card.appendChild(h3);*/

    for (let week of data.weeks) {
        let li = document.createElement("li");
        const weekTitle = document.createElement("h4");
        weekTitle.textContent = `${week.week}:`;
        li.appendChild(weekTitle);

        let myfirst=0;
        for (let link of week.links) {
            let a = document.createElement("a");
            let span = document.createElement("span");
              span.textContent = " | ";
            a.textContent = link.title;
            if(myfirst==0) myfirst=1;
            else li.appendChild(span);

            a.setAttribute("href", link.url);
            a.setAttribute("target", "_blank");
            li.appendChild(a); 
            
        }

        card.appendChild(li);
    }
}