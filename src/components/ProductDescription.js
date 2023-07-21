import React from 'react'

const ProductDescription = ({desc}) => {
  return (
    <div className='leading-7 space-y-5 my-10'>
        <p className='text-gray-600'> {desc.description} </p>
    </div>
  )
}

export default ProductDescription