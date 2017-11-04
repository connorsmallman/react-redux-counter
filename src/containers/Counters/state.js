import { addCounter, removeCounter, updateCounter } from '../../state/modules/counters';

export function mapStateToProps(state: Object): Object {
  return {
    counters: state.counters
  }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addCounter: (id: string) => dispatch(addCounter(id)),
    removeCounter: (id: string) => dispatch(removeCounter(id)),
    updateCounter: (id: string, count: number) => dispatch(updateCounter(id, count))
  };
}
