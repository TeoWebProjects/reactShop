import React from "react"
import MansonaryCategories from "../components/MansonaryCategories"
import Services from "../components/Services"
import Slider from "../components/Slider"

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <MansonaryCategories />
    </div>
  )
}

export default Home
