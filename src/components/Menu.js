import React, { Component } from 'react'

class Menu extends Component {
    updateOption = (choice) => {
        this.props.toggleMenu()
        this.props.updateMenuOption(choice)
    }

    render () {
        const {showMenu} = this.props
    
        return (
           showMenu && <ul className="absolute bg-gray-100 right-0 shadow-md bottom-12 rounded-md">
                <li onClick={() => this.updateOption(0)} className="text-sm px-4 border-b-2 text-gray-500" >Move to</li>
                <li onClick={() => this.updateOption(1)} className="text-sm px-4 cursor-pointer hover:bg-blue-600 hover:text-white">Currently Reading</li>
                <li onClick={() => this.updateOption(2)} className="text-sm px-4 cursor-pointer hover:bg-blue-600 hover:text-white">Want to read</li>
                <li onClick={() => this.updateOption(3)} className="text-sm px-4 cursor-pointer hover:bg-blue-600 hover:text-white">Read</li>
            </ul>
        )
    }
}

export default Menu