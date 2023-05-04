import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const VenPro = () => {
  const { register, handleSubmit } = useForm();
  const [cat, setCategory] = useState([]);
  const [sub, setSub] = useState([]);
  const [brand, setBrand] = useState([]);
  const [productid, setProduct] = useState('');
  const [user, setUser] = useState('');
  const [fileData, setFileData] = useState('');

  useEffect(() => {
    getCategory();
    getSub();
    getBrand();
    getLoggedinUserData();
  }, []);

  const getLoggedinUserData = () => {
    var id = localStorage.getItem('_id');
    axios.get(`http://localhost:4000/user/user/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategory = () => {
    axios.get('http://localhost:4000/category/category')
      .then((res) => {
        console.log(res.data.data);
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSub = () => {
    axios.get('http://localhost:4000/subcat/subcat')
      .then((res) => {
        console.log(res.data.data);
        setSub(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBrand = () => {
    axios.get('http://localhost:4000/brand/brand')
      .then((res) => {
        console.log('brand...........', res.data.data);
        setBrand(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submit = async (data) => {
    var formData = new FormData();
    formData.append('file', data.file[0]);
    const response = await axios.post('http://localhost:4000/upload/upload', formData);
    if (response != null || response != undefined) {
      setFileData(response.data.data._id);
    }
    if (fileData != null || fileData != undefined) {
      var prodata = {
        user: localStorage.getItem('_id'),
        name: data.name,
        categoryId: data.categoryId,
        subCategoryId: data.subCategoryId,
        brandId: data.brandId,
        file: fileData,
        BasePrice: data.BasePrice
      };


      console.log("prodata");
      await axios.post('http://localhost:4000/product/product', prodata).then((res) => {
        console.log(res.data);
        console.log(res.data.data)
        setProduct(res.data.data._id);
        console.log();

      })
        .catch((err) => {
          console.log(err);
        });

      if (productid != null || productid !== undefined) {
        var vdata = {
          productId: productid,
          vendorId: localStorage.getItem('vendor'),
          qty: data.qty,
          price: data.price
        };
        console.log(vdata);
        await axios.post('http://localhost:4000/venpro/venpro', vdata).then((res) => {
          console.log(res.data);
        })
          .catch((err) => {

            console.log(err);
          });
      }
    }
  };
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
          <h2 class="h5 text-uppercase mb-4 text-lg-end">Vendor details</h2>
          <div class="row">
            <div class="col-lg-8">
              <form onSubmit={handleSubmit(submit)}>
                <div class="row gy-3">
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="firstName">Product name </label>
                    <input class="form-control form-control-lg" type="text" id="firstName" placeholder="Enter your Product name"{...register("name")} />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="state">category </label>
                    <select class="form-control form-control-lg" {...register("categoryId")}>
                      {
                        cat?.map((s) => {
                          return (<option value={s._id} >{s.name}</option>)
                        })
                      }
                    </select>

                  </div>

                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="city">subcategory </label>
                    <select class="form-control form-control-lg" {...register("subCategoryId")}>
                      {
                        sub?.map((c) => {
                          return (<option value={c._id} >{c.name}</option>)
                        })
                      }
                    </select>

                  </div>
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="city">Brand </label>
                    <select class="form-control form-control-lg" {...register("brandId")}>
                      {
                        brand?.map((b) => {
                          return (<option value={b._id} >{b.name}</option>)
                        })
                      }
                    </select>

                  </div>
                  {/* {<div class="col-lg-6">
                <label class="form-label text-sm text-uppercase" for="user">User </label>
                <select class="form-control form-control-lg" {...register("user")}>
                             {
                                   user?.map((u)=>{
                                      return(<option value={u._id} >{u.name}</option>)
                                   })
                             }
                                        </select>
              </div>} */}
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="phone">Product Img</label>
                    <input class="form-control form-control-lg" type="file" id="file" placeholder="img"{...register("file")} />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="pincode">baseprice</label>
                    <input class="form-control form-control-lg" type="text" id="pincode" placeholder="Base Price"{...register("BasePrice")} />
                  </div>

                  <div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="pincode">Qty</label>
                    <input class="form-control form-control-lg" type="text" id="pincode" placeholder="Qty"{...register("qty")} />
                  </div><div class="col-lg-6">
                    <label class="form-label text-sm text-uppercase" for="pincode">price</label>
                    <input class="form-control form-control-lg" type="text" id="pincode" placeholder="Price"{...register("price")} />
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