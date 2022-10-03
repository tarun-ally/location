import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './index.scss'
import DeleteData from './deleteData.js'
import img_1 from './../../media/sean-stratton-ObpCE_X3j6U-unsplash.jpg'


import {AiFillHome} from "react-icons/ai"
// import './index.scss'
// import SearchBar from './searchBar'
// import {getDbList} from './../../../actions/dataActions'


export default function Delete() {
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
        <div className='delete' style={{backgroundImage: `url(${img_1})`}}>
            {/* <div className='heading'>
                Please select any state

            </div> */}
            <DeleteData />


            {/* jos */}
            {/* <p className='title' onClick={handleOnClick}><AiFillHome /> Naukri Data Catalog</p> */}


        </div>
    )

}