import React, { Component } from "react";
import { withRouter } from "../withRouter";
import { Form, Button } from "react-bootstrap";
import CustomCard from "../components/CustomCard";

const listCard = [
  {
    cardTitle: "Sapi",
    description: "Sapi besar",
    buttonTitle: "Klik Sapi",
    image:
      "https://www.duniasapi.com/media/k2/items/cache/75b44b0e9c2e5d305fa323c6c51d3476_XL.jpg",
  },
  {
    cardTitle: "Kambing",
    description: "Kambing besar",
    buttonTitle: "Klik Kambing",
    image:
      "https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2022/07/08/goat-1596880_640jpg-20220708113810.jpg",
  },
];

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

  handleDetailPage(item) {
    this.props.navigate("/detailPage", {
      state: {
        cardTitle: item.cardTitle,
        description: item.description,
        image: item.image,
      },
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
        <div style={{ marginTop: 50, marginLeft: 30, display: "flex" }}>
          {listCard.map((item) => {
            return (
              <CustomCard
                cardTitle={item.cardTitle}
                buttonTitle={item.buttonTitle}
                image={item.image}
                description={item.description}
                onClick={() => this.handleDetailPage(item)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
