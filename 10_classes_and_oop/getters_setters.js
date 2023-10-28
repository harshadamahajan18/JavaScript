class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}harsha`
    }

    set password(value){
        this._password = value
    }
}

const harsha = new User("h@harsha.ai", "abc")
console.log(harsha.password);
console.log(harsha.email);