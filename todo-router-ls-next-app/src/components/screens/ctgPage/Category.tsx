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
    const [ctgList,setCtgList]=useState<ICategory[]>([])
    // этот стейт будет контролировать загрузка данных закончилась или нет
    const [loading, setLoading]=useState(true)
    
    // из  localStorage берем данные и сохраняем в ctgList
    // также меняем состояние loading на фолс
    useEffect(()=>{
      setCtgList(JSON.parse(localStorage.getItem('todoData')  || '[]'));
      setLoading(false)
    },[])
    // второй useEffect будет вызываться только тогда когда ctgList поменяется
    // сначала проверяем loading, если его значение поменялся то значит загрузка с localStorage завершена и ctgList успел поменяться
    // и в localStorage не будет записываться пустой массив
    // просто следить за асинхронными действиями стало сложно и поэтому добавила доп условие
    useEffect(()=>{
      // if(ctgList.length>0){
      if(!loading){
        localStorage.setItem('todoData',JSON.stringify(ctgList));
      }
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
