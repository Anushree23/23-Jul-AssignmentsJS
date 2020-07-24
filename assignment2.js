var array = [89,120,103];
    
// Getting sum of numbers
var sum = array.reduce(function(a, b){
    return a + b;
}, 0);

//console.log(sum); 
var avg = sum/2;

var array1 = [116,94,123];

var sum1 = array1.reduce(function(a, b){
    return a + b;
}, 0);

//console.log(sum1); 
var avg1 = sum1/2;
 if(avg>avg1)
 {
     console.log('Winner is Heath');
 }
 else if(avg<avg1){
     console.log('Winner is Zane')
 }
 else{
     console.log('Match Draw');
 }

 var array2=[97,134,105];

 var sum2 = array2.reduce(function(a, b){
    return a + b;
}, 0);

var avg2=sum2/2;

if(avg>avg1 && avg>avg2)
{
  console.log('Winner is Heath')
}

else if(avg1>avg && avg1>avg2){
    console.log('Winner is Zane')
}

else if(avg2>avg && avg2>avg1){
    console.log('Winner is Marish');
}

else{
    console.log('Match Draw');
}