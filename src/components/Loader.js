import React from "react"
import styled, { keyframes } from "styled-components"

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

// Create the keyframes
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
const Load = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #db163a;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`

const Loader = () => {
  return (
    <Container>
      <Load />
    </Container>
  )
}

export default Loader
