import { ICategory } from '@/components/interfaces/category.interface'
import React, { FC } from 'react'
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Link from 'next/link';

type Props = {
  ctg: ICategory;
  index:number;
  deleteCtg: (id:string)=>void;
}

const CtgDetail:FC<Props> = ({ctg, deleteCtg,index}) => {
  return (
    <div className='flex items-center justify-center m-6 select-none'>
      <div className='bg-white w-[350px] p-2 flex'>
        <RiTodoFill size={23} />
        <div className='pl-3 w-full'>{ctg.text}</div>
        <button className={` mr-2 flex justify-end text-gray-400 hover:text-red-700 hover:scale-125 transition-all`} onClick={()=>deleteCtg(ctg.id)}>
          <RiDeleteBin2Line size={23} />
        </button>
        <Link href={`/categories/${index}`}>
        <button className={` mr-2 flex justify-end text-gray-400 hover:text-blue-700 hover:scale-125 transition-all`} >
          <AiOutlineArrowRight size={23} />
        </button>
        </Link>
      </div>
    </div>
  )
}

export default CtgDetail