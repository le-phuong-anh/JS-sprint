// 3. The following shopping cart has four products. Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart.

// ```js
// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// addProduct("Meat");
// ["Milk", "Coffee", "Tea", "Honey", "Meat"];

// editProduct(3, "Sugar");
// ["Milk", "Coffee", "Tea", "Sugar", "Meat"];

// removeProduct(0);
// ["Coffee", "Tea", "Sugar", "Meat"];
// removeProduct(3);
// ["Coffee", "Tea", "Sugar"];
// ```

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

function addProduct(product){ 
    shoppingCart.push(product); //treating shoppingCart as an array and use the push method to add a new item into the array
    console.log(shoppingCart);
}

function editProduct(x,y){
    shoppingCart[x] = y; 
    console.log(shoppingCart);
}

function removeProduct(x){
    shoppingCart.splice(x, 1);
    console.log(shoppingCart);

}

function removeAll(){
    var count = shoppingCart.length;
    shoppingCart.splice(0,count);
    console.log(shoppingCart);
}
