// for loop
// Code for Prime numbers using nested for loop

for(let num1 = 2; num1 <= 100; num1++)
{
    let prime = 1
    for(let j=2;j < num1;j++)
    {
        
        if (num1%j===0 )
        {
           prime++
        }             
    }
   if(prime===1)
   console.log(`${num1} is prime`)  
} 