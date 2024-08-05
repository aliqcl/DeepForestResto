const menuContainer = document.getElementById('drinks');

fetch('../source/bar.json')
    .then(response => response.json())
    .then(data => {
        data.menuElements.forEach(element => {
            menuContainer.innerHTML += 
                `
                <div class="col-md-12 d-flex align-items-center justify-content-center text-center">
                    <h4>${element.name}</h4>
                    <span>${element.price}</span>
                </div>
                `
        });;
    });