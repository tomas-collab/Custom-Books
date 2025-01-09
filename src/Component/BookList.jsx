
import React, { Component } from 'react'
import Fantasy from './fantasy.json'
import { FormControl, Row } from 'react-bootstrap'
import BookListItem from './BookListItem'

export default class BookList extends Component {
  render() {
    return (
        <>
        <Row>
            <FormControl type='search'/>
        </Row>
        <Row>
            {Fantasy.map(book=>
                <BookListItem item={book}/> )}
        </Row>
        </>
    )
  }
}
