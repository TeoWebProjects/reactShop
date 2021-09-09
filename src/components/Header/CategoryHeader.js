import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  padding: 1rem 2rem;
  background: #282828;
  color: white;
`
const CategoryCon = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;

  a {
    color: white;
    text-decoration: none;
  }
  a:active {
    color: white;
  }
`

const Category = styled.li``
const CategoryHeader = () => {
  return (
    <Container>
      <CategoryCon>
        <Link to="/products/7">
          <Category>ΚΑΝΑΠΕΔΕΣ</Category>
        </Link>
        <Link to="/products/171">
          <Category>ΓΡΑΦΕΙΑ</Category>
        </Link>
        <Link to="/products/22">
          <Category>ΝΤΟΥΛΑΠΕΣ</Category>
        </Link>
        <Link to="/products/156">
          <Category>ΚΡΕΒΑΤΙΑ</Category>
        </Link>
        <Link to="/products/12">
          <Category>ΠΟΛΥΘΡΟΝΕΣ</Category>
        </Link>
      </CategoryCon>
    </Container>
  )
}

export default CategoryHeader
