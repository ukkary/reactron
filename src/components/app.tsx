
import * as React from 'react';
import styled from 'styled-components';

import Example from 'components/organisms/Example';

/**
 * Index App
 */
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
