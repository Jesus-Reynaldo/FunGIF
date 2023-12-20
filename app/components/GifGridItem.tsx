import React from 'react'

export const GifGridItem:React.FC<IProps> = ({title,url,id}) => {
  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
interface IProps{
    title:string,
    url: string,
    id:string
}