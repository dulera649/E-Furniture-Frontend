import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const VendorDashboard = () => {

  const [user, setuser] = useState('')

  const getLoggedinUserData = () => {
      var id = localStorage.getItem("_id")
      axios.get("http://localhost:4000/user/user/" + id).then((res) => {
          console.log(res.data.data)
          setuser(res.data.data)
      }).catch((err) => {
          console.log(err)
      })
  }

  useEffect(() => {

      getLoggedinUserData()

  }, [])

  return (
    <div>

      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>Vendor Dashboard <span clsas="d-block"> </span></h1>
                <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p>
                  <Link to='/VendorData' class="btn btn-secondary me-2">Add Details</Link>
                  <Link to='/Vendorpro' class="btn btn-secondary me-2">Add Products</Link>
                </p>

                {/* <a href="#" class="btn btn-white-outline">Add Product</a>*/}
              </div>
            </div>
            <div class="col-lg-7">
              {/* <div class="hero-img-wrap">
                <img src="images/couch.png" class="img-fluid" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}