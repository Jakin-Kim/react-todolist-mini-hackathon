// 오늘의 날짜와 요일을 보여주고 앞으로 해야할 일이 몇개 남았는지 보여주는 컴포넌트
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

// 오늘의 날짜, 요일, 남은 할 일의 갯수를 보여주는 TodoHead 컴포넌트
function TodoHead() {

  // 날짜 커스텀하기
  // const now = new Date();
  // const year = now.getFullYear();
  // const month = now.getMonth() + 1;
  // const date = now.getDate();
  // const today = () => {
  //   if(now.getDay() === 0) return '일요일'
  //   if(now.getDay() === 1) return '월요일'
  //   if(now.getDay() === 2) return '화요일'
  //   if(now.getDay() === 3) return '수요일'
  //   if(now.getDay() === 4) return '목요일'
  //   if(now.getDay() === 5) return '금요일'
  //   if(now.getDay() === 6) return '토요일'
  // }

  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long'})

  return (
    <TodoHeadBlock>
      {/* <h1>{year}년 {month}월 {date}일</h1> */}
      {/* <div className="day">{today()}</div> */}
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px; // 요소가 4개라면, top | right | bottom | left (시계방향으로 회전한다고 생각하면 쉽겠다!)
  border-bottom: 1px solid #e9ecef; // 요소가 3개라면, 두께 | 종류 | 색상
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;