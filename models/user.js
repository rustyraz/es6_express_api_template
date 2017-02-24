export default class User {
  constructor(name,email){
    this.name = name;
    this.email = email
  }

  //get name
  getName(){
    return this.name;
  }

  getEmail(){
    return this.email;
  }

}
