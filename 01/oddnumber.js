var array=[1,2,3,4,5,6,7,8,9,10];
let odd=[];
(function(){
    for(let i=0; i<array.length; i++){
        if(array[i]%2==0){
          odd.push(array[i])
        }
    }
})();
console.log(odd)