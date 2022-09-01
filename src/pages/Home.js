import React, { Component } from "react";
import { withRouter } from "../withRouter";
import { Form, Button } from "react-bootstrap";

class Home extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.navigate("/contact", {
      state: {
        email: this.state.email,
      },
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(value) => this.handleEmail(value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(value) => this.handlePassword(value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(value) => this.handleSubmit(value)}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
