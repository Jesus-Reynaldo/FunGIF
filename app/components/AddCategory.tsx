'use client'

import { useState } from "react"
import PropTypes from 'prop-types'
export const AddCategory : React.FC<IProps> = ({setCategories}) => { 
  const [inputValue, setinputValue] = useState('')
  function handleInputChange(e:any){
    setinputValue(e.target.value)
  }
  function handleSubmit(e:any){
    e.preventDefault()
    if(inputValue.trim().length>2){
      setCategories((cats:string[])=>[...cats, inputValue])
      setinputValue('')
    }

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

interface IProps{
  setCategories:any
}
AddCategory.propTypes = {
  setCategories:PropTypes.func.isRequired
}