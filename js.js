 var arr = [12, 67, 23, 32];

 for(i = 0; i< arr.length; i++ ){
     console.log(arr[i])
 }

 console.log("........")

 var i = 0
 while(i<arr.length){
     console.log(arr[i])
     i = i + 1
    if(i >= arr.length){
     break}
 }

 console.log("........")

 for(var i=0 in arr){
     console.log(arr[i])
 }

 console.log("........")

for(let value of arr){
    console.log(value)
} 

/* while (arr = [12, 67, 23, 32], arr<[2]){
     console.log([arr]);
     arr++
     };*/



