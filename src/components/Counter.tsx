import React from 'react';

type IncrementProps = {
  title: string;
};

type IncrementState = {
  count: number;
};

export default class Counter extends React.Component<
  IncrementProps,
  IncrementState
> {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter">
        <h1>{this.props.title}</h1>
        <h2>{this.state.count}</h2>
        <div className="form">
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}
