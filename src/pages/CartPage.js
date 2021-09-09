import React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../actions/cartActions"
const Container = styled.div`
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
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
`

const Left = styled.div`
  flex: 2;
  border: 4px solid #282828;
  border-radius: 25px;
  padding: 1rem;
`

const ProductCart = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
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
`

const DiscountPrice = styled.div`
  align-self: center;
  font-size: 1.5rem;
  font-weight: 500;
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
  border: 4px solid #282828;
  border-radius: 25px;
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
              <CheckOutButton>ΟΛΟΚΛΗΡΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ</CheckOutButton>
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
