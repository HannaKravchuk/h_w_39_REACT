import { Component } from 'react';
import Display from './StatelessComponent';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <div className="counter">
        <h2>Class Components</h2>
        <Display count={this.state.count} />
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Сбросить</button>
      </div>
    );
  }
}

export default ClassCounter;