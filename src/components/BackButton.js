import React, { Component } from 'react'

class BackButton extends Component {
    render () {
        const{toggleSearch} = this.props
        return (
            <a onClick={toggleSearch} className="cursor-pointer  my-auto mr-6">
                <svg className="h-6 w-6" fill="none" stroke="#868C93" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </a>
        )
    }
}

export default BackButton