// @flow
import React, { type Node } from 'react';

type Props = {
  increment: Function,
  decrement: Function,
  remove: Function,
  id: string,
  count: number
}

export default function Counter(props: Props): Node {
  const { increment, decrement, remove, count } = props;
  return (
    <div>
      <button onClick={() => decrement(props.id, props.count)}>-</button>
      {count}
      <button onClick={() => increment(props.id, props.count)}>+</button>
      <button onClick={() => remove(props.id)}>Remove</button>
    </div>
  );
}
