import React, { Component } from "react";
import { withRouter } from "../withRouter";
import { Button } from "react-bootstrap";

class Home extends Component {
  nextPage() {
    this.props.navigate("/contact");
  }

  render() {
    return (
      <div>
        <p>Ini halaman Home</p>
        <Button variant="primary" onClick={(value) => this.nextPage(value)}>
          Lompat ke Contact
        </Button>
      </div>
    );
  }
}

export default withRouter(Home);
