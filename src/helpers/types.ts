export interface IUser{
    id:number
    name:string
    surname:string
    age:string
    salary:string
    posts:IPost[]
}
export interface IPost{
    id:number
    text:string
}

export type InputUser = Omit<IUser, 'posts'|'id'>