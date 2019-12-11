import React, { Component } from 'react'

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          inputValue: "",
          display: "inline"
        }
    }

    showBooks(e) {
      e.preventDefault();
      this.setState({
        show: true,
      })
    }

    onInputChange(e){
    this.setState({
      inputValue: e.target.value,
    })
  }

  onAddBook(value){
    value.preventDefault();
    this.props.addBook(this.state.inputValue);
  }

  onRemoveBook(index){
    index.preventDefault();
    this.props.removeBook(index.target.id)
  }


    render() {

        return (
            <div className="bookListMain">
                <div className="header">
                <form>
                    <input onChange ={ (e) => this.onInputChange(e) }placeholder="Book" />
                    <button onClick = { (value) => this.onAddBook(value)}>
                        Add Book
                    </button>
                    <button onClick={ (e) => this.showBooks(e)}> Get Top 10 Books by Ken Follet</button>
                </form>
                <ol>
                  { this.state.show
                    &&
                    this.props.books.map((books, index) => <div><li key ={index} > {books.title}</li><button className="random" key = {books.title} id = {index} onClick= {(index) => this.onRemoveBook(index)}>X</button></div>)
                    }
                    </ol>
                </div>
            </div>
        )
    }
}
export default BookList
