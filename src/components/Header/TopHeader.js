import React from "react"
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

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
  display: flex;
  gap: 1rem;
`

const Phone = styled.div`
  align-self: center;
  display: flex;
  gap: 0.3rem;
`
const PhoneText = styled.div`
  align-self: center;
`
const Email = styled.div`
  align-self: center;
  display: flex;
  gap: 0.3rem;
`
const EmailText = styled.div`
  align-self: center;
`
const Right = styled.div`
  align-self: center;
`

const Social = styled.div`
  display: flex;
  gap: 1rem;
`

const Facebook = styled.div`
  font-size: 1.3rem;
`

const Instagram = styled.div`
  font-size: 1.3rem;
`

const TopHeader = () => {
  return (
    <Container>
      <Left>
        <Phone>
          <FaPhoneAlt />
          <PhoneText>2541057416 - 2541024789</PhoneText>
        </Phone>
        <Email>
          <MdEmail />
          <EmailText>teobeat@gmail.com</EmailText>
        </Email>
      </Left>
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
