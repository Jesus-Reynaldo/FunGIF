"use client"
import React, { useEffect, useState } from 'react'
import GifGridItem  from './GifGridItem'
import { getGifs } from '../helpers/getGifs'


export const GifGrid:React.FC<IProps> = ({category}) => {
  const [datas, setDatas] = useState([])

  useEffect(()=>{
    getGifs(category)
      .then(imgs => setDatas( imgs ))
  },[category])
  return (
    <section className='flex flex-col gap-2 justify-center m-4'>
      <h3 className='text-center text-2xl m-2'>{category}</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 '>
          {
            datas.map((item:any) => (
              <GifGridItem key={item.id} {...item} />
            ))
          }
      </div>
    </section>
  )
}
interface IProps{
  category:string
}

