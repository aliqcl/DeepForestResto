const menuContainer = document.getElementById('menu');

fetch('../source/menu.json')
    .then(response => response.json())
    .then(data => {
        data.menuElements.forEach(element => {
            menuContainer.innerHTML += 
                `<div class="col-md-4">
                    <img src="../source/menu-img/${element.img}" class="img-fluid" alt="${element.name}">
                </div>
                <div class="col-md-8">
                    <h4>${element.name}</h4>
                    <p>${element.price}</p>
                </div>`
        });;
    });