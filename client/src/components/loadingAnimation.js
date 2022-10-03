import React from 'react'
import './loadingAnimation.scss'

export default class LoadingAnimation extends React.Component {
    render() {
        return (
            <div className='dot-loader'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}