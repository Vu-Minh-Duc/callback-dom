// //bai1
// style=['jazz','Blues'];
// style.push('Rocl-n-Roll');
// style.splice(1,1,'Classics');
// style.shift();
// style.unshift('Rap','Reggae');


// //bai2
// var abc=[123,123,225];
//  var sum1=0;
// function sumlnput(abc){
//        for ( var i=0;i<=(abc.length-1);i++){
//     if (typeof abc[i] !== 'number' || abc[i] ===''  || abc[i] === 'huy' ){
//       } else  { sum1=sum1+abc[i]}
//  }};
//         sumlnput(abc);
// console.log(sum1);
    
// //bai3
// var str1="list-style-image";
// function camelize(str){
//    var came=str.replace(/-/g,'');
//    return came;
// };
// camelize(str1);
// console.log(camelize(str1));
// //bai4
// var arr1=[1,2,3,4,5,6,7,8,9];
// function filterRanger(arr,a,b){
//     newArr=arr.slice(a,b);
//     return newArr;
// };
// console.log(filterRanger(arr1,2,7));

// //bai5
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// function names(arr){
//   var arr1=[];
//   for(var i=0;i<arr.length;i++){
//      arr1.push(arr[i].name);

//   }
// return arr1;
// }

 // John, Pete, Mary
// console.log(names(users));
//bai6
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
// function groupById(arr){
//   var arr1=[];
//     for (var i=0;i<=arr.length-1;i++){
//       var arrs3=[':']
//       var arrs1=(arr[i].id)
//       var arrs2=arrs1.concat(arrs3)
//       var arrs4=JSON.stringify(arr[i])// chuyển từ object sang string
//       var arrs5=arrs4.split();
//      arr2=arrs2.concat(arrs5)
//      arr1.push(arr2) ;

//       }
//       return arr1}
 
//   let usersById = groupById(users);
//   console.log(usersById);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
//  //bai7 
//  var user={}
//  user.name='David';
//  user.surname='Xuan';
//  user.name='Cafedev';
// delete user.name;
// console.log(user)

//  //bai8( tong cac phan tu object)
//  let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   var total=0

//   for( var property in salaries){
//     total=total + salaries[property];
    
//   };
//   console.log(total)
  
//   //bai9
//   // before the call
//    function multiplyNumeric(object){
//     for( var property in object){
//         if (typeof object[property] === 'number'){
//           object[property]=object[property]*2}

//   }}
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu cafedev"
//   };
//   multiplyNumeric(menu)
//  console.log(menu );

  
  // after the call
  // menu = {
  //   width: 400,
  //   height: 600,
  //   title: "My menu cafedev"
  // };
  
  //bai10
//   var Calculator={
//        read: function(a,b){
//         var name=prompt(a);
//         var age=prompt(b);
//         Calculator.name;
//         Calculator.age;
//       },


//      sum: function(object){
    
//     for( var property in object){
//       if  (typeof object[property] === 'number')
//     total=total+object[property];
//   };
// return total},

//      mul: function(object){
//       total=1;
//       for( var property in object){
//         if (typeof object[property] === 'number'){
//       total=total*object[property];
//     };
//     }; return total;
//   }
//   }
  // //bai11
  // var k=0;
  // var number=promt()
  // if (k=0){
  // for ( var i=0; i<=1,i++)
  // if ( number <= 100){ k=1; 
  //   break;}; else {number='';}
  // };

//   }
// //bai12
// var n=100;
// var nt=[];
// for (var i=2; i<=n;i++){
//   for( var k=2;k<= Math.sqrt(i);k++) {
//   if ( i%k === 0) {
//     nt.push(i);
//     break;
//   }
// }
// }
// console.log(nt);
//bai13
// var x=321;
// var t='';
// var result;
//  var y=String(x);
// var z=y.split('');
// for (var i=z.length-1;i>=0;i--){
// t=JSON.stringify(z[i])+t
// t=t.replace(/"/g,'')
// } 
// result=t.split();

// console.log(result)


// //bai14
// var x=321;
// var t=[];
// k=0;
//  var y=String(x);
// var z=y.split('');
// for (var i=z.length-1;i>=0;i--){
// if (k < z[i]){ k=z[i]};
// };
// console.log(k)
// //bai15
var n=10;
var sum=0;
var i=2
while (i<=n){ if (i%2 === 0){sum=sum+i}
i++;
};
console.log(sum)


