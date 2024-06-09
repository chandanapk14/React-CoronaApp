import React, { useState } from 'react'
import Navbar from './Navbar'

const AddDetails = () => {
    const[data,setData]=useState(
        {"date":"",
            "states":"",
            "positive":"",
            "negative":"",
            "pending":"",
            "cuurrently_hospitalised":"",
            "recovered":""
        }
    )
    const inputhandler=(event)=>{
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
<div>
        <Navbar/>
        <h2><center>ADD COVID DETAILS</center></h2>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <label htmlFor="" className="form-label">DATE</label>
                            <input type="date" id="" className="form-control" name='date' value={data.date} onChange={inputhandler}  />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <label htmlFor="" className="form-label">STATES</label>
                        <input type="text" className="form-control"  name="states" value={data.states} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <label htmlFor="" className="form-label">POSITIVE</label>
                        <input type="text" className="form-control"  name="positive" value={data.positive} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <label htmlFor="" className="form-label">NEGATIVE</label>
                        <input type="text" className="form-control"  name="negative" value={data.negative} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <label htmlFor="" className="form-label">PENDING</label>
                        <input type="text" className="form-control"  name="pending" value={data.pending} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <label htmlFor="" className="form-label">CURRENTLY HOSPITALIZED</label>
                        <input type="text" className="form-control"  name="currently_hospitalised" value={data.currently_hospitalised} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <label htmlFor="" className="form-label">RECOVERED</label>
                        <input type="text" className="form-control"  name="recovered" value={data.recovered} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddDetails