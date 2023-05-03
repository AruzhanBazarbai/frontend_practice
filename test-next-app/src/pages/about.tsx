import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import React from 'react'

type Props = {}

const AboutPage:NextPage = (props: Props) => {
  return (
    <Layout title="about our company">About Page</Layout>
  )
}

export default AboutPage