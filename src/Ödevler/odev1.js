//var,let,const değişken tanımlarken kullanılır.
let sayi1=10
sayi1="Engin Demiroğ"
let student={id:1,name:"Engin"} //obje tanımı
//console.log(student)

//default parametre sona yazılır.(puan=10)
function save(puan=10,ogrenci) {
    console.log(ogrenci.name+" : "+puan)
}
//save(20)
//save(student)
//save(student,50)
//save(undefined,student)
//Array
let students=["Engin Demiroğ","Halit Kalaycı","Engin Toprak","Büşra"]
//console.log(students)
//obje notasyonu
let students2=[student,{id:2,name:"Halit"},"Ankara",{city:"İstanbul"}]
//console.log(students2)

//rest=Geriye Kalanlar C#=>params  Java=>varArgs
let showProducts=function (id,...products) {
   console.log(id)
   console.log(products[0]) 
}
//console.log(typeof showProducts)//type tip türü 
//showProducts(10,"Elma","Armut","Karpuz")

//spread(Ayrıştırmak) Bir array'i parametre gibi virgülle ayırmayı sağlar
let points=[1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring - Elimizdeki arrayin değerlerini değişkenlere atama 
let populations=[10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryHigh,maximum]]= populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
  console.log(small1)  
}
someFunction(populations)

let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name) 

//oop
class Customer{
  constructor(id,customerNumber){
    this.id = id;
    this.customerNumber=customerNumber;
  }
}
let customer=new Customer(1,"12345");
//prototyping-bir nesneye başka bir özellik ekleme
customer.name="Murat Kurtboğan" //instance ye yapıla prototyping
console.log(customer.name)
Customer.bisey="Bisey" //class'a yapılan prototyping
console.log(Customer.bisey)
console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
 constructor(firstName,id,customerNumber){
 super(id,customerNumber)
 this.firstName=firstName
 }
}
class CorporateCustomer extends Customer{
   constructor(companyName,id,customerNumber){
   super(id,customerNumber)
   this.companyName=companyName
 }
}