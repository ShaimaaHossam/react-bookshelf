import React, { Component } from 'react'

class FixedButton extends Component {
    render () {
        const {toggleSearch} = this.props
        return (
            <a href="#" onClick={toggleSearch} className="bg-green-700 shadow-xl text-4xl text-white font-medium fixed bottom-0 right-0 m-4 rounded-full w-12 leading-10 cursor-pointer  h-12 p-0 text-center">
                  +  
            </a>
        )
    }
}

export default FixedButton