import { ITodo, ITodoData } from '@/components/interfaces/todo.interface'
import Layout from '@/components/layout/Layout'
import TodoForm from '@/components/todos/todoForm/TodoForm'
import TodoList from '@/components/todos/todoList/TodoList'
import { v4 as uuidv4 } from 'uuid';
import React, { FC, useState } from 'react'
import TodoAction from '@/components/todos/todoAction/TodoAction';
// import styles from './Home.module.css';

const HomePage:FC = () => {
  // const todoList:ITodo[]=[]
    const [todoList, setTodoList]=useState<ITodo[]>([])
    // const t1: ITodo={
    //   id:uuidv4(),
    //   text:"aaaaaaaaaaaa",
    //   isCompleted:false,
    // }
    // const t2: ITodo={
    //   id:uuidv4(),
    //   text:"bbbbbbbbbbbbb",
    //   isCompleted:false,
    // }
    function addTodoHandler(text:string){
      const todo: ITodo={
      id:uuidv4(),
      text:text,
      isCompleted:false,
    }
      setTodoList([...todoList,todo])
    }
    function deleteTodoHandler(id:string){
      setTodoList(todoList.filter((el)=>el.id!==id));
    }
    function checkTodoHandler(id:string){
      setTodoList(todoList.map(item=>{return (item.id===id)?{...item,isCompleted: !item.isCompleted} : {...item}}))
    }
    function resetTodoshandler(){
      setTodoList([])
    }
    function clearCompletedTodos(){
      setTodoList(todoList.filter((item)=>!item.isCompleted))
    }
    const completedTodosCount:number=todoList.filter(item=>item.isCompleted).length
    
  return (<div className=''>
    <Layout title="Home Page">
        <TodoForm addTodo={addTodoHandler} />
        {!!todoList.length && <TodoAction resetTodos={resetTodoshandler} clearCompletedTodos={clearCompletedTodos} completedTodosExist={completedTodosCount} />}
        <TodoList todos={todoList} deleteTodo={deleteTodoHandler} checkTodo={checkTodoHandler} />
        {completedTodosCount>0 && <div className=' text-center my-3 font-semibold text-lg text-white'>You have completed {completedTodosCount} {completedTodosCount>1?"todos":"todo"}</div>}
    </Layout>
    </div>
  )
}

export default HomePage