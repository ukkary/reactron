
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';

import ExampleStore from '../../stores/ExampleStore';

interface IProps {
  exampleStore?: ExampleStore;
};


@inject('exampleStore') @observer
export default class Example extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <>
        <ExampleTitle>Hello World</ExampleTitle>
      </>
    );
  }
}

const ExampleTitle = styled.h1`
  color: blue;
`;

