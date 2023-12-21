import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid:React.FC<IProps> = ({category}) => {
  const [datas, setDatas] = useState([])
  const getGifs = async() => {
    try{
      const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=h9B9xq1hCyQF72Og60OdLjfsKJLrHS4n&q=${category}`)
      const {data} = await res.json();
      const gifts =data.map((img:any) =>{
        return{
          id:img.id,
          title:img.title,
          url:img.images.downsized_medium.url
        }
      })
      if(gifts.length >0){
        setDatas(gifts)
      }
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getGifs()
  },[])
  return (
    <section className='flex flex-col gap-2 justify-center m-4'>
      <h3 className='text-center text-2xl m-2'>{category}</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 '>
          {
            datas.map(item => (
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

