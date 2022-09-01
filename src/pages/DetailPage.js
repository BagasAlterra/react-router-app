import React, { Component } from "react";
import { withRouter } from "../withRouter";

class DetailPage extends Component {
  render() {
    return (
      <div>
        <h1>Ini Halaman {this.props.location.state.cardTitle}</h1>
        <img src={this.props.location.state.image} />
        <p>{this.props.location.state.cardTitle}</p>
        <p>{this.props.location.state.description}</p>
      </div>
    );
  }
}

export default withRouter(DetailPage);
