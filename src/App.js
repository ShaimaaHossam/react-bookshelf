import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Search from './pages/Search';
import BookDetails from './components/BookDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      found: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }
  filterBookList = (list, listname, book) => {
     const filter = list.filter(l => l.key !== book.key)
     this.setState({[listname]: [...filter]})
  }
  componentDidUpdate(){
    console.log(this.state)
  }
  updateLists = (option, book) => {
   if(option === 1){
    console.log(this.state.found.includes(book))
    this.filterBookList(this.state.found, "found" ,book)
    this.state.wantToRead.length > 0 && this.filterBookList(this.state.wantToRead, "wantToRead", book)
    this.state.read.length > 0 && this.filterBookList(this.state.read, "read", book)
    !this.state.currentlyReading.includes(book) && this.setState({currentlyReading: [...this.state.currentlyReading, book]})
   } 
   
   else if(option === 2){
    this.filterBookList(this.state.found, "found" ,book)
    this.state.currentlyReading.length > 0 && this.filterBookList(this.state.currentlyReading, "currentlyReading", book)
    this.state.read.length > 0 && this.filterBookList(this.state.read, "read", book)
    !this.state.wantToRead.includes(book) && this.setState({wantToRead: [...this.state.wantToRead, book]})
   } 
   
   else if(option === 3){
    this.filterBookList(this.state.found, "found" ,book)
    this.state.wantToRead.length > 0 && this.filterBookList(this.state.wantToRead, "wantToRead", book)
    this.state.currentlyReading.length > 0 && this.filterBookList(this.state.currentlyReading, "currentlyReading", book)
    !this.state.read.includes(book) && this.setState({read: [...this.state.read, book]})   }
  }

  updateFoundArray = (arr) => {
    this.setState({found: [ ...arr]})
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home lists={this.state} updateLists={this.updateLists} updateFoundArray={this.updateFoundArray}/>} />
          <Route path="search" element={<Search found={this.state.found} updateLists={this.updateLists} updateFoundArray={this.updateFoundArray}/>}/> 
          <Route path="works/:id" element={<BookDetails original={this.state.original}/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
