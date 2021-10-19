console.log("merhaba kodlama.io")

//değişken tanımlama
 let dolarDun=9.20
 //dolarDun="Ankara"
 let dolarBugun=9.30
//js type safe(tip güvenli) değildir.
 {
     //burada var yazılsaydı çalışmazdı.
     let dolarDun=9.10
 }
 console.log(dolarDun)

 //cons:sabit
 const euroDun=11.2
 //const ile bir değer atanırsa artık başka değer atanamaz.çünkü sabittir.
 console.log(euroDun)

 //Diziler(Array):birden fazla veriyi aynı değişkende tutmak için kullanılır.
 //camelCasing
 //PascalCasing
 let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredi","Özel KOnut Kredisi"]

 console.log("<ul>")
 for(let i=0;i<konutKredileri.length;i++){
console.log("<li>"+konutKredileri[i]+"</li>")
 }
 console.log("</ul>")
 console.log(konutKredileri)
 console.log("deneme")