alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/
let basket = {
    "name": "Ball",
    "qty": 2
}

let product = {
    "name": "Ball",
    "price": 4.99
};
let basketCost = (b, p) => {
    console.log(b, p);
    return b.qty * p.price;
}

alert(basketCost({}, {}))