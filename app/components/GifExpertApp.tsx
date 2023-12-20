'use client'
import React, { useState } from 'react'
import { AddCategory } from './AddCategory'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch','Samurai X', 'Dragon Ball'])
  /*function handleAdd(){
    setCategories([...categories,'Nuevo Categoria'])
  }
  */
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />
      <ol>
        {
          categories.map((category) =>(
            <li key={category}>{category}</li>
          ))
        }
      </ol>
    </>
  )
}
