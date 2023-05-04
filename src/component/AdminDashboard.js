import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AdminDashboard = () => {

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
    const [ users,setusers ] = useState()

    const getApi = () => {

        axios.get("http://localhost:4000/user/getuser").then((res) => {

            // console.log(res.data.users)
            setusers(res.data.data)

        }).catch((err) => {
            console.log(err)
        })
    };


    useEffect(() => {
        //  getLoggedinUserData();
        getApi();
    }, []);

    const deleteUser = (id) => {

        axios.delete("http://localhost:4000/user/user/" + id).then((res) => {

            getApi()

        }).catch((err) => {
            console.log(err)
        })
    }

    const updateUser = (id) => {
        axios.put("http://localhost:4000/user/user/" + id).then((res) => {

            getApi()

        }).catch((err) => {

            console.log(err)
        })

    }
    return (
        <div class="hero">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-5">
                        <div class="intro-excerpt">
                            <h1>Admin</h1>
                            {/* <button onClick={getApi}>Get Api</button> */}
                            <h6>
                                <table class="">
                                    <tr>
                                        <th>Role</th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>PASSWORD</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                    {
                                        users?.map((u) => {
                                            return (<tr>
                                                <td>{u.roleId.name}</td>
                                                <td>{u._id}</td>
                                                <td>{u.name}</td>
                                                <td>{u.email}</td>
                                                <td>{u.password}</td>
                                                <td>
                                                    <button onClick={() => { updateUser(u._id) }}>Update</button>
                                                </td>
                                                <td>
                                                    <button onClick={() => { deleteUser(u._id) }}>DELETE</button>
                                                </td>
                                            </tr>)
                                        })
                                    }
                                </table>
                            </h6>
                        </div>
                    </div>
                    {/* <div class="col-lg-7">
                    </div> */}
                </div>
            </div>
        </div>

    )
}