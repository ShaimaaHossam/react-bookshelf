import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FixedButton extends Component {
    render () {
        return (
            <Link to="/search"  className="bg-green-700 shadow-xl text-4xl text-white font-medium fixed bottom-0 right-0 m-4 rounded-full w-12 leading-10 cursor-pointer  h-12 p-0 text-center">
                  +  
            </Link>
            
        )
    }
}

export default FixedButton