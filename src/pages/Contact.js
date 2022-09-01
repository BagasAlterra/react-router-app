import React, { Component } from "react";
import { withRouter } from "../withRouter";
import { Button } from "react-bootstrap";

class Contact extends Component {
  goBack() {
    this.props.navigate(-1);
  }

  render() {
    return (
      <div>
        <p>Ini halaman Contact</p>
        <Button onClick={(value) => this.goBack(value)}>
          Balik ke halaman Home
        </Button>
      </div>
    );
  }
}

export default withRouter(Contact);
