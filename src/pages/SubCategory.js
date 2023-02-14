import React from 'react'
import { useParams } from 'react-router-dom';
import { useCategory } from '../context/CategoryContext'

const SubCategory = () => {

    const {ItemCategory} = useCategory();
    console.log(ItemCategory)

    const params = useParams()
    console.log(params)

  return (
    <section>
        <h2>{params.id}</h2>
        <div className='grid grid-cols-4'>
          {
            ItemCategory.map(item=>{
              return(
                <div>
                  <img src={item.img} />
                  {item.cat}
                </div>
              )
            })
          }
        </div>
    </section>
  )
}

export default SubCategory