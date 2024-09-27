a = 3, b = 5 , n = 1000, sum = 0;

for(let i = 0; i < n; i++){
    if(i % a == 0 || i % b == 0){
        sum+= i;
    }
}

alert(sum);