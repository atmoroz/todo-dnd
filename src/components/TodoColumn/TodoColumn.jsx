import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 22px;
`;

class TodoColumn extends React.Component {
  render() {
    return (
      <>
        <Title>Hello TodoColumn</Title>
      </>
    );
  }
}
export default TodoColumn;
