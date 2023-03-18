import React from 'react'
import { useProduct } from '../context/ProductContext'
import RingLoader from "react-spinners/RingLoader";

const About = () => {
  const {progress, setProgress} = useProduct()
  return (
    <div>About</div>
  )
}

export default About