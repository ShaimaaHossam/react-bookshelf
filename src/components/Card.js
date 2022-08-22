import React, { Component } from 'react'
import ArrowButton from './ArrowButton'
import Menu from './Menu'
class Card extends Component {
    constructor(){
        super();

        this.state = {
            showMenu: false,
            menuOption: 0 //whether currently reading, want to read or read
        }
    }
    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu})
    }
    updateMenuOption = (option) => {
        this.props.updateLists(option, this.props.book)
    }
    render () {
        const {book} = this.props
        const {showMenu, menuOption} = this.state
        return (
            <div className="m-4 text-start w-1/5 relative">
                <img className="w-44 h-60 shadow-lg" src={"https://covers.openlibrary.org/b/id/"+book.cover_i+"-M.jpg"} />
                <p className="mx-2 mt-2">{book.title}</p>
                <p className="mx-2 text-sm text-gray-500">{book.author_name}</p>
                <ArrowButton toggleMenu={this.toggleMenu}/>
                <Menu 
                    showMenu={showMenu} 
                    toggleMenu={this.toggleMenu} 
                    menuOption={menuOption} 
                    updateMenuOption={this.updateMenuOption}
                />
            </div>
        )
    }
}

export default Card