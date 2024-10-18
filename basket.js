/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/
// let basket = { // product to qty
//     "Eggs": 2,
//     "Milk": 4,
//     "Ball": 1
// }
let basket = {};
let prices = { // product to price
    "Ball": 4.99,
    "Milk": 1.05,
    "Eggs": 3.50,
};
let total = 0;
let addItem = () => {
    let product = document.getElementById("selProduct").value;
    let qty = document.getElementById("txtQty").value;
    basket[product] = qty;
    let itemTotal = prices[product] * qty
    document.querySelector("#tblShowGrid tbody").insertAdjacentHTML('beforeend', `<tr><td>${product}</td><td>${qty}</td><td>${itemTotal}</td></tr>`);
    total += itemTotal;
    document.getElementById("lblTotal").innerHTML = total;
}

let basketCost = (b, p) => {
    let sum = 0;

    for (let key in b) {
        if (p[key]) {
            sum += b[key] * p[key];
        } else {
            console.log(`${key} is not found in prices list`);
        }
    }
    return sum;
}

alert(basketCost(basket, prices));