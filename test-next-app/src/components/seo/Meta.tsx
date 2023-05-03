import React, { FC, PropsWithChildren } from 'react'
import { IMeta } from './meta.interface'
import Head from 'next/head'

const getTitle= (title:string)=>`${title} | RED Cars`
//    входные данные, через интерфейс описываем
const Meta:FC<PropsWithChildren<IMeta>> = ({title, description, children}) => {
  return <>
    <Head>
        <title>{getTitle(title)}</title>
        {description ? (
            <>
            {/* seo information */}
            <meta name='description' content={description} />
            <meta name='og:title' content={getTitle(title)} />
            <meta name='og:description' content={description} />
            </>
        ):(
            <>
            <meta name='robots' content='noindex, nofollow' />
            </>
        )}
    </Head>
    {children}
    </>
  
}

export default Meta