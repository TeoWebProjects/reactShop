import React, { useState, useEffect } from "react"
import axios from "axios"
import { useLocation, useParams } from "react-router"
import styled from "styled-components"
import noImage from "../images/noImage.jpg"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { listProducts } from "../actions/productActions"
import Loader from "../components/Loader"

const Container = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`

const CategoryName = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  padding: 0.3rem;
  width: 250px;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const Image = styled.img`
  width: 220px;
  align-self: center;
`

const ContainerName = styled.div`
  height: 80px;
  width: 100%;
  position: relative;
`

const Name = styled.div`
  font-size: 1rem;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
`

const Price = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
`

const RegularPrice = styled.div`
  opacity: 0.6;
  text-decoration: line-through;
`

const DiscountPrice = styled.div`
  font-weight: bold;
`

const ProductList = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(listProducts(id))
  }, [dispatch, id])

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <CategoryName>{products[0].category_name._cdata}</CategoryName> */}
          <Products>
            {products.map((p) => (
              <Product key={p._id}>
                <Link to={`/product/${p._id}`} data-id={p._id}>
                  <Image
                    src={p.image.replace(
                      "https://www.fylliana.gr/images/products/original/",
                      "https://www.fylliana.gr/images/products/thumb/"
                    )}
                  ></Image>
                </Link>
                <ContainerName>
                  <Name>{p.name}</Name>
                </ContainerName>
                <Price>
                  <RegularPrice>{p.price}€</RegularPrice>
                  <DiscountPrice>{p.discountPrice}€</DiscountPrice>
                </Price>
              </Product>
            ))}
          </Products>
        </>
      )}
    </Container>
  )
}

export default ProductList
