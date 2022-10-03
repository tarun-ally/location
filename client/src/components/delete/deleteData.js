import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Creatable from 'react-select/creatable';
import {getPostingData,getUpdatingExistingState,getDeleteExistingState} from '../../actions/dataActions';

import './deleteData.scss'
// import StateAndCity from './stateAndCity'

import {AiFillHome} from "react-icons/ai"
import {RiCloseCircleFill} from "react-icons/ri";

// import './index.scss'
// import SearchBar from './searchBar'
// import {getDbList} from './../../../actions/dataActions'


export default function DeleteData() {
    const [selectedDropdown,setSelectedDropdown]=useState("1")
    const [option,setOption]=useState("")
    const [showingAddress,setShowingAddress]=useState([])
    const [currentID,setCurrentID]=useState(-1)

    const [count,setCount]=useState(0)

    const location=useSelector((state) => state.dataReducer.location)

    const stateLocation=useSelector((state) => state.dataReducer.stateLocation)
    const address=useSelector((state) => state.dataReducer.address)
    const stateId=useSelector((state) => state.dataReducer.stateId)


    // const [selectedDropdown,setSelectedDropdown]=useState("1")
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

    const handleAddOneMoreInput=(e) => {
        let ansResult=showingAddress
        ansResult.push('')
        // ansResult[e.target.id]=e.target.value
        // console.log('e',ansResult);
        // // dispatch(getState(ansResult))
        setShowingAddress([...ansResult])

    }
    const handleRemoveInput=(deleteId) => {
        // let ansResult=showingAddress
        // ansResult.splice(id,1);
        let id=stateId[deleteId]
        dispatch(getDeleteExistingState(id))
        setCount(count+1)
        // ansResult[e.target.id]=e.target.value
        // console.log(ansResult,'ansResult',id);
        // // dispatch(getState(ansResult))
        // setShowingAddress([...ansResult])

    }

    useEffect(() => {
        dispatch(getPostingData())

        // dispatch(getState(ansResult))


    },[count])

    useEffect(() => {

        dispatch(getPostingData())


    },[])



    useEffect(() => {
        let ansResult=location
        if(option.value) {

            let showingAddress=address[option.value]
            // state
            // console.log(showingAddress,'stateLocation');
            setShowingAddress(showingAddress)
        }
        // dispatch(getState(ansResult))


    },[option])
    const handleDataType=(e) => {
        // let ansResult=location
        let id=-1
        // stateLocation
        for(let i=0; i<stateLocation.length; i++) {
            if(stateLocation[i]==e) {
                id=i;
                break;
            }
        }
        console.log(e,'e');
        // dispatch(getState(ansResult))
        if(id!=-1) {

            setCurrentID(id)
        }
        setOption(e)

    }
    const handleInput=(e) => {
        let ansResult=showingAddress
        ansResult[e.target.id]=e.target.value
        console.log('e',ansResult);
        // dispatch(getState(ansResult))
        setShowingAddress([...ansResult])

    }



    const handleSubmit=(e) => {
        // let ansResult=showingAddress
        // ansResult[e.target.id]=e.target.value
        // console.log('e',ansResult);
        // dispatch(getState(ansResult))
        // setShowingAddress([...ansResult])

        let id=stateId[currentID]
        let data={
            location: showingAddress
        }
        dispatch(getUpdatingExistingState(id,data))


    }
    // console.log(currentID,'currentID');
    return (
        <div className='delete-content'>
            <div className="heading">
                Delete Existing Entities
            </div>
            <div className="input-main">

                {/* <div className="input">
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
                </div> */}

            </div>

            {/* {showingAddress.length!=0&& */}
            <div className="showing-address">
                {console.log(stateLocation,'stateLocation')}
                {stateLocation!==undefined&&
                    stateLocation.map((value,index) => {
                        return (
                            <div id={index} className="row">
                                <input
                                    // id={index}
                                    // onChange={handleInput}
                                    value={stateLocation[index].label}
                                >
                                    {/* {stateLocation.length} */}
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
                {/* <div className="new-input" onClick={handleAddOneMoreInput}>

                    + Add more location
                </div> */}

                {/* <div className="submit-btn" onClick={handleSubmit}>
                    Update Location
                </div> */}

            </div>
            {/* // } */}


            {/* <StateAndCity /> */}


            {/* jos */}
            {/* <p className='title' onClick={handleOnClick}><AiFillHome /> Naukri Data Catalog</p> */}


        </div>
    )

}