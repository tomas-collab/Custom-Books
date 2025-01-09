import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class BookListItem extends Component {
  render() {
    return (
        <Card style={{ width: '15rem', borderRadius:'1.5rem', margin:'1px', background:'black', color:'white' }}>
        <Card.Img variant="top" src={this.props.item.img}/>
        <Card.Body>
          <Card.Title>{this.props.item.title}</Card.Title>
          <Card.Text>
            {this.props.item.category} - {this.props.item.price}$
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
