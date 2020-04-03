window.addEventListener('DOMContentLoaded', () => {
    let checkToggle = document.getElementById('check-label');
    let toggle = document.getElementById('toggle');
    let prices = document.getElementsByClassName('price');
    checkToggle.addEventListener('click', () => {
        if (!toggle.checked) { // 
            for (let price of prices) {
                price.innerHTML = price.dataset.annualy;
            }
        } else {
            for (let price of prices) {
                price.innerHTML = price.dataset.monthly;
            }
        }
    });
});