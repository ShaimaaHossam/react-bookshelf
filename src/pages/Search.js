import React, { Component } from 'react'
import Card from '../components/Card';
import SearchBar from '../components/SearchBar'

class Search extends Component {
    constructor(){
        super();

        this.state = {
            showMenu: false
        }
    }
    
    updateSearchArray = (arr) => {
        this.props.updateFoundArray(arr)
    }
    render () {
        const {found, updateLists} = this.props
        return (
            <div className="z-10 absolute w-full h-screen bg-white">
                <SearchBar 
                    updateSearchArray={this.updateSearchArray}  
                />
            <div className="flex flex-wrap my-28 justify-center">
                {
                    found.map((book, i)=>{
                        return (
                            <Card key={i} book={book} updateLists={updateLists}/>
                        );
                    })
                }
               
            </div>

            </div>
        )
    }
}

export default Search