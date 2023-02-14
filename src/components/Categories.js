import React from 'react'
import { Link } from 'react-router-dom';
import { useCategory } from '../context/CategoryContext'

const Categories = () => {

    const {categories} = useCategory();

  return (
    <div className='grid grid-cols-4'>
        {
            categories.map(item=>{
                return (
                    <Link to={item.category} className='flex flex-col justify-center items-center'>
                        <img src={item.img} />
                        <h3 className='text-xl'> {item.category} </h3>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Categories