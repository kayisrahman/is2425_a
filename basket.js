alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/
let basket = {
    "product": "Eggs",
    "qty": 2
}

let prices = {
    "priceBall": 4.99,
    "priceMilk": 1.05,
    "priceEggs": 3.50,
};
let basketCost = (b, p) => {
    console.log(b, p);
    if (p["price" + b.product]) {
        return p["price" + b.product] * b.qty;
    }
    return 0;
}

alert(basketCost(basket, prices));