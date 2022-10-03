import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Content from './content'

import img_1 from './../../media/sean-stratton-ObpCE_X3j6U-unsplash.jpg'



import './index.scss'
import NavBar from './navBar'

// import {getAllEvents,getDbList} from '../../actions/dataActions'

export default function Dashboard() {

    const dispatch=useDispatch()

    useEffect(() => {
        // dispatch(getAllEvents())
        // dispatch(getDbList())
    },[])

    return (
        <div className='dashboard' style={{backgroundImage: `url(${img_1})`}}>
            {/* <NavBar /> */}
            <div className='body'>
                <Content />

                {/* <LeftSection /> */}
                {/* <RightSection /> */}
            </div>
        </div>
    )
}