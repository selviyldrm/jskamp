export default class UserService{
    constructor(loggerService){
        this.users=[]
        this.loggerService=loggerService
    }
  add(user){
      //console.log("kullanıcılar eklendi")
     this.users.push(user)
     this.loggerService.log(user)
  }
  list(){
      return this.users
     // console.log("kullanıcılar listelendi")
  }
  getById(id){
    return this.users.find(u=>u.id==id)  
    //console.log("kullanıcı detayı  getirildi")
  }
}