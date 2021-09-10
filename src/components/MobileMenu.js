import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const XButton = styled.div`
  width: 23px;
  height: 23px;
  background: #db163a;
  font-size: 1.2rem;
  border-radius: 50%;
  text-align: center;
  font-weight: 500;
  color: white;
  cursor: pointer;
  line-height: 1.2;
  position: relative;
  left: calc(300px - 23px - 5px);
  top: 5px;

  &:hover {
    background: #ff002f;
  }
`
const Menu = styled.div`
  width: 300px;
  height: 100%;
  background: white;
`

const Search = styled.input`
  height: 30px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.09);
  padding: 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 1rem;
`
const Categories = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  list-style-type: none;
  gap: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
`
const Category = styled.li`
  align-self: center;
`
const LinkWrapper = styled.div`
  align-self: center;
`
const MobileMenu = ({ visibility, closeMenu }) => {
  return (
    <>
      {visibility != "none" ? (
        <Container>
          <Menu>
            <XButton onClick={closeMenu}>X</XButton>
            <Wrapper>
              <Search type="search" placeholder="Αναζήτηση…" />
              <Categories>
                <LinkWrapper>
                  <Link to="/products/7" onClick={closeMenu}>
                    <Category>ΚΑΝΑΠΕΔΕΣ</Category>
                  </Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link to="/products/171" onClick={closeMenu}>
                    <Category>ΓΡΑΦΕΙΑ</Category>
                  </Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link to="/products/22" onClick={closeMenu}>
                    <Category>ΝΤΟΥΛΑΠΕΣ</Category>
                  </Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link to="/products/156" onClick={closeMenu}>
                    <Category>ΚΡΕΒΑΤΙΑ</Category>
                  </Link>
                </LinkWrapper>
                <LinkWrapper>
                  <Link to="/products/12" onClick={closeMenu}>
                    <Category>ΠΟΛΥΘΡΟΝΕΣ</Category>
                  </Link>
                </LinkWrapper>
              </Categories>
            </Wrapper>
          </Menu>
        </Container>
      ) : null}
    </>
  )
}

export default MobileMenu
