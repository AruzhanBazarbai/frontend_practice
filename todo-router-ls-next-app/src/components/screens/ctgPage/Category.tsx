import CtgHeader from '@/components/categories/ctgHeader/CtgHeader';
import CtgList from '@/components/categories/ctgList/CtgList';
import { ICategory } from '@/components/interfaces/category.interface';
import Layout from '@/components/layout/Layout';
import TodoForm from '@/components/todos/todoForm/TodoForm';
import React, { FC, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


// type Props = {}

const CategoryPage:FC = () => {
  
    const [formVisible, setFormVisible]=useState(false)
    // const [todoList, setTodoList]=useState<ITodo[]>([])
    const [ctgList,setCtgList]=useState<ICategory[]>([])
    console.log(ctgList)
    
    // из  localStorage берем данные и сохраняем в ctgList
    useEffect(()=>{
      console.log(ctgList)
      setCtgList(JSON.parse(localStorage.getItem('todoData')  || '[]'));
      console.log(ctgList)
    },[])
    
    //  здесь только если меняется что то в ctgList записываем в localStorage
    // однако я заметила что этот useEffect вызывается хотя ctgList в первом useEffect не успел полностью обновиться, и в localStorage 
    // записывается пустой массив потому что ctgList еще не успел обновиться и является пустым
    // хотя этот useEffect должен был вызваться только если ctgList обновился полностью
    // не понимаю почему так себя ведет и поэтому здесь поставила проверку чтобы пустой массив не записывался но это тоже ошибочный подход,
    // потому что бывают случаи где мы удаляем все категории
    useEffect(()=>{
      console.log(ctgList)
      if(ctgList.length>0){
        localStorage.setItem('todoData',JSON.stringify(ctgList));
      }
      console.log(ctgList)
    },[ctgList])

    // чтобы с помощью булеан значения контролировали видимость формы
    function setFormVisibility(){
      setFormVisible(!formVisible)
    }
    // добавляем новую категорию и вызываем setCtgList после чего сtgList обновляется и вызывается второй useEffect
    function addCtgHandler(text:string){
      const ctg={
        id:uuidv4(),
        text:text,
        todoArr:[]
      }
      setCtgList([...ctgList,ctg])
    }
    function deleteCtgHandler(id:string){
      setCtgList(ctgList.filter((el)=>el.id!==id))
    }

    console.log(ctgList)

    return (<div className=''>
    <Layout title="Category Page">
      {/* показывает что мы на категори пэйдж и можем менять видимость формы для добавления новой категории */}
        <CtgHeader setFormVisibility={setFormVisibility} />
        {/* видно только если  formVisible тру*/}
        {formVisible && <TodoForm addTodo={addCtgHandler} placeholder="Enter a new category" />}
        {/* лист категории который возвращает лист категориДитэйл компонентов */}
        <CtgList ctgList={ctgList} deleteCtg={deleteCtgHandler} />
    </Layout>
    </div>
  )
}

export default CategoryPage
