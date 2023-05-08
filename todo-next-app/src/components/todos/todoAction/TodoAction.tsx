import Button from '@/components/ui/Button';
import React, { FC } from 'react'
import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'
// import { IconBaseProps } from 'react-icons/lib';
// interface IconProps {
//   size?: number;
//   color?: string;
//   className?: string;
//   onClick?: () => void;
// }


type Props = { 
  completedTodosExist:number;
  resetTodos: ()=>void;
  clearCompletedTodos:()=>void;
}

const TodoAction:FC<Props> = ({resetTodos,clearCompletedTodos, completedTodosExist}) => {
    function aaaa(){
    console.log("hey")
  }
  return (
    <div className='flex justify-center items-center space-x-2 mb-4'>
    <Button title="Reset Todos" onClick={()=>resetTodos()}>
      {/* пропсы className и onClick не работают и я добавила этот интерфейс. Эти пропсы работают теперь но ошибка из за интерфейса. нужна помощь...  */}
      <RiRefreshLine size={20} />
    </Button>
    <Button title="Clear Completed Todos" onClick={()=>clearCompletedTodos()} disabled={!completedTodosExist}>
      <RiDeleteBin2Line size={20} color={completedTodosExist?"black":"gray"}  />
    </Button>
    </div>
  )
}

export default TodoAction