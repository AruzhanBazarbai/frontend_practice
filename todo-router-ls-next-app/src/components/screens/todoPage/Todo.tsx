import { ITodo, ITodoData } from '@/components/interfaces/todo.interface'
import Layout from '@/components/layout/Layout'
import TodoForm from '@/components/todos/todoForm/TodoForm'
import TodoList from '@/components/todos/todoList/TodoList'
import { v4 as uuidv4 } from 'uuid';
import React, { FC, useEffect, useState } from 'react'
import TodoAction from '@/components/todos/todoAction/TodoAction';
import { useRouter } from 'next/router';
import { ICategory } from '@/components/interfaces/category.interface';
// import styles from './Home.module.css';

const TodoPage:FC = () => {
  const router=useRouter();
  const ctgId:number=Number(router.query.id) || 0;
  // console.log(ctgId);
  const [ctgList,setCtgList]=useState<ICategory[]>([])
  const [todoList, setTodoList]=useState<ITodo[]>([])

  // здесь я хотела синхронизировать данные между TodoPage и CategoryPage и поэтому решила в localStorage все сохранить в одном месте
  // и синхронизировать их между собой
  // то есть сначала храню ctgList туда и здесь загружаю его и в элемент todoArr определенной категории сохраняю todoList отсюда и тем самым
  // все данные будут на одном месте
  // однако проблемы с localStorage и  useEffect
  // почему то в localStorage записывается пустой массив хотя там были данные
    useEffect(()=>{
      // создала отдельный tempCtgList, потому что ctgList может не успеть обновиться до if блока
      const tempCtgList:ICategory[]=JSON.parse(localStorage.getItem('todoData') || '[]')
      // setCtgList(JSON.parse(localStorage.getItem('todoData')  || '[]'));
      setCtgList(tempCtgList);

      // здесь используем значение временного массива и todoList ререндерим только если в tempCtgList что то есть
      if(tempCtgList.length>0){
        const todos = tempCtgList[ctgId]?.todoArr || [];
        setTodoList(todos)
      }
      console.log(ctgList);
    },[ctgId])

    // после полного обновления ctgList вызывается этот useEffect и только если в ctgList с индексом ctgId меняем в localStorage что то
    // просто до этого были случаи где пустой массив записывался в localstorage и ctgList был пустым и не успевал обновиться и второй useEffect тоже вызывалмя хотя ctgList не успел оьновиться еще
    useEffect(()=>{
      if(ctgList[ctgId]){
        localStorage.setItem('todoData',JSON.stringify(ctgList))
      }
    },[ctgList])

    function addTodoHandler(text:string){
      const todo: ITodo={
      id:uuidv4(),
      text:text,
      isCompleted:false,
    }
    // меняем тудулист и CtgList чтобы потом вызвался второй useEffect и записывал в localStorage
      setTodoList([...todoList,todo])
      // записываем все в временный массив потому что todoList не успеет обновиться до этого момента
      const updatedCtgList=ctgList.map((item,ind)=>{return (ind===ctgId) ? {...item,todoArr:[...item.todoArr,todo]} : {...item}})
      setCtgList(updatedCtgList)
    }
    // в дальнейших функциях логика туду и записи в localStorage. При изменении в todoList меняем и в CtgList сразу же чтобы в localStorage записывать актуальные данные
    function deleteTodoHandler(id:string){
      const updatedTodoList=todoList.filter((el)=>el.id!==id)
      setTodoList(updatedTodoList);
      const updatedCtgList=ctgList.map((item,ind)=>{return (ind===ctgId) ? {...item,todoArr:updatedTodoList} : {...item}})
      setCtgList(updatedCtgList)
    }

    function checkTodoHandler(id:string){
      const updatedTodoList=todoList.map(item=>{return (item.id===id)?{...item,isCompleted: !item.isCompleted} : {...item}})
      setTodoList(updatedTodoList)
      const updatedCtgList=ctgList.map((item,ind)=>{return (ind===ctgId) ? {...item,todoArr:updatedTodoList} : {...item}})
      setCtgList(updatedCtgList)
    }

    function resetTodoshandler(){
      setTodoList([])
      const updatedCtgList=ctgList.map((item,ind)=>{return (ind===ctgId) ? {...item,todoArr:[]} : {...item}})
      setCtgList(updatedCtgList)
    }

    function clearCompletedTodos(){
      const updatedTodoList=todoList.filter((item)=>!item.isCompleted)
      setTodoList(updatedTodoList)
      const updatedCtgList=ctgList.map((item,ind)=>{return (ind===ctgId) ? {...item,todoArr:updatedTodoList} : {...item}})
      setCtgList(updatedCtgList)
    }

    const completedTodosCount:number=todoList.filter(item=>item.isCompleted).length
    
  return (<div className=''>
    <Layout title="ToDo Page">
      {/* TodoForm сделала специально так чтобы можно было переиспользовать и передать текст который будет отображаться в placeholder */}
        <TodoForm addTodo={addTodoHandler} placeholder="Enter a new todo" />
        {!!todoList.length && <TodoAction resetTodos={resetTodoshandler} clearCompletedTodos={clearCompletedTodos} completedTodosExist={completedTodosCount} />}
        <TodoList todos={todoList} deleteTodo={deleteTodoHandler} checkTodo={checkTodoHandler} />
        {completedTodosCount>0 && <div className=' text-center my-3 font-semibold text-lg text-white'>You have completed {completedTodosCount} {completedTodosCount>1?"todos":"todo"}</div>}
    </Layout>
    </div>
  )
}

export default TodoPage