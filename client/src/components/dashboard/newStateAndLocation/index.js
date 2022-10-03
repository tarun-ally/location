import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './index.scss'
import axios from 'axios'

import {AiFillHome} from "react-icons/ai"
// import './index.scss'
// import SearchBar from './searchBar'
import img from './../../../media/scenery.jpg'
import {getCreatedNewEntity} from './../../../actions/dataActions'
import Home from './home'



export default function AddingData() {
    const [selectedDropdown,setSelectedDropdown]=useState("1")
    const [inputData,setInputData]=useState("")
    const [address,setAddress]=useState("")


    const dispatch=useDispatch()

    const handleOnClick=() => {
        // window.location.href=`${window.location.origin}/catalog`

    }
    const handleInput=(e) => {
        // console.log(e.target.value,'e');
        setInputData(e.target.value)
        // window.location.href=`${window.location.origin}/catalog`
    }
    const handleInputlocation=(e) => {
        // console.log(e.target.value,'e');
        setAddress(e.target.value)
        // window.location.href=`${window.location.origin}/catalog`
    }
    const handleSubmit=() => {
        console.log('e');
        // window.location.href=`${window.location.origin}/catalog`
        let data={
            "location": [
                address
            ],
            "state": `${inputData}`
        }
        axios.post(`http://localhost:8080/api/tutorials`,data

        )
            .then(response => {

                getCreatedNewEntity(response.data)

            })
            .catch(error => {

                let showError=error.toString()

            })
    }

    const handleSelectingSearchOption=(e) => {
        // console.log(e.target.value,'e.target.value');


        // setSelectedDropdown(e.target.value)
    }
    return (
        <div className='adding-main'

            // background-image: url("img_tree.png");
            style={{backgroundImage: `url(${img})`}
            }
        // background-repeat: no-repeat;
        >
            <Home />

        </div>
    )

}