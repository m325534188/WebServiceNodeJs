
const longestArr = (numbers) => {
    const evenNumbers = [];
    
       for (let i = 0; i < numbers.length; i++) {
                     let max = 0;
            for (let j = 0; j < numbers[i].length; j++) {
                if (numbers[i][j] > max) {
                  max = numbers[i][j];
               }
               }
             evenNumbers.push(max);
         }
        console.log(evenNumbers);
    return evenNumbers;
    }
    const biggest = (arr) => {
      const betwin = [];
           for (let i = 0; i < arr.length; i++) {
               if (arr[i] > 15 && arr[i] < 25) {
                 betwin.push(arr[i]);
                     }
            }
        console.log(betwin);
          return betwin; 
        }
        
      const  fancA=(arr)=>{
        let sum=0;
       for(let i = 0; i < arr.length; i++){
        for (let j = 0; j <arr[i].length; j++)
            sum = sum + arr[i][j];
            }
       setTimeout(() => {
        console.log(sum);
       }, 2000);
        return sum
     }
    
    const funcB=(num)=>num*2

    module.exports = {
      longestArr,
      biggest,
      fancA,
      funcB
    }