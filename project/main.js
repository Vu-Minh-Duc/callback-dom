// let users = [
//     { id: 11, name: 'Adam', coin:500 },
//     { id: 47, name: 'John', coin :100  },
//     { id: 85, name: 'William',coin:300 },
 
//   ];

//   Array.prototype.map2=function(callback){
//     var output=[];
//     for ( var i=0 ; i<this.length;i++){
//         var result=callback( this[i],i);
//         output.push(result)
//     }
//     return output
//   };
//   var htmls =users.map2( function( course,index){
    // return `<h2> ${course.name}-${course.coin} </h2> ` 
//   })
//   console.log(htmls)
//   for (let i=0; i< htmls.length;i++){
//   document.write(htmls[i])}
  
  
//b2
// let users = [
//     { id: 11, name: 'Adam', age: 23, group: 'editor' },
//     { id: 47, name: 'John', age: 28, group: 'admin' },
//     { id: 85, name: 'William', age: 34, group: 'editor' },
//     { id: 97, name: 'Oliver', age: 28, group: 'admin' },
//     { id: 10, name: 'Trung', age: 20, group: 'fullstack'},
//     { id: 21, name: 'Tuong', age: 20, group: 'admin'},
//     { id: 1, name: 'Dat', age: 20, group: 'fullstack'},
//   ];
//   Array.prototype.map2=function(callback){
//         var output=[];
//         for ( var i=0 ; i<this.length;i++){
//             var result=callback( this[i],i) 
//                 output.push(result)
//         }
//         return output
//       };
     
//       var htmls =users.map2( function( course,index){
//         if (course.group=== 'admin' ){
//         return `<h2> id:${course.id},name:${course.name},age:${course.age},group:${course.group}}</h2> `}
      
//       if (course.group=== 'fullstack' ){
//         return `<h2> id:${course.id},name:${course.name},age:${course.age},group:${course.group}}</h2> `}
//       })
//       for ( let i=0 ; i< htmls.length;i++){
//         if(htmls[i] != undefined ){
//             document.write(htmls[i])
//         }
//       }
//b3
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    { id: 10, name: 'Trung', age: 20, group: 'editor'},
    { id: 21, name: 'Tuong', age: 20, group: 'admin'},
    { id: 1, name: 'Dat', age: 20, group: 'fullstack'},
  ];
  
  Array.prototype.map2=function(callback){
    var output=[];
    for ( var i=0 ; i<this.length;i++){
        var result=callback( this[i],i) 
            output.push(result)
    }
    return output
  };
 
  var htmls =users.map2( function( course,index){
      if ( course.group === 'editor'){
          return `<h2> id:${course.id},name:${course.name},age:${course.age},group:media</h2> `} else
                            { return `<h2> id:${course.id},name:${course.name},age:${course.age},group:${course.group}</h2> ` ;}})
   console.log(htmls)
    for ( let i=0 ; i< htmls.length;i++){
        document.write(htmls[i]) }