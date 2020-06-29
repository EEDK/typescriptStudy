//Ts의 변경점 as const를 붙혀줘야함.
//-> string이 생성되지 않고 실제값 지정

const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export { INCREASE, DECREASE, INCREASE_BY };
