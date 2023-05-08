import { ITodo, ITodoDataSingle } from '@/components/interfaces/todo.interface'
import React, { FC } from 'react'
import {RiTodoFill, RiDeleteBin2Line} from 'react-icons/ri'
import { FaCheck} from 'react-icons/fa'

type Props={
  todo:ITodo;
  deleteTodo:(id:string)=>void;
  checkTodo:(id:string)=>void;
}
const TodoDetail:FC<Props> = ({todo,deleteTodo,checkTodo}) => {
  return (
    <div className='flex justify-center items-center select-none'>

      {/* на телефоне ширина туду списка 370пкс а начиная с планшета она 600пикселей */}
      <div className={`flex p-2 m-2 ${!todo.isCompleted?"bg-white":" border border-gray-400 rounded-sm"}   w-[350px] md:w-[600px] rounded-sm`}>
        
        <RiTodoFill size={23} />

        <div className={`pl-2 font-medium w-full text-left ${todo.isCompleted?'text-gray-400':''}`}>{todo.text}</div>

        <button className={` mr-2 flex justify-end text-gray-400 ${todo.isCompleted?'':'hover:text-red-700'} hover:scale-125 transition-all`} onClick={()=>deleteTodo(todo.id)}>
          <RiDeleteBin2Line size={23} />
        </button>

        <button onClick={()=>checkTodo(todo.id)} className={`mr-2 flex justify-end text-gray-400 ${todo.isCompleted?'':'hover:text-green-700'} hover:scale-125 transition-all`}>
          {/* здесь я не объявила тот интерфейс с пропсами, но className и onClick работает но выходит ошибка все равно что их нету в Iconbaseprops. И убрала */}
          <FaCheck  size={23} />
        </button>
      </div>
    </div>
  )
}

export default TodoDetail