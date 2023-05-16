import Image from 'next/image'
import { Inter } from 'next/font/google'
import TodoPage from '@/components/screens/todoPage/Todo'
import CategoryPage from '@/components/screens/ctgPage/Category'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <CategoryPage/>
  )
}