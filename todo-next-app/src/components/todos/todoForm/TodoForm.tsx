import { ITodo } from '@/components/interfaces/todo.interface';
import React, { FC, FormEvent, useState } from 'react'

type Props={
  addTodo: (text:string)=>void;
}

// FormEvent - это тип, предоставляемый React, который представляет событие формы. 
// HTMLFormElement - это тип элемента формы, который указывает, что это событие связано с отправкой элемента <form>.
const TodoForm:FC<Props> = ({addTodo}) => {
    const [text,setText]=useState('');

    function onSubmithandler(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        if(text.length) addTodo(text)
        // else console.log("todo should not be empty!!")
        setText('')
    }

  return (
    <>
    <form className='flex items-center justify-center py-4  mt-4 mb-1' onSubmit={onSubmithandler}>
      {/* на телефоне ширина инпута 220пк а начиная с размера планшета 400 пкс */}
      {/* а если у пользователи ширина экрана маленький-например Gaalxy Fold- то применяем другой стиль именно для экрана где макс ширина 280px */}
        <input className='max-[281px]:w-[170px] w-[220px] md:w-[400px]  h-10 outline-none py-1 px-3 rounded-sm font-semibold focus:border-orange-300 focus:border' type="text" value={text} placeholder='Enter a new todo' onChange={(e)=>setText(e.target.value)} />
        <button type="submit" className=' bg-orange-300 py-2 px-6 -ml-1 rounded-r-sm hover:bg-orange-400 font-semibold max-[281px]:px-3' title="Submit">Submit</button>
    </form>
    </>
  )
}

export default TodoForm