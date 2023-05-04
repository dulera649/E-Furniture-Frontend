import React from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const UserRegi = () => {

  const { register, handleSubmit } = useForm();
  const [roles, setroles] = useState()
  const submit = (data) => {

    console.log("....", data)
    axios.post("http://localhost:4000/user/user", data).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getRoles();
  }, [])

  const getRoles = () => {

    axios.get("http://localhost:4000/role/role").then((res) => {
      console.log(res.data.data)
      setroles(res.data.data)
    })
  }
  return (

    <div>
      <Helmet>
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        <link href="css/tiny-slider.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
      </Helmet>

      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>Registration</h1>
              </div>
            </div>
            <div class="col-lg-7">
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-5 mb-md-0">

        <div class="p-3 p-lg-5 border bg-white">


          <form id="request" onSubmit={handleSubmit(submit)} >
            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_companyname" class="text-black"> Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="username" placeholder='Name'{...register("name")} />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_address" class="text-black"> Email <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="email" placeholder="Email"{...register("email")} />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_address" class="text-black"> Password <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="password" placeholder="Password"{...register("password")} />
              </div>
            </div>

            <div class="form-group">
              <label for="c_country" class="text-black"> Gender <span class="text-danger">*</span></label>
              <select id="gender" class="form-control" {...register("gender")}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div class="form-group">
              <label for="c_country" class="text-black"> Roles <span class="text-danger">*</span></label>
              <select {...register('roleId')} class="form-control">
                {
                  roles?.map((r) => {
                    return (<option value={r._id}>{r.name}</option>)
                  })
                }
              </select>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_address" class="text-black">Mobile No.<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="contactnum" placeholder="Contact number" {...register("contactnum")} />
              </div>
            </div>


            <div class="form-group">
              <button class="btn btn-black btn-lg py-3 btn-block" type='submit' value='button'>submit</button>
            </div>
            <div class="form-group">
              <Link to="/UserLogin"> <button class="btn btn-black btn-lg py-3 btn-block" type='submit'>Login</button></Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}




{/* <div />
      <div class="auth-form-light text-left py-5 px-4 px-sm-5">
        <div class="brand-logo">
          <img src="../../images/logo.svg" alt="logo" />
        </div>
        <h4>New here?</h4>
        <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
        <form id="request" onSubmit={handleSubmit(submit)} class="pt-3">
          <div class="form-group">
            <input type="text" class="form-control form-control-lg" id="username" placeholder="Username" {...register("name")} />
          </div>
          <div class="form-group">
            <input type="email" class="form-control form-control-lg" id="email" placeholder="Email" {...register("email")} />
          </div>
          <div class="form-group">
            <input type="password" class="form-control form-control-lg" id="password" placeholder="Password" {...register("password")} />
          </div>
          <div class="form-group">
            <select class="form-control form-control-lg" id="gender" placeholder="gender"{...register("gender")}>
              <option>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option>Others</option>
            </select>
          </div>
          <div class="form-group">
            <input type="contactnum" class="form-control form-control-lg" id="contactnum" placeholder="contactnum" {...register("contactnum")} />
          </div>
          <div class="form-group">
            <label>ROLE</label>
            <select {...register('role')} class="form-control form-control-lg">
              {
                roles?.map((r)=>{
                  return(<option value={r._id}>{r.name}</option>)
                })
              }
            </select>
          </div>
          <div class="form-group">
            <label>role</label>
            <select {...register("role")} class="form-control form-control-lg" >
              {
                roles?.map((role) => {
                  return (
                    <option vlaue={role._id}>{role._name}</option>
                  )
                })
              }
            </select>
          </div> 
           <div class="mb-4">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input"/>
                      I agree to all Terms &amp; Conditions
                    <i class="input-helper"></i></label>
                  </div>
                </div> 
          <div class="mt-3">
            <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type='submit'>
              SIGN UP</button>
          </div>
          <div class="text-center mt-4 font-weight-light">
            Already have an account?
            <NavLink Link to="/UserLogin" class="text-primary">Login</NavLink>
          </div>
        </form>
      </div> */}