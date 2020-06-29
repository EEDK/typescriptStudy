import { INCREASE, DECREASE, INCREASE_BY } from './actions/actions';

// type or interface
type CounterState = {
  count: number;
};

//초기값 선언
const initialState: CounterState = {
  count: 0,
};

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

/*function* fetchEntity(entity, apiFn, ...params) {
  yield put(entity.request(...params));
  try {
    const data = yield call(apiFn, ...params);
    yield put(entity.success(data));
  } catch (err) {
    yield put(entity.failure(err.message));
  }
}

React Saga
export const fetchEntity = <
  R extends Function,
  S extends Function,
  F extends Function,
  Param extends any[],
  Res
>(
  entity: Entity<R, S, F>,
  api: ApiCall<Param, Res>
) => {
  return function*(...p: Param) {
    yield put(entity.request(...p));
    try {
      const data = yield call(api, ...p);
      yield put(entity.success(data));
    } catch (err) {
      yield put(entity.failure(err.message));
    }
  };
};
*/

export default counter;
