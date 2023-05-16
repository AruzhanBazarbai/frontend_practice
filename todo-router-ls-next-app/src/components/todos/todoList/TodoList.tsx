import { FC } from "react"
import TodoDetail from "../todoDetail/TodoDetail"
import { ITodo, ITodoData } from "@/components/interfaces/todo.interface"
// определяем тип Props, который включает text - todos, addTodo. A функция-компонент TodoList принимает пропсы типа Props
type Props={
  todos: ITodo[];
  deleteTodo: (id:string)=>void;
  checkTodo:(id:string)=>void;

}

const TodoList:FC<Props> = ({todos,deleteTodo,checkTodo}) => {
  return (
    <div>
    {todos.length ? (
        todos.map((item:ITodo,ind:number) => <TodoDetail todo={item} key={item.id} deleteTodo={deleteTodo} checkTodo={checkTodo} />)
    ):(
        <div className='text-center my-3 font-semibold text-lg text-white'>There is no todo</div>
    )}
    
    </div>
  )
}

export default TodoList