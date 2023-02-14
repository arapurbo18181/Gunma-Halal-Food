import React from 'react'
import { useCategory } from '../context/CategoryContext'

const ProductsOfSubCategory = () => {

    const {ProductsFromCategory} = useCategory();
    console.log(ProductsFromCategory);

  return (
    <div classname="grid grid-cols-4 w-full">
    {/* //! Sub-category Products */}
        {
            ProductsFromCategory.map(item=>{
                return (
                    <div classname="">
                        <img classname="h-[100px]" src={item.img} alt="" />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductsOfSubCategory