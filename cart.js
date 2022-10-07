///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(((acc, curr) => acc + curr.price), 0)

// console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal * (1 + tax) - couponValue
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
So, to start we'll want a name. That'll be a string.
Next we need to track what's in their cart. That should be an array of objects
We'll also need to know what table they are sitting at so we can give them the food. This will be a number.
finally we'll want to track their total. This is going to be a number.
also we need to know if they have any coupons
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

class Customer {
    constructor(name, cart, table, coupons) {
        this.name = name
        this.cart = cart
        this.table = table
        this.total = 0
        this.coupons = coupons
    }
    addItemToCart(item) {
        this.cart.push(item)
    }
    calcTotal() {
        this.total = calcFinalPrice(this.cart.reduce(((acc, curr) => acc + curr.price), 0), this.coupons, 0.06)
    }
}

let jake = new Customer("jake", cart, 5, 2)
console.log(jake)
jake.calcTotal()
console.log(jake)