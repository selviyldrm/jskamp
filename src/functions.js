 //fonksiyon bir kere yazılır.istediğimiz yerde kullanılır.
 //4 farklı sayfa olarak düşün. 
 //console.log("Sepete Eklendi...")
 // console.log("Sepete Eklendi...")
 //console.log("Sepete Eklendi...")
// console.log("Sepete Eklendi...")
function addToCart(productName ="Elma",quantity) {
    console.log("Sepete Eklendi:" + "Ürün:" +productName + " Adet: " + quantity)
}
//addToCart() //undefined:Tanımı olmayan olarak düşünebiliriz.(Ben aslında yokum)
//addToCart("Elma")
addToCart("Yumurta",10)
addToCart(10) //Parametre sıralaması önemlidir.
// bunu yazarsak  productName ="Elma" 2. parametre olarak
// yazarsak sonuç düzgün şekilde verilir.
//addToCart("Karpuz")

//​Aroow functions
let sayHello=()=>{
console.log("Hello World!")
}
sayHello()

//bir fonksiyonu değişkene atayabiliriz.
let sayHello2=function () {
    console.log("Hello World 2!") 
}
sayHello2()
//bu fonksiyonu böyle yazarsak hangi parametre neydi diye sıkıntı oluşabilir.
function addToCart2(productName,quantity,unitPrice) {
    
}
addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)
//obje kullanımı
let product1={productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product) {
    console.log("Ürün: " +product1.productName)
    console.log("Adet: " +product1.quantity)
    console.log("Fiyat: " +product1.unitPrice)
}

addToCart3(product1)
//değer ve referans tip 
//eğer sayisal ise değer tiptir.
//veri objeyse referans tiptir.
//bellekte 2 alan var stack ve heap
//sayısal bir veri tanımlarsak bu sadece stackte gerçekleşir.

//referans tip örneği -Burada bellek adresi önemlidir.
let product2={productName:"Elma",unitPrice:10,quantity:5} //101 belllek adresi
let product3={productName:"Elma",unitPrice:10,quantity:5}//102
product2=product3 //101 bellek adresi 102 oluyor ve atık product2 de product3 ün değerlerini tutuyor.
product2.productName="Karpuz"//product3te ki elma karpuz oluyor
console.log(product3.productName)//sonuç:Karpuz

//değer tip örneği
let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)

function addToCart4(x) {
    console.log(products)
}
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]
addToCart4(products)

//rest operatörü ...(üç nokta) başka bir parametre varsa rest sona yazılır add(bisey,...numbers)
function add(...numbers) {
    let total=0;
  for (let i = 0; i < numbers.length; i++) {
     // console.log(numbers[i])
      total=total+numbers[i]
  }
  console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)
let numbers=[30,10,500,600,120]
console.log(...numbers)
console.log(Math.max(...numbers)) //en büyük değeri verir

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
{name:"İç Anadolu",population:"20M"} ,
{name:"Marmara",population:"30M"},
{name:"Karadeniz",population:"10M"},
[
    ["Ankara","Konya"],
    ["İstanbul","Bursa"]
    ["Sinop","Trabzon"]
]
]
console.log(icAnadolu)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehirleri)

let newproductName,newunitPrice,newquantity
({productName:newproductName,unitPrice:newunitPrice,quantity:newquantity}={productName:"Elma",unitPrice:10,quantity:5})

console.log("Ürünadı:"+newproductName)
console.log("Fiyat:"+newunitPrice)
console.log("Adet"+newquantity)