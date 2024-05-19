// Classy Products: Create a class Product with properties name (string), price (number), 
// and methods:
// getDetails(): Returns a string representation of the product details (name and price).
// applyDiscount(discount): Applies a discount (percentage) to the product's price and returns the discounted price.

class product{
    constructor(name,price){
        this.name = name,
        this.price = price
    }
    getDetails(){
        return `Product:${this.name}, Price:$${this.price}`
    } 
    applyDiscount(discount){
        let withDiscount = this.price - (this.price* discount/100)
        return withDiscount
    }
}

let productInfo = new product('shoes',200)

console.log(productInfo.getDetails())