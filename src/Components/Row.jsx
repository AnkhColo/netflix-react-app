import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    console.log(movies)

  return (
    <div>
      <h2 className='text-white md:text-xl p-4 font-bold'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item, id) => (
                <Movie key={id} item={item}/>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Row
