import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Creatable from 'react-select/creatable';
import {getPostingData,getState} from '../../../actions/dataActions';

import './stateAndCity.scss'

import {AiFillHome} from "react-icons/ai"



export default function StateAndCity() {
    const [selectedDropdown,setSelectedDropdown]=useState("1")
    const [option,setOption]=useState("")
    const [showingAddress,setShowingAddress]=useState([])


    const location=useSelector((state) => state.dataReducer.location)

    const stateLocation=useSelector((state) => state.dataReducer.stateLocation)
    const address=useSelector((state) => state.dataReducer.address)


    const dispatch=useDispatch()


    const style={
        indicatorSeparator: () => {},
        dropdownIndicator: defaultStyles => ({
            ...defaultStyles,
            color: '#939393' // your changes to the arrow
        }),
        menu: provided => ({
            ...provided,
            marginTop: 0,
            width: '100%',
            marginTop: '-1px',


        }),
        control: base => ({
            ...base,
            border: 0,
            // This line disable the blue border
            boxShadow: 'none',
            minHeight: 35,
            height: 35,
            fontSize: 14,

        }),
        singleValue: (provided,state) => ({
            ...provided,
            fontSize: 14,
            overflow: 'visible',


        }),
        input: (provided,state) => ({
            ...provided,
            margin: '0px',
            fontSize: 14,
            '& input': {
                fontSize: 14,

            },
        }),
        group: provided => ({
            ...provided,
        }),
        option: (provided,state) => ({
            ...provided,
            fontSize: 14,
            height: "40px",
            "&:hover": {
                backgroundColor: "#5E81F4",
            },
            backgroundColor: state.isSelected? "#5E81F4":"white",
        }

        ),
    };
    const handleOnClick=() => {
        // window.location.href=`${window.location.origin}/catalog`
    }
    const handleSelectingSearchOption=(e) => {
        // console.log(e.target.value,'e.target.value');


        // setSelectedDropdown(e.target.value)
    }

    useEffect(() => {

        dispatch(getPostingData())


    },[])
    useEffect(() => {
        let ansResult=location


        // console.log(ansResult,'ansResult');
        // dispatch(getState(ansResult))


    },[location])
    useEffect(() => {
        let ansResult=location
        if(option.value) {

            let showingAddress=address[option.value]
            // state
            console.log(showingAddress,'stateLocation');
            setShowingAddress(showingAddress)
        }
        // dispatch(getState(ansResult))


    },[option])


    const handleDataType=(e) => {
        // let ansResult=location
        // console.log(e,'e');
        // dispatch(getState(ansResult))
        setOption(e)

    }
    return (
        <div className='state'>
            <div className="input-main">

                <div className="input">
                    <Creatable
                        // id={index}
                        onChange={(e) => {
                            handleDataType(e)

                        }}

                        // value={mandatoryField[index].dataType}
                        // isDisabled={mandatoryField[index].disable=='yes'? true:false}
                        isSearchable={false}
                        placeholder={'Data Type...'}
                        options={stateLocation!==undefined? stateLocation:''}
                        styles={style}
                        maxMenuHeight={200}

                    />
                </div>

            </div>

            {showingAddress.length!=0&&<div className="showing-address">

                {showingAddress!==undefined&&
                    showingAddress.map((value,index) => {
                        return (
                            <div id={index} className="row">
                                <p>
                                    {index+1}. {value}
                                    {/* {showingAddress.length} */}
                                </p>




                            </div>

                        )
                    })
                }

            </div>
            }


        </div>
    )

}