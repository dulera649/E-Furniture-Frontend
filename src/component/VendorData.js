import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const VendorData = () => {
  const { register, handleSubmit } = useForm();
  const [city, setcity] = useState()
  const [state, setstate] = useState()
  const [vendor, setvendor] = useState()

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


  const submit = (data) => {
    var bdata = {
      userId: localStorage.getItem("_id"),
      Name: data.Name,
      Address: data.address,
      stateId: data.stateId,
      cityId: data.cityId,
      pincode: data.pincode,
      contactNum: data.contactNum,
      CustomerSupportNumber: data.CustomerSupportNumber,
      feedbackemail: data.feedbackemail
    }
    console.log(data)
    axios.post("http://localhost:4000/vendor/vendor", bdata).then((res) => {
      console.log(res.data)
      console.log(res.data.data?._id)
      setvendor(res.data.data?._id)
      localStorage.setItem("vendor",res.data.data._id)
      localStorage.getItem("vendor")
      console.log(vendor)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getState();
    getCity();
    // getUser();
  }, [])


  const getState = () => {
    axios.get("http://localhost:4000/state/state").then((res) => {
      console.log(res.data.data)
      setstate(res.data.data)
    })
  }
  const getCity = () => {
    axios.get("http://localhost:4000/city/city").then((res) => {
      console.log(res.data.data)
      setcity(res.data.data)
    })
  }

  {//  const getUser = ()=>{
    //   axios.get("http://localhost:4000/user/user").then((res)=>{
    //      console.log(res.data.data)
    //       setuser(res.data.data)
    //   })
    // }}
  }
  return (
    <div>
      <div class="container">
        <section class="py-5 bg-light">
          <div class="container">
            <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div class="col-lg-6">
                <h1 class="h2 text-uppercase mb-0">Add Details</h1>
              </div>
              <div class="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li class="breadcrumb-item"><Link to="/vendordashboard" class="text-dark">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Add Details</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section class="py-5">
          <h2 class="h5 text-uppercase mb-4">Vendor details</h2>
          <div class="row">
            <div class="col-lg-8">
              <form onSubmit={handleSubmit(submit)}>
                <div class="row gy-3">
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="firstName">Vendor name </label>
                    <input class="form-control form-control-lg" type="text" id="firstName" placeholder="Enter your Vendor name"{...register("Name")} />
                  </div>
                  <div class="col-lg-12">
                    <label class="form-label text-sm text-uppercase" for="address">Address</label>
                    <input class="form-control form-control-lg" type="text" id="address" placeholder="Office number and street name" {...register("Address")} />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="state">state </label>
                    <select class="form-control form-control-lg" {...register("stateId")}>
                      {
                        state?.map((s) => {
                          return (<option value={s._id} >{s.Name}</option>)
                        })
                      }
                    </select>

                  </div>

                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="city">City </label>
                    <select class="form-control form-control-lg" {...register("cityId")}>
                      {
                        city?.map((c) => {
                          return (<option value={c._id} >{c.name}</option>)
                        })
                      }
                    </select>

                  </div>

                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="pincode">Pin Code/Zip Code </label>
                    <input class="form-control form-control-lg" type="text" id="pincode" placeholder="Pin/Zip Code"{...register("pincode")} />
                  </div>

                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="phone">Conatact number </label>
                    <input class="form-control form-control-lg" type="tel" id="phone" placeholder="e.g. +91 245354745"{...register("contactNum")} />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="phone">Customer Support number </label>
                    <input class="form-control form-control-lg" type="tel" id="phone" placeholder="e.g. +91 245354745"{...register("CustomerSupportNumber")} />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="email">Feedback Email address </label>
                    <input class="form-control form-control-lg" type="email" id="email" placeholder="e.g. VendorFB@example.com" {...register("feedbackemail")} />
                  </div>
                  <div class="col-lg-12 form-group">

                    <button class="btn btn-dark" type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}