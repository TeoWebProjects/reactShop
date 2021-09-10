import { React, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaShoppingBasket } from "react-icons/fa"
import { BsList } from "react-icons/bs"
import MobileMenu from "../MobileMenu"

const Container = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
  a {
    color: black;
    text-decoration: none;
  }
  a:active {
    color: black;
  }
`
const Logo = styled.div`
  font-size: 3rem;
  font-family: "Merienda", cursive;
  font-weight: bold;
`
const Span = styled.span`
  color: #db163a;
`

const Search = styled.input`
  height: 30px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.09);
  padding: 1rem;
  width: 50%;
`

const Right = styled.div`
  display: flex;
  gap: 1rem;
  align-self: center;
`
const Login = styled.div`
  align-self: center;
`

const Cart = styled.div`
  display: flex;
  gap: 0.3rem;
`
const Text = styled.div`
  align-self: center;
`

const CartIcon = styled.div`
  font-size: 1.5rem;
  color: #827a7a;
  align-self: center;
  margin-left: 0.4rem;
  position: relative;
`

const CountCart = styled.div`
  position: absolute;
  font-size: 0.8rem;
  color: white;
  width: 15px;
  height: 15px;
  text-align: center;
  border-radius: 50%;
  background: #db163a;
  top: -5px;
  right: -3px;
`

const Mid = styled.div`
  font-size: 2rem;
  align-self: center;
  cursor: pointer;
`
const MainHeader = () => {
  const [width, setWidth] = useState(0)
  const [vis, setVis] = useState("none")
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
  }, [width])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWidth(width)
  }
  return (
    <Container>
      <MobileMenu visibility={vis} closeMenu={() => setVis("none")} />
      {width < 900 ? (
        <Mid>
          <BsList onClick={() => setVis("vis")} />
        </Mid>
      ) : null}

      <Link to="/">
        <Logo>
          MyShop<Span>.</Span>
        </Logo>
      </Link>
      {width > 900 ? <Search type="search" placeholder="Αναζήτηση…" /> : null}
      <Right>
        {width > 900 ? (
          <>
            <Login>ΣΥΝΔΕΣΗ</Login>
            <Cart>
              <Text>ΚΑΛΑΘΙ / 0€</Text>
              <Link to="/cart">
                <CartIcon>
                  <FaShoppingBasket />
                  {cartItems.length > 0 ? <CountCart>{cartItems.length}</CountCart> : null}
                </CartIcon>
              </Link>
            </Cart>
          </>
        ) : (
          <Cart>
            <Link to="/cart">
              <CartIcon>
                <FaShoppingBasket />
                {cartItems.length > 0 ? <CountCart>{cartItems.length}</CountCart> : null}
              </CartIcon>
            </Link>
          </Cart>
        )}
      </Right>
    </Container>
  )
}

export default MainHeader
