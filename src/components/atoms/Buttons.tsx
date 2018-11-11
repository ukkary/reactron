
import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  label: string;
  onClick?(e?: React.MouseEvent<HTMLDivElement>): void;
};

/**
 * Button
 */
export default class Buttons extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <Button
        onClick={ (e: React.MouseEvent<HTMLDivElement>) => { this._onClick(e) } }
      />
    );
  }

  private _onClick(e: React.MouseEvent<HTMLDivElement>) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
}

const Button = styled.div`
  align-items: center;
  border: solid 1px transparent;
  cursor: pointer;
  color: black;
`;
