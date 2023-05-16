import React, { FC, PropsWithChildren } from 'react'

type Props = {
  title?:string;
  onClick:()=>void;
  disabled?:boolean;
}

const Button:FC<PropsWithChildren<Props>> = ({children, onClick, title,disabled=false}) => {
  return (
    <button disabled={disabled} title={title} className=' bg-orange-300 py-2 px-3 rounded-md hover:bg-orange-400 ' onClick={()=>onClick()}>
      {children}
    </button>
  )
}

export default Button