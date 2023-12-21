"use client"
import GifGridItem  from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid:React.FC<IProps> = ({category}) => {
  const {data:images, loading}= useFetchGifs(category)
  return (
    <section className='flex flex-col gap-2 justify-center m-4'>
      <h3 className='text-start text-2xl m-2'>{category}</h3>
      { loading ? <p className='animate__flash'>Loading..</p> : null }
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 '>
          {
            images?.map((item:any) => (
              <GifGridItem key={item.id} {...item} />
            ))
          }
      </div>
    </section>
  )
}
type IProps={
  category:string
}

