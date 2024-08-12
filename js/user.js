export class User {
    constructor(name, mail, password) {
        this.name = name;
        this.mail = mail;
        this.password = password;
    }

    amI(passwordSesion){
        if (this.password == passwordSesion) {
            return true
        }else{
            return false
        }
    }
}