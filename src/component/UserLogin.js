import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useForm } from 'react-hook-form'

export const UserLogin = () => {

  const { register, handleSubmit } = useForm();
  var navigate = useNavigate()

  const submit = (data) => {

    // console.log("out---", data)
    axios.post('http://localhost:4000/user/login', data).then((res) => {
      console.log("in---",res)
      if (res.data.data) {
        console.log("user found...")
        //console.log(res.data,data[0].role.name)
        console.log(res.data.data[0]?._id)
        localStorage.setItem("_id", res.data.data[0]?._id)
        console.log(res.data.data[0]?.roleId.name)

        if (res.data.data[0]?.roleId.name === "User") {
          navigate("/Userdashboard")
        }
        else if (res.data.data[0]?.roleId.name === "Admin") {
          navigate("/Admindashboard")
        }
        else if (res.data.data[0]?.roleId.name === "Vendor") {
          navigate("/Vendordashboard")
        }
        //role...

      } else {
        console.log("else part")
      }

    }).catch((err) => {
      console.log("EMAIL OR PASSWORD INCORRECT")
      alert("EMAIL OR PASSWORD INCORRECT")
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

      <div class="col-md-6 mb-5 mb-md-0">
        <div class="p-3 p-lg-5 border bg-white">

          <form onSubmit={handleSubmit(submit)} >
            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_companyname" class="text-black"> Email </label>
                <input type="text" {...register("email")} class="form-control" id="email" placeholder="Email" />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_address" class="text-black">Password<span class="text-danger"></span></label>
                <input type="text" {...register("password")} class="form-control" id="password" placeholder="Password" />
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-black btn-lg py-3 btn-block" type='submit'>submit</button>

            </div>
            <div class="form-group">
              <Link to="/UserRegi"> <button class="btn btn-black btn-lg py-3 btn-block" type='submit'>Registeration</button></Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}