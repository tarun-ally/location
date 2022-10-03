import React from 'react'
import { CgMicrosoft } from 'react-icons/cg'
import { authenticationParam, frontEndUrl, loginUrl } from '../../config'
import './index.scss'

const axios = require('axios')

export default function LoginPage() {

        const handleLoginClick = () => {
            // console.log(authenticationParam,'authenticationParam ................   index')
    // if(authenticationParam.nauk_at){

        axios.get(`${loginUrl}?success-url=${frontEndUrl}&failure-url=${frontEndUrl}&clientId=infoedge/&nauk_at=${authenticationParam.nauk_at}`, 
        // {withCredentials: false}
        )
        .then(response => {
            window.location.href = response.data.link

        })
        .catch(error => {
            console.log(error);
        })
    // }

        }
    // tried using fetch 
    // const handleLoginClick = () => {

    //     fetch(`${loginUrl}?success-url=${frontEndUrl}&failure-url=${frontEndUrl}&clientId=infoedge/&nauk_at=${authenticationParam.nauk_at}`,
    //         {
    //             method: 'GET',
    //             credentials: 'include',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 // 'Accept': '*',

    //                 'Content-Type': 'application/json',
    //                 "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    //                 'Access-Control-Allow-Origin': 'http://datalake.infoedge.com',
    //                 "Access-Control-Allow-Credentials": "true",
    //                 "Access-Control-Allow-Headers" : "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    //             }
    //         }
    //     )
    //         .then(response => {
    //             console.log(response,'response .... index ........');

    //         window.location.href = response.data.link

    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }


    return (
        <div className='login-page'>
            <p>You are not Logged In</p>
            <button onClick={handleLoginClick}>Click here to Login<CgMicrosoft /></button>

        </div>
    )
}