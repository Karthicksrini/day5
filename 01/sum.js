var array=[1,2,3,4,5,6,7,8]
var sum=0;
(function(){
    for(let i=0; i<array.length; i++){
      sum+=array[i];
    }
})();
console.log(sum);