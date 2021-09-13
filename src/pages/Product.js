import { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { listProductDetails } from "../actions/productActions"
import { addToCart } from "../actions/cartActions"
import styled from "styled-components"
import Loader from "../components/Loader"

const Container = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const SingleProduct = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: zoom-in;
`

const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: 960px) {
    font-size: 1rem;
  }
`
const Description = styled.div`
  text-align: center;
  font-size: 1.1rem;
  margin-top: 1rem;
`
const Price = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
  align-self: center;
`

const RegularPrice = styled.div`
  opacity: 0.6;
  text-decoration: line-through;
  align-self: center;
`

const DiscountPrice = styled.div`
  font-weight: bold;
  align-self: center;
`

const CartButton = styled.button`
  border: none;
  padding: 1rem;
  font-size: bold;
  background: #db163a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
`
const Availability = styled.div`
  align-self: center;
`

const FullImageCon = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(30, 20, 20, 0.5);
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`

const FullImage = styled.img`
  width: 800px;
  height: 800px;
  align-self: center;
`

const ExitImage = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid white;
  background: white;
  color: black;
  font-weight: bold;
  border-radius: 50%;
  font-size: 1.1rem;
  text-align: center;
  cursor: pointer;
  margin-top: 1rem;
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  margin-top: 1rem;
`
const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id])
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <SingleProduct>
          <Left>
            <Image src={product.image} onClick={() => setShowImage(true)}></Image>
          </Left>
          <Right>
            <Name>{product.name}</Name>
            <Description>{product.description}</Description>
            <Wrap>
              <Availability>{`Διαθεσιμότητα:${product.availability}`}</Availability>
              <Price>
                <RegularPrice>{product.price}€</RegularPrice>
                <DiscountPrice>{product.discountPrice}€</DiscountPrice>
              </Price>
            </Wrap>
            <CartButton onClick={() => dispatch(addToCart(product._id))}>ADD TO CART</CartButton>
          </Right>

          {showImage && (
            <FullImageCon>
              <FullImage src={product.image}></FullImage>
              <ExitImage onClick={() => setShowImage(false)}>X</ExitImage>
            </FullImageCon>
          )}
        </SingleProduct>
      )}
    </Container>
  )
}

export default Product
