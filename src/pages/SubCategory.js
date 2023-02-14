import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useCategory } from '../context/CategoryContext'

const SubCategory = () => {

    const {ItemCategory, setProductsFromCategory} = useCategory();

    const params = useParams();

  return (
    <section>
    {/* //! Header */}
        <h2>{params.id}</h2>
        <div className='grid grid-cols-4'>
        {/* //! Sub-categories */}
          {
            ItemCategory.map(item=>{
              return(
                <Link to={`/product-category/${params.id}/${item.cat}`} onClick={()=>setProductsFromCategory(item.product)} >
                  <img src={item.img} />
                  {item.cat}
                </Link>
              )
            })
          }
        </div>
    </section>
  )
}

export default SubCategory