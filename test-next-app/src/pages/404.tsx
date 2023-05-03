import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

type Props = {}

const NotFoundPage:NextPage = (props: Props) => {
  return (
    <Layout title="Not Found">

      <div style={{'textAlign':'center'}}>
      <Image src='/404.png' alt='' width={750} height={433} />
      </div>
    </Layout>
    
  )
}

export default NotFoundPage