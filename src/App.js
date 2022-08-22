import React from 'react';
import './App.css';
import Home from './pages/Home';
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
    this.filterBookList(this.state.found, "found" ,book)
    this.state.wantToRead.length > 0 && this.filterBookList(this.state.wantToRead, "wantToRead", book)
    this.state.read.length > 0 && this.filterBookList(this.state.read, "read", book)
    this.setState({currentlyReading: [...this.state.currentlyReading, book]})
   } 
   
   else if(option === 2){
    this.filterBookList(this.state.found, "found" ,book)
    this.state.currentlyReading.length > 0 && this.filterBookList(this.state.currentlyReading, "currentlyReading", book)
    this.state.read.length > 0 && this.filterBookList(this.state.read, "read", book)
    this.setState({wantToRead: [...this.state.wantToRead, book]})
   } 
   
   else if(option === 3){
    this.filterBookList(this.state.found, "found" ,book)
    this.state.wantToRead.length > 0 && this.filterBookList(this.state.wantToRead, "wantToRead", book)
    this.state.currentlyReading.length > 0 && this.filterBookList(this.state.currentlyReading, "read", book)
    this.setState({read: [...this.state.read, book]})   }
  }

  updateFoundArray = (arr) => {
    this.setState({found: [ ...arr]})
  }
  render() {
    return (
      <div className="App">
        <Home 
            lists={this.state} 
            updateLists={this.updateLists}
            updateFoundArray={this.updateFoundArray}
          />
      </div>
    );
  }
}

export default App;
