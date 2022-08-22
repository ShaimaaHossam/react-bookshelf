import React, { Component } from 'react'
import Card from './Card'

class BookLists extends Component {
    render () {
        const {title, list, updateLists} = this.props
        return (
            <div className="my-12">
                <h1 className="text-2xl border-b-2 text-start font-bold mx-2">{title}</h1>
                <div className="flex">
                    {
                        list.map( (book, i)=> {
                            return <Card key={i} book={book} updateLists={updateLists}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BookLists