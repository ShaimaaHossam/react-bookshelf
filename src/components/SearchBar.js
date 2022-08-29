import React, { Component } from 'react'
import BackButton from './BackButton';
import {DebounceInput} from 'react-debounce-input';

class SearchBar extends Component {
   constructor(){
    super();
    this.state = {
        query: ""
    }
   }
    
       
    getBooks = (e) => {
        const query = e.target.value.split(" ").join("+")
        fetch("http://openlibrary.org/search.json?q="+query+"&limit=20&offset=0")
        .then(res => res.json())
        .then(data => { this.props.updateSearchArray(data.docs)})
        .catch(err => console.log(err))
    }
    render() {
        return (
            <form className="absolute px-6 top-0 w-full z-50 bg-white shadow-lg flex align-middle">
                <BackButton />
                <DebounceInput
                 onChange={this.getBooks} 
                 debounceTimeout={300}
                 type="text" 
                 placeholder='Search by title or author' 
                 className="w-full focus:outline-none py-2 font-semibold text-gray-700 text-lg" />
            </form>
        )
    }
}

export default SearchBar