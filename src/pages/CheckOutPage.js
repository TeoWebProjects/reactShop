import { React, useState } from "react"

import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { createOrder } from "../actions/orderActions"

const Container = styled.form`
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 2rem;
  margin-top: 1rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 2px solid #db163a;
  padding: 1rem;
`

const Text = styled.label`
  margin-bottom: 0.5rem;
`
const Input = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  height: 2.507em;
  font-size: 0.97em;
  border-radius: 0;
  max-width: 100%;
  width: 100%;
  vertical-align: middle;
  background-color: #fff;
  color: #333;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);

  &:focus {
    box-shadow: 0 0 5px #ccc;
    opacity: 1;
    outline: 0;
    color: #333;
    background-color: #fff;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
`
const FirstName = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const LastName = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const SemiBox = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`
const SemiInput = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  height: 2.507em;
  font-size: 0.97em;
  border-radius: 0;
  max-width: 100%;
  width: 100%;
  vertical-align: middle;
  background-color: #fff;
  color: #333;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
`

const SelectInput = styled.select`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  height: 2.507em;
  font-size: 0.97em;
  border-radius: 0;
  max-width: 100%;
  width: 100%;
  vertical-align: middle;
  background-color: #fff;
  color: #333;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);

  &:focus {
    box-shadow: 0 0 5px #ccc;
    opacity: 1;
    outline: 0;
    color: #333;
    background-color: #fff;
  }
`
const InputOption = styled.option``

const Souma = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1.5rem;
  color: #666;
`
const Headera = styled.div`
  font-size: 1.5rem;
`

const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ececec;
  padding-bottom: 0.3rem;
`

const Proion = styled.div``
const Yposunolo = styled.div``

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
  padding-bottom: 0.3rem;
`
const ItemLeft = styled.div`
  width: 70%;
  align-self: center;
  @media (max-width: 960px) {
    width: 60%;
    font-size: 0.9rem;
  }
`
const ItemRight = styled.div`
  align-self: center;
  @media (max-width: 960px) {
    font-size: 0.9rem;
  }
`
const OrderButton = styled.button`
  border: none;
  background: #db163a;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  color: white;
  width: 65%;
  align-self: center;
  cursor: pointer;
  margin-top: 1rem;
  @media (max-width: 960px) {
    width: 90%;
  }
`
const Policy = styled.div``

const CheckOutPage = () => {
  const cart = useSelector((state) => state.cart)
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [region, setRegion] = useState("Αττική")
  const [tk, SetTk] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  let sumPrice = 0

  const orderCreate = useSelector((state) => state.orderCreate)
  cart.cartItems.forEach((item) => (sumPrice = sumPrice + item.discountPrice))
  const { loading, error, order } = orderCreate

  const handleSubmit = (e) => {
    const cartData = []
    cart.cartItems.forEach((item) =>
      cartData.push({ name: item.name, image: item.image, price: item.discountPrice, product: item.product })
    )
    e.preventDefault()
    const orderData = {
      orderItems: cartData,
      shippingAddress: { name, lastname, address, city, region, postalCode: tk, email },
      paymentMethod: "Αντικαταβολή",
      shippingPrice: 10,
      totalPrice: sumPrice,
    }

    if (cartData && orderData) {
      dispatch(createOrder(orderData))
    }
  }
  return (
    <Container>
      <Left>
        <SemiBox>
          <FirstName>
            <Text>Όνομα *</Text>
            <SemiInput onChange={(e) => setName(e.target.value)}></SemiInput>
          </FirstName>
          <LastName>
            <Text>Επίθετο *</Text>
            <SemiInput onChange={(e) => setLastname(e.target.value)}></SemiInput>
          </LastName>
        </SemiBox>
        <Box>
          <Text>Διεύθυνση *</Text>
          <Input onChange={(e) => setAddress(e.target.value)}></Input>
        </Box>
        <Box>
          <Text>Πόλη / Κωμόπολη *</Text>
          <Input onChange={(e) => setCity(e.target.value)}></Input>
        </Box>
        <Box>
          <Text>Περιφέρεια (προαιρετικό)</Text>
          <SelectInput onChange={(e) => setRegion(e.target.options[e.target.options.selectedIndex].text)}>
            <InputOption value="atiki" defaultValue>
              Αττική
            </InputOption>
            <InputOption value="das">Ανατολική Μακεδονία και Θράκη</InputOption>
            <InputOption value="opel">Κεντρική Μακεδονία</InputOption>
            <InputOption value="audi">Δυτική Μακεδονία</InputOption>
            <InputOption value="audi">Ήπειρος</InputOption>
            <InputOption value="audi">Θεσσαλία</InputOption>
            <InputOption value="audi">Ιόνια νησιά</InputOption>
            <InputOption value="audi">Δυτική Ελλάδα</InputOption>
            <InputOption value="audi">Κεντρική Ελλάδα</InputOption>
            <InputOption value="audi">Πελοπόννησος</InputOption>
            <InputOption value="audi">Βόρειο Αιγαίο</InputOption>
            <InputOption value="audi">Νότιο Αιγαίο</InputOption>
            <InputOption value="audi">Κρήτη</InputOption>
          </SelectInput>
        </Box>
        <Box>
          <Text>Ταχυδρομικός κώδικας *</Text>
          <Input onChange={(e) => SetTk(e.target.value)}></Input>
        </Box>
        <Box>
          <Text>Αριθμός τηλεφώνου *</Text>
          <Input onChange={(e) => setNumber(e.target.value)}></Input>
        </Box>
        <Box>
          <Text>Διεύθυνση email *</Text>
          <Input onChange={(e) => setEmail(e.target.value)}></Input>
        </Box>
      </Left>
      <Right>
        <Headera>Η ΠΑΡΑΓΓΕΛΙΑ ΣΑΣ</Headera>
        <Souma>
          <SubTitle>
            <Proion>ΠΡΟΪΟΝ</Proion>
            <Yposunolo>ΥΠΟΣΥΝΟΛΟ</Yposunolo>
          </SubTitle>
          {cart.cartItems.map((item) => (
            <Items key={item.product}>
              <ItemLeft> {item.name} </ItemLeft>
              <ItemRight>{item.discountPrice}€</ItemRight>
            </Items>
          ))}
          <Items>
            <ItemLeft>Αποστολή</ItemLeft>
            <ItemRight>Δωρεάν μεταφορικά</ItemRight>
          </Items>
          <Items>
            <ItemLeft>Σύνολο </ItemLeft>
            <ItemRight>{sumPrice}€</ItemRight>
          </Items>

          <Items>
            <ItemLeft>Τρόπος πληρωμής </ItemLeft>
            <ItemRight>Αντικαταβολή</ItemRight>
          </Items>
          <OrderButton onClick={handleSubmit}>ΑΠΟΣΤΟΛΗ ΠΑΡΑΓΓΕΛΙΑΣ</OrderButton>
          <Policy>
            Τα προσωπικά σας δεδομένα θα χρησιμοποιηθούν για τη διεκπεραίωση της παραγγελίας σας, την άρτια εμπειρία σας
            στον ιστότοπο και για ό,τι ακόμα περιγράφεται στην πολιτική απορρήτου.
          </Policy>
        </Souma>
      </Right>
      {console.log(order)}
    </Container>
  )
}
export default CheckOutPage
