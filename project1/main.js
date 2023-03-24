// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 90, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];
//   var maxprice=products.reduce( function(a,b){
//     if (a<b.price)( a=b.price)
//     return a
//   },0);
//   console.log(maxprice)
// let sum=0;
// const input = [1, -4, 12, 0, -3, 29, -150];
// var total=input.reduce( function(a,b){
//     a=a+b;
//     return a;
//     },0);
//     console.log(total)
const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 67,
    },
  ];
  var oldder=input.filter( function(course){
    return course.age==67
  })
  console.log(oldder)
