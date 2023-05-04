import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import axios from 'axios'
import { Link } from 'react-router-dom'

export const Shop = ({ setId }) => {
  var style1 = {
    transform: " translate(5%, 0px) scale(0.45, 1)"
  }
  var style2 = {
    transform: "translate(-95%, 0px); z-index: 5"
  }
  var style3 = {
    transform: "translate(-50%, 0px); z-index: 6"
  }
  const [product, setproduct] = useState();
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  console.log(pageCount);
  var url = process.env.PUBLIC_URL + "/uploads/";
  const getApi = () => {
    axios.get("http://localhost:4000/venpro/venpro").then((res) => {
      setproduct(res.data.users);
      // console.log("id",res.data[0]?._id)
      // console.log("productname",res.data.venpro[0].product.productname)
      console.log("driveid", res.data.venpro[0].product.file.gdriveId)
      // console.log(res.data[0]?.product.file)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }
  const handleNext = () => {
    if (page == pageCount)
      return page;
    setPage(page + 1);
  }
  const handlePrevious = () => {
    if (page === 1) return page;
    setPage(page - 1)
  }
  const addToCart = (e) => {
    e.preventDefault()
    setId(e.target.value)
    productOperation(e.target.value)
  }
  const [users, setuser] = useState("")
  const getLoggedinUserData = () => {
    var id = localStorage.getItem("_id")
    axios.get("http://localhost:4000/user/user/" + id).then((res) => {
      console.log(res.data.data)
      setuser(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  function productOperation(val) {
    var productData = {
      userId: localStorage.getItem("_id"),
      venproId: val,
    }
    console.log(productData.product)
    axios.post("http://localhost:4000/cart/cart", productData).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getApi()
    getLoggedinUserData()
  }, [page])
  useEffect(() => {
    const pagedataCount = Math.ceil((product?.length ?? 0) / 5);
    setPageCount(pagedataCount)
    if (page && product) {
      //add check for product
      const LIMIT = 5;
      const skip = LIMIT * page;
      const dataskip = product.slice(page === 11 ? 0 : skip - LIMIT, skip)
      setPageData(dataskip)
    }
  }, [product, page])
  return (
    <div>
      <Helmet>
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        <link href="css/tiny-slider.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        {/* <script src="js/bootstrap.bundle.min.js"></script>
		        <script src="js/tiny-slider.js"></script>
		        <script src="js/custom.js"></script> */}
      </Helmet>

      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div class="col-lg-7">

            </div>
          </div>
        </div>
      </div>




      <div class="untree_co-section product-section before-footer-section">



        <div class="container">
          <div class="row">
            {pageData?.map((u) => {
              return (
                <div class="col-12 col-md-4 col-lg-3 mb-5">
                  <button onClick={addToCart} class="product-item" type='submit' value={u._id}> <a class="product-item" href="/cart">
                    <img src={`https://drive.google.com/uc?id=${u?.productId?.file?.gdriveId}`} class="img-fluid product-thumbnail" />
                    <h3 class="product-title">{u?.productId?.name}</h3>
                    <strong class="product-price">Rs {u?.price}</strong>

                    <span class="icon-cross">
                      <img src="images/cross.svg" class="img-fluid" />
                    </span>
                  </a></button>
                </div>


              )
            }
            )}


            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center justify-content-lg-end">
                <li
                  class="page-item mx-1"
                  onClick={handlePrevious}
                  disabled={page === 1}
                >
                  <Link class="page-link" to="#!" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </Link>
                </li>
                {Array(pageCount)
                  .fill(null)
                  .map((ele, index) => {
                    return (
                      <>
                        <li
                          class="page-item mx-1 active"
                          active={page === index + 1 ? true : false}
                          className="page-link"
                          onClick={() => setPage(index + 1)}
                        >
                          {index + 1}
                        </li>
                      </>
                    );
                  })}

                <li
                  class="page-item ms-1"
                  onClick={handleNext}
                  disabled={page === pageCount}
                >
                  <Link class="page-link" to="#!" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

  )
}
