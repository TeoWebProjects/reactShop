import styled from "styled-components"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProductList from "./pages/ProductList"
import Home from "./pages/Home"
import Product from "./pages/Product"
import NoPage from "./pages/NoPage"
import CartPage from "./pages/CartPage"
import MobileMenu from "./components/MobileMenu"
import CheckOutPage from "./pages/CheckOutPage"

const Main = styled.div``

function App() {
  return (
    <Main>
      <Router>
        <Header />
        <Switch>
          <Route path="/products/:id">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/checkout">
            <CheckOutPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NoPage />
          </Route>
        </Switch>
      </Router>
    </Main>
  )
}

export default App
