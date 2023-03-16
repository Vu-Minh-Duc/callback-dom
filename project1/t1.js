// b1
// function run(name, year_of_birth) { 
//     let d = new Date();
//      let current_year = d.getFullYear();
//      let full={
//         "name":name,
//         "year_of_birth":year_of_birth,
//         address: "Ha Noi",
//         age:current_year-year_of_birth,
//      }

//     console.log(); 
//     console.log(`${full.name}` + " is " + `${full.age}` + " years old");
// };
// run("minhduc",2004);
// // b2
//  let Testdata =[254, 45, 212, 365, 2543];
// function randd(arr){
//     console.log(arr[Math.floor(Math.random()*5)])
// }
// randd(Testdata);
//b3
let test=[10, 20, 30, 40, 50];
 function move(arr, old_index, new_index){
    if (old_index<0)
   {
    old_index +=arr.length;
   } else  if ( new_index<0){new_index +=arr.length } else if (new_index>= arr.length){ var k=new_index-arr.length;
if ((k--) + 1) { arr.push(undefined)} else { arr.splice(new_index,0,arr.splice(old_index,1)[0]);
    return arr }} else {arr.splice(new_index,0,arr.splice(old_index,1)[0]);
        return arr } 
    } 
     
 move(test,0,2);
 console.log(test);
//b4
//  let array1 = [1,0,2,3,4];
//  let array2 = [3,5,6,7,8,13];
// let a;
// let b=[];
// if (array1.length>array2.length){ a=array1.length-1;
//  for (let i=0 ; i<=(array1.length - array2.length); i++){
//     array2.push(0);}

//  }  else{ a=array2.length-1;
//     for (let i=0 ; i<=(array2.length - array1.length); i++){
//         array1.push(0);
// }}
// for (let i=0 ;i<=a; i++){
//  b.push(array1[i]+array2[i])  
// }
// console.log(b)
//b5
// let library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
//      for(let i=0; i<= library.length-1;i++)
//      {   
//         if (library[i].readingStatus == true) { console.log("Already read" + `${library[i].title}`  +"by"+ `${library[i].author}`)} else {
//             console.log("You still need to read" + `${library[i].title}` +"by"+ `${library[i].author}`)
//         }
//      }
//b6

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

//     console.log(student);
//     delete student.rollno;
//     console.log(student)

 