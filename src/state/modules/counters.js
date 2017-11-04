// @flow
export const ADD_COUNTER = 'counter-app/counters/ADD_COUNTER';
export const REMOVE_COUNTER = 'counter-app/counters/REMOVE_COUNTER';
export const UPDATE_COUNTER = 'counter-app/counters/UPDATE_COUNTER';

export function addCounter(id) {
  return {
    type: ADD_COUNTER,
    id
  }
}

export function removeCounter(id) {
  return {
    type: REMOVE_COUNTER,
    id
  }
}

export function updateCounter(id: string, count: number) {
  return {
    type: UPDATE_COUNTER,
    id,
    count
  }
}

type State = {}
type Action
  = { type: typeof ADD_COUNTER, id: string }
  | { type: typeof REMOVE_COUNTER, id: string }
  | { type: typeof UPDATE_COUNTER, id: string, count: number }

export default function reducer(state: State = {}, action: Action): State {
  switch (action.type) {
    case  ADD_COUNTER: {
      return {
        ...state,
        [action.id]: {
          count: 0
        }
      };
    }
    case REMOVE_COUNTER: {
      return Object.keys(state).reduce((s, k) => {
        const newState = s;
        if (k.toString() !== action.id.toString()) {
          newState[k] = state[k];
        }
        return newState;
      }, {});
    }
    case UPDATE_COUNTER: {
      return {
        ...state,
        [action.id]: {
          count: action.count
        }
      };
    }
    default: return state;
  }
}
