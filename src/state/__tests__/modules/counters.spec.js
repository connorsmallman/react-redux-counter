import counters, {
  addCounter,
  removeCounter,
  updateCounter,
  ADD_COUNTER,
  REMOVE_COUNTER,
  UPDATE_COUNTER
} from '../../modules/counters';

const COUNTER_ID = 'COUNTER_ID';

describe('actions', () => {
  it('Should return action to add new counter', () => {
    const expectedAction = {
      type: ADD_COUNTER,
      id: COUNTER_ID
    };
    expect(addCounter(COUNTER_ID)).toEqual(expectedAction);
  });

  it('Should return action to remove a counter', () => {
    const expectedAction = {
      type: REMOVE_COUNTER,
      id: COUNTER_ID
    };
    expect(removeCounter(COUNTER_ID)).toEqual(expectedAction);
  });

  it('Should action to update the count of a counter', () => {
    const expectedAction = {
      type: UPDATE_COUNTER,
      id: COUNTER_ID,
      count: 1
    };
    expect(updateCounter(COUNTER_ID, 1)).toEqual(expectedAction);
  });
});

describe('reducers', () => {
  it('Should add new counter', () => {
    const currentState = {};

    const expectedState = {
      [COUNTER_ID]: {
        count: 0
      }
    };

    const state = counters(
      currentState, addCounter(COUNTER_ID)
    );

    expect(state).toEqual(expectedState);
  });

  it('Should remove a counter by id', () => {
    const currentState = {
      [COUNTER_ID]: {
        count: 0
      }
    };

    const expectedState = {}

    const state = counters(
      currentState, removeCounter(COUNTER_ID)
    );

    expect(state).toEqual(expectedState);
  });

  it('Should update the count of a counter', () => {
    const currentState = {
      [COUNTER_ID]: {
        count: 0
      }
    };

    const expectedState = {
      [COUNTER_ID]: {
        count: 1
      }
    };

    const state = counters(
      currentState, updateCounter(COUNTER_ID, 1)
    );

    expect(state).toEqual(expectedState);
  });
});
