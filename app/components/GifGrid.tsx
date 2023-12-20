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
    <div>
      <h3>{category}</h3>
        {
          datas.map(item => (
            <GifGridItem key={item.id} {...item} />
          ))
        }
    </div>
  )
}
interface IProps{
  category:string
}

