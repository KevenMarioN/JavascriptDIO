function parIsZero(arrayNumber){
  arrayNumber.map((number,index) =>{
    if(number % 2 === 0){
      arrayNumber[index] = 0;
      return;
    }
  })
}
const arrayInput = [1, 3, 4, 6, 80, 33, 23, 90]
parIsZero(arrayInput);
console.log(arrayInput);