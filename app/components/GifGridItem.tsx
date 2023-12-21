"use client";
import React from 'react'

const GifGridItem:React.FC<IProps> = ({title,url,id}) => {
  return (
    <div className='flex flex-col max-w-sm p-4 border border-gray-300 rounded-2xl shadow-sky-500 shadow-md h-[300px] justify-center cursor-pointer hover:scale-105 hover:shadow-rose-600' >
      <img src={url} alt={title} className='h-2/3' />
      <p className='h-1/3 p-4 text-center text-slate-800 '>{title}</p>
    </div>
  )
}
interface IProps{
    title:string,
    url: string,
    id:string
}
export default GifGridItem