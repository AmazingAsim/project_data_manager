import { EmailValidator } from "@angular/forms";

export interface User {
    username:string,
    password:string,
    email:EmailValidator,
    usertype:string
}
