
import * as React from 'react';
import styled from 'styled-components';

import Example from './organisms/Example';


export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Example />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 0px;
`
