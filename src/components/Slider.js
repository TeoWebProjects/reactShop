import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`
const Image = styled.img`
  width: 100%;
`
const Slider = () => {
  return (
    <Container>
      <Image src="https://www.fylliana.gr/images/slider/artboard-2-copy-jpg.webp?v=366" />
    </Container>
  )
}

export default Slider
