
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';

import * as constants from 'constants/example';
import rootStore, { RootStore } from 'stores/RootStore';

interface IProps {
  rootStore?: RootStore;
};

/**
 * Example Organisms
 */
@inject('rootStore') @observer
export default class Example extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <>
        <ExampleTitle>{ constants.hello_world }{ rootStore!.exampleStore.doubleSampleNumber }</ExampleTitle>
      </>
    );
  }
}

const ExampleTitle = styled.h1`
  color: blue;
`;
