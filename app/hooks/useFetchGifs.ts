'use client'
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category:string ):IoFetch => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                
                setState({ data:imgs , loading:false})
            })

    }, [category])

    return state // { data:[], loading: true };
}

interface IoFetch{
    data: Datas[] | [],
    loading: boolean
}

interface Datas{
    id:string,
    title:string,
    url:string
}