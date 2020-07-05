import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import styled from "styled-components";

const MyButton = styled.button`
  background: red;
  font-size: 50px;
  .poop {
    font-size: 100px;
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta></Meta>
        <Header></Header>
        <MyButton>
          Click Me
          <span className="poop">Poop</span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
