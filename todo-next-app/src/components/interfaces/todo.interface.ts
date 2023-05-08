export interface ITodo{
    id:string
    text:string
    isCompleted:boolean
}
export interface ITodoData{
    todos:ITodo[]
}
export interface ITodoDataSingle{
    todo:ITodo
}