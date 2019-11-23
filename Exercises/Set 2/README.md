1. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.

```js
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWords(paragraph,'love', 'you'));
The word love more frequently occurred than you.

```

2. The following todoList has three tasks. Create an addTask, removeTask, editTask, toggleTask, toggleAll, removeAll functions to modify the todoList.

```js
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/3/2019 8:30",
    completed: true
  },
  {
    task: "Give JS Test",
    time: "4/3/2019 10:00",
    completed: false
  },
  {
    task: "Assess Test Result",
    time: "4/3/2019 1:00",
    completed: false
  }
];
```

3. The following shopping cart has four products. Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart.

```js
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

addProduct("Meat");
["Milk", "Coffee", "Tea", "Honey", "Meat"];

editProduct(3, "Sugar");
["Milk", "Coffee", "Tea", "Sugar", "Meat"];

removeProduct(0);
["Coffee", "Tea", "Sugar", "Meat"];
removeProduct(3);
["Coffee", "Tea", "Sugar"];
```
