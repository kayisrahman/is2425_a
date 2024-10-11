alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/
let basket = { // product to qty
    "Eggs": 2, 
    "Milk": 4,
    "Ball": 1
}

let prices = { // product to price
    "Ball": 4.99,
    "Milk": 1.05,
    "Eggs": 3.50,
};

let basketCost = (b, p) => {
    console.log(b, p);
    let sum = 0;
   
    for (let key in b) {
        if (p[key]) {
            sum += b[key] * p[key];
        }
    }
    return sum;
}

alert(basketCost(basket, prices));