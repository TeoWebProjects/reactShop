import React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../actions/cartActions"
import { Link } from "react-router-dom"
const Container = styled.div`
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  @media (max-width: 1260px) {
    width: 80%;
  }

  @media (max-width: 960px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

const Cart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 1rem;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 2;
  border-radius: 25px;
  padding: 1rem;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ProductCart = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  border-bottom: 2px solid #827a7a;
  padding-bottom: 1rem;
`

const ProductImage = styled.img`
  align-self: center;
  width: 20%;
  height: auto;
`

const ProductName = styled.div`
  align-self: center;
  font-weight: 500;
  width: 400px;
  @media (max-width: 1260px) {
    font-size: 0.8rem;
  }
`

const ProductPrice = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const RegularPrice = styled.div`
  align-self: flex-end;
  text-decoration: line-through;
  @media (max-width: 1260px) {
    font-size: 0.6rem;
  }
`

const DiscountPrice = styled.div`
  align-self: center;
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 1260px) {
    font-size: 1rem;
  }
`

const Right = styled.div`
  flex: 1;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 2rem;
  margin-top: 2rem;
  align-self: flex-start;
  padding: 1rem;
  border: 2px solid #282828;
  border-radius: 25px;
  background: #f6f6f6;
  @media (max-width: 960px) {
    align-self: center;
    width: 100%;
    border: none;
  }
`
const SubTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
`

const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
`

const TextTotalPrice = styled.div`
  align-self: center;
`

const TotalValue = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  align-self: center;
`

const CheckOutButton = styled.button`
  border: none;
  background: #db163a;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  color: white;
  width: 65%;
  align-self: center;
  cursor: pointer;
  @media (max-width: 1260px) {
    font-size: 0.8rem;
    width: 90%;
  }
`

const DeleteButton = styled.div`
  align-self: center;
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

  &:hover {
    background: #ff002f;
  }

  @media (max-width: 1260px) {
    width: 20px;
    height: 20px;
    line-height: 1.2rem;
    align-self: flex-start;
  }
`

const Fix = styled.div`
  text-align: center;
  width: 100%;
`

const CartPage = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  let subTotal = 0
  const dispatch = useDispatch()
  if (cartItems) {
    cartItems.forEach((p) => {
      subTotal = subTotal + p.discountPrice
    })
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  return (
    <Container>
      {cartItems.length > 0 ? (
        <>
          <Title>ΚΑΛΑΘΙ ΑΓΟΡΩΝ</Title>
          <Cart>
            <Left>
              {cartItems.map((product) => (
                <ProductCart>
                  <ProductImage
                    src={product.image.replace(
                      "https://www.fylliana.gr/images/products/original/",
                      "https://www.fylliana.gr/images/products/thumb/"
                    )}
                  />
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>
                    <RegularPrice>{product.price}€</RegularPrice>
                    <DiscountPrice>{product.discountPrice}€</DiscountPrice>
                  </ProductPrice>
                  <DeleteButton onClick={() => removeFromCartHandler(product.product)}>X</DeleteButton>
                </ProductCart>
              ))}
            </Left>
            <Right>
              <SubTitle>ΣΥΝΟΛO ΚΑΛΑΘΙΟΥ</SubTitle>
              <TotalPrice>
                <TextTotalPrice>Συνολική τιμή:</TextTotalPrice>
                <TotalValue>{subTotal}€</TotalValue>
              </TotalPrice>
              <Fix>
                <Link to="/checkout">
                  <CheckOutButton>ΟΛΟΚΛΗΡΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ</CheckOutButton>
                </Link>
              </Fix>
            </Right>
          </Cart>
        </>
      ) : (
        <Title>Δεν υπάρχουν προιοντα στο καλάθι</Title>
      )}
    </Container>
  )
}

export default CartPage
