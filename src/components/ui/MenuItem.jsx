import React, { PureComponent } from 'react';

export class MenuItem extends PureComponent {
  render() {
    const { value } = this.props;
    return <li className="menuItem">{value}</li>;
  }
}
