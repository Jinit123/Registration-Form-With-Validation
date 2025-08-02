import React from 'react'
import logo from './assets/bedge.png'

const Dashboard = () => {
    return (
        <div>
            <img src={logo} alt="" className='w-200 h-200' />
            <h1 className='text-red-500 text-lg'>Welcome to bEdge</h1>
        </div>
    )
}

export default Dashboard
