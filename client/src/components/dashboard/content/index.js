import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './index.scss'
import StateAndCity from './stateAndCity'

import {AiFillHome} from "react-icons/ai"
// import './index.scss'
// import SearchBar from './searchBar'
// import {getDbList} from './../../../actions/dataActions'


export default function Content() {
    const [selectedDropdown,setSelectedDropdown]=useState("1")
    const dispatch=useDispatch()

    const handleOnClick=() => {
        // window.location.href=`${window.location.origin}/catalog`
    }
    const handleSelectingSearchOption=(e) => {
        // console.log(e.target.value,'e.target.value');


        // setSelectedDropdown(e.target.value)
    }
    return (
        <div className='content'>
            <div className='heading'>
                Please select any state

            </div>
            <StateAndCity />


            {/* jos */}
            {/* <p className='title' onClick={handleOnClick}><AiFillHome /> Naukri Data Catalog</p> */}


        </div>
    )

}