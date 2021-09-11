import React from "react"
import "./mansonary.css"
import { Link } from "react-router-dom"

const MansonaryCategories = () => {
  return (
    <div className="container">
      <div className="left">
        <Link
          to="/products/267"
          href="https://www.fylliana.gr/stromata"
          className="bsla image1 aman"
          data-src="/images/banners/bed-concept-a.jpg"
        >
          .
        </Link>
        <Link
          to="/products/15"
          href="https://www.fylliana.gr/stromata"
          className="bslb image2 aman"
          data-src="/images/banners/furniture-a.jpg"
        >
          .
        </Link>
      </div>
      <div className="mid">
        <div className="bsmc">
          <Link to="/products/32" className="bsmca image3 aman">
            .
          </Link>
          <Link to="/products/27" className="bsmcb image4 aman">
            .
          </Link>
        </div>
        <div className="bsmc">
          <Link to="/products/58" className="bsmcc image5 aman">
            .
          </Link>
          <Link to="/products/274" className="bsmcd image6 aman">
            .
          </Link>
        </div>
      </div>
      <div className="right">
        <Link to="/products/32" class="bsrc image7 aman">
          .
        </Link>
      </div>
    </div>
  )
}

export default MansonaryCategories
