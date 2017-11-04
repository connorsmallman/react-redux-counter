import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './state';
import Counter from '../../components/Counter';
import uuid from 'uuid/v4';

type Props = {
  counters: Object
}

class Counters extends Component<Props> {
  increment: Function
  decrement: Function
  constructor() {
    super();

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
  }

  incrementCounter(id: string, count: number) {
    const newCount = count + 1;
    this.props.updateCounter(id, newCount);
  }

  decrementCounter(id: string, count: number) {
    const newCount = count - 1;
    this.props.updateCounter(id, newCount);
  }

  addCounter() {
    const id = uuid();
    this.props.addCounter(id);
  }

  removeCounter(id: string) {
    this.props.removeCounter(id);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.counters).map((id, key) =>
          <Counter
            key={key}
            id={id}
            increment={this.incrementCounter}
            decrement={this.decrementCounter}
            remove={this.removeCounter}
            count={this.props.counters[id].count}
          />
        )}
        <button onClick={this.addCounter}>New Counter</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counters);
