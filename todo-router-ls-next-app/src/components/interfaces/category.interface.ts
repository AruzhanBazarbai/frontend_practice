import { ITodo } from "./todo.interface";

export interface ICategory{
    id:string;
    text:string;
    todoArr: ITodo[];
}
export interface ICategoryData{
    ctgs:ICategory[]
}