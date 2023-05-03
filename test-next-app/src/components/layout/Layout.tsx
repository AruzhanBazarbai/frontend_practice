import React, { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import dynamic from 'next/dynamic';

// это будет грузиться в клиентской части, так как мы ssr отключили
// иногда бывает так что в серверной части что то не можем грузить и надо на клиентской части
const DynamicFooter =dynamic(()=>import('./Footer'),{
  ssr:false,
})
// import {Titillium_Web} from 'next/font/google';

// const titillium = Titillium_Web({
//     weight : ['300','400','600','700'],
//     subsets : ['latin'],
//     variable : '--titillium',
// });

const Layout : FC<PropsWithChildren<IMeta>> = ({title,description, children}) => {
  return (
    <Meta title={title} description={description}>
        <Header  />
        <main>
            {children}
        </main>
        <DynamicFooter />
    </Meta>
  )
}

export default Layout