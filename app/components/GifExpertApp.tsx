'use client'
import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'
import { kavoon } from '../helpers/fonts'
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Rick and Morty'])
  return (
    <>
      <div className='w-full flex items-center gap-4 px-5 justify-between lg:justify-center'>
        <h2 className={`text-6xl text-orange-600  ${kavoon.className}`}>FunGIF</h2>
        <div className='w-2/3 lg:w-1/2 '>
          <AddCategory setCategories={setCategories}  />
        </div>
      </div>
      <hr />
      <ol>
        {
          categories.map((category) =>(
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </>
  )
}
