import React from 'react'
import { useProduct } from '../context/ProductContext'
import RingLoader from "react-spinners/RingLoader";

const Loaders = ({width, height}) => {
    const {Loader} = useProduct();
  return (
    <div className={`w-[${width}] h-${height} flex justify-center items-center`}>
    <RingLoader
      color={"#FF380D"}
      loading={Loader}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  )
}

export default Loaders