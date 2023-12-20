'use client'

import { useState } from "react"

export const AddCategory = () => { 
  const [inputValue, setinputValue] = useState('Search')
  function handleInputChange(e:any){
    setinputValue(e.target.value)
  }
  function handleSubmit(e:any){
    e.preventDefault()
    console.log('Submit hecho!!!')

  }
  return (
    <form onSubmit={handleSubmit} className="w-full p-4">
      <h2>{inputValue}</h2>
        <input 
          type="text" 
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          value={inputValue}
          onChange={handleInputChange}
          
      />
    </form>
  )
}
