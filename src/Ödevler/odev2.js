console.log("----Asal Sayı Mı")
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let counter=0
      for (let j = 2; j < numbers[i]; j++) {
         if(numbers[i]%j==0){
             counter=1
             break
         }   
      }
      if(counter==0){
          console.log(numbers[i] + " Asal Sayıdır...")
      }
        else{
            console.log(numbers[i] + " Asal Sayı Değildir...")
        }
    }
}
findPrime(2,4,7,16,23,41)

console.log("----Arkadaş Sayılar----")
//Arkadaş Sayılar
function friendNumber(number1,number2) {
    let total1=0,total2=0
    for (let i = 0; i < number1; i++) {
       if(number1%i==0)
        total1+=i
    }
    for (let i = 0; i < number2; i++) {
        if(number2%i==0)
         total2+=i
     }
     if(total1==number2 && total2==number1){
   console.log("Arkadaş Sayılardır...")
     }
     else{
         console.log("Arkadaş Sayı Değillerdir...")
     }
}

friendNumber(220,284)
friendNumber(180,240)

console.log("----Mükemmel Sayı----")
function listPerfectNumber() {
    for (let i = 1; i < 1000; i++) {
     let sum=0
     for(let j=1;j<i;j++){
         if(i%j==0){
             sum+=j
         }
     }   
        if(sum==i){
            console.log(i)
        }
    }
}
listPerfectNumber()

console.log("----Asal Sayılar----")
function listPrime() {
let counter=0
for(let i=2;i<1000;i++){
    for(let j=2;j<i;j++){
        if(i%j==0){
            counter=1
            break
        }
    }
    if(counter==0){
        console.log(i)
    }
    counter=0
}
}
listPrime()