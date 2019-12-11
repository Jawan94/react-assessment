import React, { Component } from 'react'
import BookList from './BookList'
import './App.css'
import data from './BookList.json'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: data.results,
    }
    this.addBook = this.addBook.bind(this);
    this.remove = this.remove.bind(this);

  }


  addBook(book){
    let newBook = this.state.books.slice(0)
    newBook.push({"title": book})
    this.setState({
      books: newBook
    })
  }

  remove(index){
    let newBook = this.state.books.slice(0)
    const temp = newBook.splice(index, 1)
    this.setState({
      books: newBook
    })
  }

  componentDidMount(){
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
          <BookList addBook = {this.addBook} removeBook = {this.remove} books = {this.state.books}  />
      </div>
    )
  }
}
export default App
