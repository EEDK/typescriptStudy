import React from 'react';

/*
 * 타입의 종류
 * Boolean => 모든 bool 연산 ( true , false ) && ||이 가능한 타입
 * number => 모든 숫자연산 ( + - * / % )이 가능한 타입
 * string => 모든 문자열을 담을수 있는 타입
 * 변수명 ? 일경우 -> 생략가능!
 */
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
