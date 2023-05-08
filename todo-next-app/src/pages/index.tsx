import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/screens/home/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <HomePage/>
  )
}
