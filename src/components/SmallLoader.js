import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import { useApi } from '../context/ApiContext';

const SmallLoader = ({width, height}) => {
    const {SmallLoading} = useApi()
  return (
    <div className={`w-[${width}] h-[${height}] flex justify-center items-center `}>
    <MoonLoader
      color={"#FF380D"}
      loading={SmallLoading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  )
}

export default SmallLoader