import React from 'react'

import LoadingAnimation from '../loadingAnimation'
import './index.scss'

export default function LoadingPage() {
    return (
        <div className='loading-page'>
            <LoadingAnimation />
        </div>
    )
}