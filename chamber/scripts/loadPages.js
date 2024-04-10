 // Función para cargar el contenido de las páginas "hijas"
const myLoadPage=(pagina) =>{
    fetch(pagina)
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
        })
        .catch(error => {
            // console.log('Error loading page:', error);
        });
}


window.addEventListener('DOMContentLoaded', () => {
    // Obtener el contenido de la página actual (por defecto, página principal)
    myLoadPage('home.html');

   
});