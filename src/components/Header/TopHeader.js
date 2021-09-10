import React from "react"
import styled from "styled-components"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const Container = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  margin-left: auto;
  margin-right: auto;
  background: #db163a;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  align-self: center;
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`

const Right = styled.div`
  align-self: center;
`

const Social = styled.div`
  display: flex;
  gap: 1rem;
`

const Facebook = styled.div``

const Instagram = styled.div``

const TopHeader = () => {
  return (
    <Container>
      <Left>T: ‎2541093813 - 2541093773 | dasteridis@gmail.com</Left>
      <Right>
        <Social>
          <Facebook>
            <FaFacebook />
          </Facebook>
          <Instagram>
            <FaInstagram />
          </Instagram>
        </Social>
      </Right>
    </Container>
  )
}

export default TopHeader
