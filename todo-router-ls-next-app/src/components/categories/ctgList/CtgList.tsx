import { ICategory } from '@/components/interfaces/category.interface'
import {FC} from 'react'
import CtgDetail from '../ctgDetail/CtgDetail'

type Props = {
  ctgList: ICategory[],
  deleteCtg: (id:string)=>void,

}

const CtgList:FC<Props> = ({ctgList, deleteCtg}) => {
  return (
    <div>
      { ctgList.length ?
        (ctgList.map((el,ind)=> <CtgDetail index={ind} deleteCtg={deleteCtg} key={el.id} ctg={el} /> )
        ):(
        <div className='text-center my-3 font-semibold text-lg text-white'>There are no categories</div>
        )}
    </div>
  )
}

export default CtgList