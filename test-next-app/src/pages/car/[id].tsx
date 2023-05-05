import CarDetail from '@/components/screens/car-detail/CarDetail'
import { ICarData, ICarDataSingle } from '@/interfaces/car.interface'
import { CarService } from '@/services/car.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

type Props = {}

const CarDetailPage:NextPage<ICarDataSingle> = ({car}) => {
    //    /car/1  /car/[id] 
    // const {asPath,pathname} =useRouter()
    
    // const {query}=useRouter() //query.id=1

    // для перенаправления. replace - полностью удаляет историю и заменяет, а push- перенаправляет без перезагрузки
//     const {push, replace}=useRouter() 
//     return (<>
//     <div >CarPage</div>
//     <button onClick={()=>push('/')}>Go Home</button>
//     <button onClick={()=>replace('/')}>Go Home</button>
//   </>)
    
    // console.log(asPath,pathname)
  return (
    <CarDetail car={car} />
    )
}
interface Params extends ParsedUrlQuery{
  id:string;
}
export const getStaticPaths: GetStaticPaths<Params>=async ()=>{

  const cars= await CarService.getAll()
  
  return {
    paths: cars.map(car=>({
      params:{
        id:car.id.toString()
      }
    })),
    fallback:'blocking'
  }
}
export const getStaticProps: GetStaticProps<ICarDataSingle>=async ({params})=>{
  const car= await CarService.getById(String(params?.id))

  return{
    props:{car},
    revalidate:60,
  }
}

export default CarDetailPage