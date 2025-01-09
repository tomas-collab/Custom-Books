
import React, { Component } from 'react'
import Fantasy from './fantasy.json'
import { FormControl, Row } from 'react-bootstrap'
import BookListItem from './BookListItem'

export default class BookList extends Component {
    state = {
        search:""
    }
  render() {
    return (
        <>
        <Row>
            <FormControl 
            placeholder='search' 
            value={this.state.value}
            onChange={(e)=> this.setState({search: e.currentTarget.value.toLowerCase()})}
             />
        </Row>
        <Row>
            {Fantasy
            .filter(book=> book.title.toLowerCase().indexOf(this.state.search) !==-1 || book.category.toLowerCase().indexOf(this.state.search) !== -1 )
            .map(book=>
                <BookListItem item={book}/> )}
        </Row>
        </>
    )
  }
}
