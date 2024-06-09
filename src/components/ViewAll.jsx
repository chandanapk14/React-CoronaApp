import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchdata=()=>{
        console.log("hello")
        axios.get("https://api.covidtracking.com/v1/us/daily.json").then(
            (response) => {
                console.log(response.data)
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }).finally()
    }
    useEffect(()=>{fetchdata()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">DATE</th>
                                            <th scope="col">STATES</th>
                                            <th scope="col">POSITIVE</th>
                                            <th scope="col">NEGATIVE</th>
                                            <th scope="col">PENDING</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((value, index) => {
                                            return <tr>
                                                <td scope="row">{value.date}</td>
                                                <td scope="row">{value.states}</td>
                                                <td scope="row">{value.positive}</td>
                                                <td scope="row">{value.negative}</td>
                                                <td scope="row">{value.pending}</td>
                                            </tr>
                                        }
                                        )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll