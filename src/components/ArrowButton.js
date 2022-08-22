import React, { Component } from 'react'

class ArrowButton extends Component {
    render () {
        const {toggleMenu} = this.props
        return (
            <div onClick={toggleMenu} className="absolute bg-green-700 shadow-xl text-4xl text-white font-medium  bottom-12 right-14  m-4 rounded-full w-12 leading-10 cursor-pointer  h-12 p-0 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>  
            </div>
        )
    }
}

export default ArrowButton