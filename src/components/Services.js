import React from "react"
import styled from "styled-components"
import { FaDoorOpen, FaTruckMoving } from "react-icons/fa"
import { GiCash } from "react-icons/gi"

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  background: #fafafa;
  padding: 1rem;
  margin-top: -10px;
`
const Right = styled.div`
  display: flex;
  gap: 1rem;
`
const Mid = styled.div`
  display: flex;
  gap: 1rem;
`
const Left = styled.div`
  display: flex;
  gap: 1rem;
`
const Icon = styled.div`
  font-size: 3.5rem;
  color: #db163a;
  @media (max-width: 990px) {
    font-size: 2rem;
  }
  @media (max-width: 650px) {
    font-size: 1.3rem;
  }
`
const Text = styled.div`
  font-size: 1.5rem;
  align-self: center;
  font-weight: 500;
  @media (max-width: 1300px) {
    font-size: 1rem;
  }
  @media (max-width: 990px) {
    font-size: 0.75rem;
  }
  @media (max-width: 650px) {
    font-size: 0.5rem;
  }
`
const Services = () => {
  return (
    <Container>
      <Right>
        <Icon>
          <FaDoorOpen />
        </Icon>
        <Text>ΠΑΡΑΔΟΣΗ ΣΤΗΝ ΠΟΡΤΑ</Text>
      </Right>
      <Mid>
        <Icon>
          <FaTruckMoving />
        </Icon>
        <Text>ΔΩΡΕΑΝ ΑΣΦΑΛΗ ΑΠΟΣΤΟΛΗ</Text>
      </Mid>
      <Left>
        <Icon>
          <GiCash />
        </Icon>
        <Text>ΠΛΗΡΩΜΗ ΜΕ ΑΝΤΙΚΑΤΑΒΟΛΗ</Text>
      </Left>
    </Container>
  )
}

export default Services
