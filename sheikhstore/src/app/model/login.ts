

export interface Login {

    email:string,
    password:any
}

export interface LoginResult{
    token?:any,
    validlogin?:boolean,
    email?:string,
    username?:string
    res?:string
}

