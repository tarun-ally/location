import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './home.scss'
import axios from 'axios'

import {AiFillHome} from "react-icons/ai"
import {RiCloseCircleFill} from "react-icons/ri";

// import './index.scss'
// import SearchBar from './searchBar'
import img from './../../../media/scenery.jpg'
import {getCreatedNewEntity} from './../../../actions/dataActions'



export default function Home() {
    const [selectedDropdown,setSelectedDropdown]=useState("1")
    const [inputData,setInputData]=useState("")
    const [address,setAddress]=useState([''])


    const dispatch=useDispatch()

    const handleOnClick=() => {
        // window.location.href=`${window.location.origin}/catalog`

    }

    const handleInput=(e) => {
        let ansResult=address
        ansResult[e.target.id]=e.target.value
        // ansResult[e.target.id]=e.target.value
        // // dispatch(getState(ansResult))
        setAddress([...ansResult])
        // console.log(e.target.id,'e');
        // setInputData(e.target.value)
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
            "location": address,
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
    const handleRemoveInput=(id) => {
        let ansResult=address
        ansResult.splice(id,1);

        // ansResult[e.target.id]=e.target.value
        console.log(ansResult,'ansResult',id);
        // // dispatch(getState(ansResult))
        setAddress([...ansResult])

    }
    const handleAddOneMoreInput=(e) => {
        let ansResult=address
        ansResult.push('')
        // ansResult[e.target.id]=e.target.value
        // console.log('e',ansResult);
        // // dispatch(getState(ansResult))
        setAddress([...ansResult])

    }
    return (
        <div className='adding-Data'

        // background-image: url("img_tree.png");
        // style={{backgroundImage: `url(${img})`}
        // }
        // background-repeat: no-repeat;
        >
            <div className='heading'>
                Please new add state

            </div>

            <input onChange={handleInput}
                placeholder='Any State ...'
            >

            </input>

            <div className="address">

                <div className='heading'>
                    Please input location with full address

                </div>



                {address!==undefined&&
                    address.map((value,index) => {
                        return (
                            <div id={index} className="row">
                                <input
                                    id={index}
                                    onChange={handleInput}
                                    value={value}
                                >
                                    {/* {address.length} */}
                                </input>
                                <div
                                    id={index}
                                    className="close"
                                    onClick={() => handleRemoveInput(index)}
                                >

                                    <RiCloseCircleFill size={35}
                                        id={index}

                                    />


                                </div>
                            </div>

                        )
                    })
                }
                {/* <input onChange={handleInputlocation}
                    placeholder='Any State ...'
                >

                </input> */}
            </div>
            <div className="new-input" onClick={handleAddOneMoreInput}>

                + Add more location
            </div>
            <div className="adding-btn">
                <button onClick={handleSubmit}>

                    Adding State and Location
                </button>
            </div>
            {/* jos */}
            {/* <p className='title' onClick={handleOnClick}><AiFillHome /> Naukri Data Catalog</p> */}


        </div>
    )

}