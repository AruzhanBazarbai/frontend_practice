import React, { FC, PropsWithChildren } from 'react'
import { IMeta } from '../seo/meta.interface'
import Meta from '../seo/Meta'
import Header from './header/Header'
const Layout:FC<PropsWithChildren<IMeta>> = ({title,description,children}) => {
  return (
    <>
    <Meta title={title} description={description} >
        <Header />
        <main>
            {children}
        </main>
    </Meta>
    </>
  )
}

export default Layout