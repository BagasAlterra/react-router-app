import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class CustomCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.cardTitle}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary" onClick={this.props.onClick}>
            {this.props.buttonTitle}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
